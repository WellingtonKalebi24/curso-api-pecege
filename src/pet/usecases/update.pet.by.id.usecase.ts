import { IUseCase } from "src/domain/iusecase.interface";
import UpdatePetByIdUseCaseInput from "./dtos/update.pet.usecase.by.id.input";
import UpdatePetByIdUseCaseOutput from "./dtos/update.pet.usecase.by.id.output";
import IPetRepository from "../interface/pet.repository.interface";
import PetTokens from "../pet.tokens";
import PetNotFoundError from "src/domain/erros/pet.not.foud.error";
import { Inject } from "@nestjs/common";
import { Pet } from "../schemas/pet.schemas";

export default class UpdatePetByIDUseCase implements IUseCase<UpdatePetByIdUseCaseInput, UpdatePetByIdUseCaseOutput> {
   
    constructor(
        @Inject(PetTokens.petRepository)
        private readonly petRepostory : IPetRepository
    ) {}
   
    async run(input: UpdatePetByIdUseCaseInput): Promise<UpdatePetByIdUseCaseOutput> {
        let pet = await this.getPetById(input.id)

        if(!pet) {
            throw new PetNotFoundError()
        }

        await this.petRepostory.updateById({
            ...input,
            _id: input.id
        });


        pet = await this.getPetById(input.id)

        return new UpdatePetByIdUseCaseOutput({
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
            return await this.petRepostory.getById(id) 
        } catch (error) {
            return null
        }
    }
}



