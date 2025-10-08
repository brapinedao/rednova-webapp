export interface IService {
  id: number
  title: string
  price: string
  promo: boolean
  img: string
  description?: string
}

export interface ICompanyValue {
  icon: string
  title: string
  desc: string
}

export interface IContact {
  phone: string
  email: string
  address: string
  whatsapp: string
}

export interface ILoginData {
  email: string
  password: string
  remember: boolean
}

export interface ILoginResponse {
  name: string
  email: string
  photo: string
  rol?: string
}

export interface IPermissions {
  title: string
  childrens: IChildrenPermissions[]
}

export interface IChildrenPermissions {
  title: string
}

export interface IUsersResponse {
  id: number
  username: string
  password: string
  name: string
  image: string
  rol: string
}

export interface IUserToCreate {
  username: string
  password: string
  name: string
  rol: string
}
export interface IServiceToCreate {
  name: string
  price: string
  image: string
  prop: boolean
  description: string
}
