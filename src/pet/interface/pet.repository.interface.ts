import { Pet } from "../schemas/pet.schemas";
import FindByFilterAndTotal from "../usecases/dtos/findy.by.filter.and.total";
import GetPetsUseCaseInput from "../usecases/dtos/get.pets.usecase.input";

export default interface IPetRepository {
    create(data: Partial<Pet>): Promise<Pet>
    getById(id: string): Promise<Pet>
    updateById(data: Partial<Pet>): Promise<void>
    deletePetById(id: string) : Promise<void>
    findByFilter(input: GetPetsUseCaseInput): Promise<FindByFilterAndTotal>
}