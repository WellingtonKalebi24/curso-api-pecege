import PetResponse from "./pet.response";

export default class GetPetsUseCaseOutput {

    currentPage: number;
    totalPages:number;
    items: PetResponse[];

    constructor(data: Partial<GetPetsUseCaseOutput>) {
        Object.assign(this, data)
    }
}