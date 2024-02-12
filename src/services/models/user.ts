
export interface IGetUsers{
    id: number | string,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string
    website?: string
    company?: Comapnay
}

export interface ICreateUser {
    id?: number | string,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string
    website?: string
    company?: Comapnay
}

export interface IUser {
    CreateUserInput: ICreateUser,
    GetUsers: IGetUsers
}

export interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo?: {
        lat: string,
        lng: string
    }
}

export interface Comapnay {
    name: string,
    catchPhrase: string,
    bs: string
}