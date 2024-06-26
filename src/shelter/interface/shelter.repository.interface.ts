import { Shelter } from "src/schemas/shelter.schema";

export default interface IShelterRepository {
    get(): Promise<Shelter>;
    update(data: Partial<Shelter>): Promise<void>;
}