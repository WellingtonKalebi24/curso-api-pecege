export default class GetShelterDetailsUseCaseOutput {
    shelterName: string
    shelterWhatsApp: string
    shelterEmail: string
    shelterPhone: string
    createdAt: Date
    updateAt: Date


    constructor(data: Partial<GetShelterDetailsUseCaseOutput>) {
        Object.assign(this, data)
    }
    
}