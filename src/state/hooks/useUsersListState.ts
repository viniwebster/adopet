import { useRecoilValue } from "recoil";
import { usersListState } from "state/atom";

const useUsersList = () => {
  return useRecoilValue(usersListState);
}

export default useUsersList;

