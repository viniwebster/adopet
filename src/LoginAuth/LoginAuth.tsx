import Login from "pages/Login/Login";
import useAuthUser from "state/hooks/useAuthUser";

interface props {
  children: React.ReactNode
}

const LoginAuth = ({ children }: props) => {
  const isLogged = useAuthUser();
  if (!isLogged) {
    return <Login />
  }
  
  return (
    <>
    {children}
    </>     
  )
}

export default LoginAuth