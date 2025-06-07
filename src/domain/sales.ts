

// ---------- add --------------

export type AddSalesUseCaseParams = {
    product_id: number
    category: string
    model: string
    payment_type: string
    value: number
}

export type AddSalesUseCaseResponse = {
    data?: any
    error?: string;
}

export type AddSalesRepositoryParams = {
    product_id: number
    category: string
    model: string
    payment_type: string
    value: number
}

export type AddSalesRepositoryResponse = any