import { useSetRecoilState } from "recoil"
import { userLoginState } from "state/atom"

const useSetAuthUser = () => {
  const setUser = useSetRecoilState(userLoginState);
  return (newState: boolean) => {
    setUser(() => newState)
  }
}

export default useSetAuthUser;