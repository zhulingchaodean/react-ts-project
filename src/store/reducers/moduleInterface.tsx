export interface CommonState{
  currentCategory:string
}
export interface HomeState {
  count:number
}


interface User {
  username:string
  email:string 
  avatar:string
}
export enum LOGIN_TYPES {
  UN_VALIDATE = "UN_VALIDATE", // 尚未验证登录状态
  LOGINED = "LOGINED", // 已经登录
  UN_LOGIN = "UN_LOGIN", // 没有登录
}
export interface MineState{
  loginState:LOGIN_TYPES
  user:User|null
  error:string|null
}

export interface OtherState{

}