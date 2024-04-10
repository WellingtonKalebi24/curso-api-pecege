export default class GetPetByIdUseCaseInput {

    id: string;
    name: string;
    type: string;
    size: string;
    gender: string;
    bio: string;
    photo: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: Partial<GetPetByIdUseCaseInput>) {
        Object.assign(this, data);
    }
}