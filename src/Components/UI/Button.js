import styled from "styled-components";

const CustomButton = styled.button`
  margin: 10px;
  padding: 0.8em;
  font-size: 1em;
  border: none;
  background-color: #333;
  color: #ddd;
  cursor: pointer;
  :hover {
    background-color: #2c0d00;
    color: #ddd;
  }
`;

const Button = (props) => {
  return props.tag !== "div" ? (
    <CustomButton className={props.className} onClick={props.onClick}>
      {props.children}
    </CustomButton>
  ) : (
    <div title={props.title} className={props.className}>
      {props.children}
    </div>
  );
};
export default Button;
