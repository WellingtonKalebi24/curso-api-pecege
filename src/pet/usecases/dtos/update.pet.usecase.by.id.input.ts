


import CreatePetUseCaseInput from "./create.pet.usecase.input"

// exteds significa que ele tem mesmo atribudo da outra classe
// super chamar construtor pai
export default class UpdatePetByIdUseCaseInput extends  CreatePetUseCaseInput {
    id: string

    constructor(data: Partial<UpdatePetByIdUseCaseInput>) {
        super(data)
        Object.assign(this, data)
    }
}