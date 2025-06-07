import { SuitModel } from "./model";


// ---------- add --------------
export type AddSuitUseCaseParams = SuitModel

export type AddSuitUseCaseResponse = {
    data?: SuitModel
    error?: string;
}

export type AddSuitRepositoryParams = SuitModel

export type AddSuitRepositoryResponse = SuitModel | null



// ---------- put --------------
export type PutSuitUseCaseParams = {
    id: number
    model: string;
    size: string;
    color: string;
    price: number;
    image: string;
    composition: string;
    description: string;
}

export type PutSuitRepositoryParams = {
    id: number
    model: string;
    size: string;
    color: string;
    price: number;
    image: string;
    composition: string;
    description: string;
}

// ---------- disable --------------
export type DisableSuitUseCaseParams = {
    id: number
}

export type DisableSuitRepositoryParams = {
    id: number
}


