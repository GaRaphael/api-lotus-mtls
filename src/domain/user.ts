import { UserModel } from "./model";


// ---------- add --------------
export type AddUserUseCaseParams = UserModel

export type AddUserUseCaseResponse = {
    data?: {
        id: number;
        cpf: string;
        email: string;
        name: string;
    }
    error?: string;
}

export type AddUserRepositoryParams = UserModel

export type AddUserRepositoryResponse = {
    id: number;
    cpf: string;
    email: string;
    name: string;
}

// ---------- verify exists --------------

export type FindUserExistsParams = {
    cpf: string
    email: string
}
export type FindUserExistsResponse = {
    exists: boolean
}

// ---------- reset password --------------
export type ResetPasswordUseCaseParams = {
    new_password: string
    email: string
}

export type ResetPasswordUseCaseResponse = {
    data?: UserModel
    error?: string;
}

export type ResetPasswordRepositoryParams = {
    new_password: string
    email: string
}

export type ResetPasswordRepositoryResponse = UserModel | null