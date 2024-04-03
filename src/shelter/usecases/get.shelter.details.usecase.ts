import { IUseCase } from "src/domain/iusecase.interface";
import GetShelterDetailsUseCaseOutput from "./dtos/get.shelter.details.usecase.output";

export default class GetShelterDetailsUseCase implements IUseCase<null, GetShelterDetailsUseCaseOutput> {
    run(input: null): Promise<GetShelterDetailsUseCaseOutput> {
        return Promise.resolve(new GetShelterDetailsUseCaseOutput({
            shelterName: 'Abrigo Bipo',
            shelterEmail: 'abrigo@gmail.com',
            shelterPhone: '19998083356',
            shelterWhatsApp: '19998083356',
            createdAt: new Date(),
            updateAt: new Date()
        }))
    }
}