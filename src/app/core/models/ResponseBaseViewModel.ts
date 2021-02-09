import { ResponseStatus } from "../enums.ts/ResponseStatus";

export class ResponseBaseViewModel{
    status:ResponseStatus;
    messages:string[];
}