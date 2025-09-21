export interface IService {
  id: number
  title: string
  price: string
  promo: boolean
  img: string
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
}

export interface IPermissions {
  title: string
  childrens: IChildrenPermissions[]
}

export interface IChildrenPermissions {
  title: string
}
