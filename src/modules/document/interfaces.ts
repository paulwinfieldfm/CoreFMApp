import { ILinkedEntity } from "../base";

export interface IDocumentSaveRequest {
    parentEntity: ILinkedEntity,
    modifiedUsername: string,
    documentType: string,
    version?: number,
    title: string,
    properties?: any,
    displayFilename: string,
    mimeType: string,
}
export interface IDocument extends IDocumentSaveRequest {
    id: number,
    documentUid: string,
    serverFilename: string,
    serverStoragePath: string,
}