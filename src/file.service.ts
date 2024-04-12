import { Injectable } from "@nestjs/common";
import * as fs from 'fs';
import IFileService from "./interfaces/file.service.interface";


@Injectable()
export default class FileSerivice implements IFileService {
    async readfile(path: string): Promise<Buffer> {
        return fs.readFileSync(path);
    }
}