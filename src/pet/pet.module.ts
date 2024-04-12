import { Module } from '@nestjs/common';
import { PetController } from './pet.controller';
import PetTokens from './pet.tokens';
import CreatePetUseCase from './usecases/create.pet.usecase';
import PetRepository from './pet.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Pet, PetSchema } from './schemas/pet.schemas';
import GetPetByIdUseCase from './usecases/get.pet.by.id.usecase';
import UpdatePetByIDUseCase from './usecases/update.pet.by.id.usecase';
import DeletePetByIdUseCase from './usecases/delete.pet.usecase';
import FileService from 'src/file.service';
import AppTokens from 'src/app.tokens';

@Module({
  controllers: [PetController],
  imports: [MongooseModule.forFeature([{ name: Pet.name, schema: PetSchema}])],
  providers: [{
    provide: PetTokens.createPetUseCase,
    useClass: CreatePetUseCase
  },
  {
    provide: PetTokens.petRepository,
    useClass: PetRepository
  },
  {
    provide: PetTokens.getPetByIdUseCase,
    useClass: GetPetByIdUseCase
  }, 
  {
    provide: PetTokens.updatePetUseCase,
    useClass: UpdatePetByIDUseCase
  },
  {
    provide: PetTokens.updatePetPhotoByIdUseCase,
    useClass: UpdatePetByIDUseCase
  },
  {
    provide: PetTokens.deletePetUseCase,
    useClass: DeletePetByIdUseCase
  },
  {
    provide: AppTokens.fileService,
    useClass: FileService,
  }
]
})
export class PetModule {}
