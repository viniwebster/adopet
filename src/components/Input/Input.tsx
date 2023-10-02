import { largeFont } from "UI/Variables";
import styled from "styled-components";

interface PropsStyledInput {
  $width?: string;
  $height?: string;
  $positionPlaceholder?: string;
  $background?: string
}

const StyledInput = styled.input<PropsStyledInput>`
  width: ${({ $width }) => ($width ? $width : "100%")};
  height: ${({ $height }) => ($height ? $height : "40px")};

  margin: 1rem;
  padding: 1rem 2rem;

  background-color: ${({ $background }) => ($background ? $background : "#f6f6f6")};
  color: black;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.15));

  border-radius: 5px;
  outline: none;
  border: none;
  border-radius: 5px;

  &::placeholder {
    color: #bcbcbc;
    text-align: ${({ $positionPlaceholder }) => ($positionPlaceholder ? $positionPlaceholder : "center")};
  }
`;

const StyledLabel = styled.label`
  text-align: center;
  color: #737380;
  font-weight: 600;
  font-size: ${largeFont};
  display: block;
`;

interface PropsInput {
  $width?: string;
  $height?: string;
  $positionPlaceholder?: string;
  $background?: string
  type?: "text" | "search" | "email" | "password" | "message";
  placeholder: string;
  label: string;
  value: string;
  required?: boolean;
  onChange: (value: string) => void;
}

const Input = ({
  $width,
  type = "text",
  placeholder,
  label,
  required = true,
  value,
  onChange,
  $height,
  $positionPlaceholder,
  $background
}: PropsInput) => {
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChangeInput}
        $width={$width}
        $height={$height}
        $background={$background}
        $positionPlaceholder={$positionPlaceholder}
      />
    </>
  );
};

export default Input;
