export default interface IFileService {
    readfile(path: string): Promise<Buffer>
}