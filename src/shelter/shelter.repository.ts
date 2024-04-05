import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Shelter } from "src/schemas/shelter.schema";
import IShelterRepository from "./interface/shelter.repository.interface";

export class ShelterRepository implements IShelterRepository  {
    constructor(
        @InjectModel(Shelter.name)
        private readonly shelterModel: Model<Shelter>
    ){}

    async get():Promise<Shelter>{
        return await this.shelterModel.findOne()
    }
}