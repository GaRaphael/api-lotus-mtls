// ---------- add --------------

export type AddDataUseCaseParams = {
    product_id: number
    payment_type: string
    value: number
}

export type AddDataUseCaseResponse = {
    data?: any
    error?: string;
}

export type AddDataRepositoryParams = {
    product_id: number
    payment_type: string
    value: number
}

export type AddDataRepositoryResponse = any