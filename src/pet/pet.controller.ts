import { BadRequestException, Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import CreatePetControllerInput from './dtos/create.pet.controller.input';
import CreatePetUseCaseOutput from './usecases/dtos/create.pet.usecase.output';
import CreatePetUseCaseInput from './usecases/dtos/create.pet.usecase.input';
import PetTokens from './pet.tokens';
import { IUseCase } from 'src/domain/iusecase.interface';
import GetPetByIdUseCaseInput from './usecases/dtos/get.pet.usecase.input';
import GetPetByIdUseCaseOutput from './usecases/dtos/get.pet.usecase.output';
import UpdatePetControllerInput from './dtos/update.pet.controller.input';
import UpdatePetByIdUseCaseInput from './usecases/dtos/update.pet.usecase.by.id.input';
import UpdatePetByIdUseCaseOutput from './usecases/dtos/update.pet.usecase.by.id.output';
import DeletePetByIdUseCaseInput from './usecases/dtos/delete.pet.usecase.input';
import DeletePetByIdUseCaseOutput from './usecases/dtos/delete.pet.usecase.output';

@Controller('pet')
export class PetController {
    @Inject(PetTokens.createPetUseCase)
    private readonly createPetUseCase: IUseCase<CreatePetUseCaseInput, CreatePetUseCaseOutput>

    @Inject(PetTokens.getPetByIdUseCase)
    private readonly getPetByIdUseCase: IUseCase<GetPetByIdUseCaseInput, GetPetByIdUseCaseOutput>
  

    @Inject(PetTokens.updatePetUseCase)
    private readonly updatePetUseCase: IUseCase<UpdatePetByIdUseCaseInput, UpdatePetByIdUseCaseOutput>

    @Inject(PetTokens.deletePetUseCase)
    private readonly deletePetUseCase: IUseCase<DeletePetByIdUseCaseInput, DeletePetByIdUseCaseOutput>

    @Post()
    async createPet(@Body() input: CreatePetControllerInput): Promise<CreatePetUseCaseOutput> {
        const useCaseInput = new CreatePetUseCaseInput({ ...input})
        return await this.createPetUseCase.run(useCaseInput)
        //console.log(input)
    }

    @Get(':id')
    async getPetById(@Param('id') id: string): Promise<GetPetByIdUseCaseOutput> {
        try {
            const useCaseInput = new GetPetByIdUseCaseInput({ id })
            return await this.getPetByIdUseCase.run(useCaseInput)   
        } catch (error) {
            throw new BadRequestException(JSON.parse(error.message))
        }
    }

    @Put(':id')
    async updatePet(@Body() input: UpdatePetControllerInput, @Param('id') id:string) {
        try {   //console.table(input)
            const useCaseInput = new UpdatePetByIdUseCaseInput({ 
                ...input,
                id
            })
            return await this.updatePetUseCase.run(useCaseInput)
        } catch (error) {
            throw new BadRequestException(JSON.parse(error.message))
        }
    }

    @Delete(':id')
    async deletePet(@Param('id') id: string) {
        try {
            const useCaseInput = new DeletePetByIdUseCaseInput({id})
            return await this.deletePetUseCase.run(useCaseInput)
        } catch (error) {
            throw new BadRequestException(JSON.parse(error.message));
        }
    }
}
