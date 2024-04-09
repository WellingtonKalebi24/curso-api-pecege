export default class CreatePetUseCaseInput {
    name: string;
    type: string;
    size: string;
    gender: string;
    bixo: string;

    constructor(data: Partial<CreatePetUseCaseInput>) {
        // atribui a classe e do que foi inputado 
        Object.assign(this, data);
    }
}