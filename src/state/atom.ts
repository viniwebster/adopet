import { IUser } from "interfaces/IUser";
import { atom } from "recoil";


export const usersListState = atom<IUser[]>({
  key: "usersListState",
  default: []
})

