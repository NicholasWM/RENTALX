import { parse as csvParse } from 'csv-parse'
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"

const fs = require('fs')

interface IImportCategory {
    name: string,
    description: string,
}

class UseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    
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
        categories.map(({name, description}) => {
            const existCategory = this.categoriesRepository.findByName(name);
            if(!existCategory){
                this.categoriesRepository.create({
                    name,
                    description
                })
            }
        })
        
        // this.categoriesRepository.create
    }
}

export { UseCase }