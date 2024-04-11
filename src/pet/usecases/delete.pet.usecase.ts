import { IUseCase } from "src/domain/iusecase.interface";
import DeletePetByIdUseCaseInput from "./dtos/delete.pet.usecase.input";
import DeletePetByIdUseCaseOutput from "./dtos/delete.pet.usecase.output";
import PetNotFoundError from "src/domain/erros/pet.not.foud.error";
import { Pet } from "../schemas/pet.schemas";
import { Inject } from "@nestjs/common";
import PetTokens from "../pet.tokens";
import IPetRepository from "../interface/pet.repository.interface";

export default class DeletePetByIdUseCase implements IUseCase<DeletePetByIdUseCaseInput, DeletePetByIdUseCaseOutput> {
    
    constructor(
        @Inject(PetTokens.petRepository)
        private readonly petRepository: IPetRepository
    ){}
    
    async run(input: DeletePetByIdUseCaseInput): Promise<DeletePetByIdUseCaseOutput> {
        let pet = await this.getPetById(input.id)
       
        if(!pet) {
            throw new PetNotFoundError()
        }

        await this.petRepository.deletePetById(input.id)

        return new DeletePetByIdUseCaseOutput()

    }


    private async getPetById(id: string): Promise<Pet> {
        try {
            return await this.petRepository.getById(id) 
        } catch (error) {
            return null
        }
    }

}