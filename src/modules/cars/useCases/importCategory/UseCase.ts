import { parse as csvParse } from 'csv-parse'
import { inject, injectable } from 'tsyringe'
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"

const fs = require('fs')

interface IImportCategory {
    name: string,
    description: string,
}
@injectable()
class ImportCategoryUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ) {}

    
    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]>{
        
        return new Promise((resolve, reject) => {
            let categories: IImportCategory[] = []
            const stream = fs.createReadStream(file.path) // Permite que faça a leitura do arquivo em partes
            const parseFile = csvParse()
            stream.pipe(parseFile) // Pega o pedaço lido e passa para o parseFile
            parseFile.on("data", async (line) => {
                const [name, description] = line
                categories.push({
                    name,
                    description
                })
            }).on('end', ()=> {
                fs.promises.unlink(file.path)
                resolve(categories)
            }).on('error', (error) => reject(error))

        })
    }
    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file)
        categories.map(async ({name, description}) => {
            console.log(name);
            
            const existCategory = await this.categoriesRepository.findByName(name);
            if(!existCategory){
                await this.categoriesRepository.create({
                    name,
                    description
                })
            }
        })
        
        // this.categoriesRepository.create
    }
}

export { ImportCategoryUseCase }