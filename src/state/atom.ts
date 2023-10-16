import { IUser } from "interfaces/IUser";
import { atom } from "recoil";


export const usersListState = atom<IUser[]>({
  key: "usersListState",
  default: []
})

export const userLoginState = atom<boolean>({
  key: "userLoginState",
  default: false
})