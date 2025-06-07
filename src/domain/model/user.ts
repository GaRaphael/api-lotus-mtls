export interface UserModel{
    id: number;    
    cpf: string;          
    email: string;           
    name: string;           
    password: string;       
} 



export interface User {
    id: number
    cpf: string | null
    name: string | null
    email: string | null
    active: boolean
    created_at: Date
    updated_at: Date
}