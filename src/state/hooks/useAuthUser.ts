import { useRecoilValue } from "recoil"
import { userLoginState } from "state/atom"


const useAuthUser = () => {
  return useRecoilValue(userLoginState);
}

export default useAuthUser