import { IUseCase } from "src/domain/iusecase.interface";
import GetShelterDetailsUseCaseOutput from "./dtos/get.shelter.details.usecase.output";
import { Inject, Injectable } from "@nestjs/common";
import ShelterTokens from "../shelter.tokens";
import IShelterRepository from "../interface/shelter.repository.interface";

@Injectable()
export default class GetShelterDetailsUseCase 
    implements IUseCase<null, GetShelterDetailsUseCaseOutput> {
    constructor(
        @Inject(ShelterTokens.shelterRepository)
        private readonly shelterRepository: IShelterRepository,
    ) {}
   
    async run(input: null): Promise<GetShelterDetailsUseCaseOutput> {
        const shelter = await this.shelterRepository.get();
        //console.log(shelter);
        return new GetShelterDetailsUseCaseOutput({
            shelterName: shelter.name,
            shelterEmail: shelter.email,
            shelterPhone:shelter.phone,
            shelterWhatsApp: shelter.whatsApp,
            createdAt: shelter.createdAt,
            updateAt: shelter.updatedAt,
        });
    }

}