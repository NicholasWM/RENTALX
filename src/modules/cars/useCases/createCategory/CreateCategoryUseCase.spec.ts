import { AppError } from "../../../../errors/AppError"
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CaregoriesRepositoyInMemory"
import { CreateCategoriesUseCase } from "./CreateCategoryUseCase"

let createCategoryUseCase: CreateCategoriesUseCase
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory

describe("Create Category", () => {
    beforeEach(() => {
        categoriesRepositoryInMemory = new CategoriesRepositoryInMemory()
        createCategoryUseCase = new CreateCategoriesUseCase(
            categoriesRepositoryInMemory
        );
    });

    it("shoud be able to create a new category", async () => {
        const category = {
            name: 'Category Test',
            description: 'Category Description Test',
        }
        await createCategoryUseCase.execute({
            name: category?.name,
            description: category?.description,
        })

        const categoryCreated = await categoriesRepositoryInMemory.findByName(
            category.name
        )

        expect(categoryCreated).toHaveProperty('id')
    })
    it("shoud not be able to create a new category with same name", async () => {
        expect(async () => {
            const category = {
                name: 'Category Test',
                description: 'Category Description Test',
            }
            await createCategoryUseCase.execute({
                name: category?.name,
                description: category?.description,
            })

            await createCategoryUseCase.execute({
                name: category?.name,
                description: category?.description,
            })
        }).rejects.toBeInstanceOf(AppError)
    })
})