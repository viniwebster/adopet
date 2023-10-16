import styled from "styled-components";
import { btnColor, btnColorHover, colorText } from "../../UI/Variables";

interface PropsStyledButton {
  $large?: boolean
}

const StyledButton = styled.button<PropsStyledButton>`
  width: ${({ $large }) => $large ? '100%' : '180px'};
  height: 40px;
  background-color: ${btnColor};
  font-weight: 600;
  color: ${colorText};
  border-radius: 5px;
  stroke-width: 1px;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover{
    transition: .5s;
    background-color: ${btnColorHover};
  }
`;

interface Props {
  children: string;
  type?: 'submit' | 'button' | 'reset';
  large?: boolean
  onClick?: () => void
}

const Button = ({ children, type = 'button', large, onClick }: Props) => {
  return <StyledButton type={type} $large={large} onClick={onClick}>{children}</StyledButton>;
};

export default Button;
