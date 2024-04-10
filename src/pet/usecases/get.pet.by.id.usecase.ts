import { IUseCase } from "src/domain/iusecase.interface";
import GetPetByIdUseCaseInput from "./dtos/get.pet.usecase.input";
import GetPetByIdUseCaseOutput from "./dtos/get.pet.usecase.output";
import { Pet } from "../schemas/pet.schemas";
import PetNotFoundError from "src/domain/erros/pet.not.foud.error";


export default class GetPetByIdUseCase implements IUseCase<GetPetByIdUseCaseInput, GetPetByIdUseCaseOutput> {
    petRepository: any;
    async run(input: GetPetByIdUseCaseInput): Promise<GetPetByIdUseCaseOutput> {
       const pet = await this.getPetById(input.id)

       if(pet === null) {
        throw new PetNotFoundError()
       }

       return new GetPetByIdUseCaseOutput({
        id: pet._id,
        name: pet.name,
        type: pet.type,
        size: pet.size,
        gender: pet.gender,
        bio: pet.bio,
        photo: pet.photo,
        createdAt: pet.createdAt,
        updatedAt: pet.updatedAt,
       })
    }
    private async getPetById(id: string): Promise<Pet> {
        try {
            return await this.petRepository.getPetById(id) 
        } catch (error) {
            return null
        }
    }
}