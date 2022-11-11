import { styled } from "frontity";
import { font, stretch } from "../base/functions";

const InputValid = ({
  error,
  name,
  placeholder,
  value,
  onChange,
  type,
  required,
  noBorder,
}) => {
  return (
    <ValidWrapper placeholder={placeholder} value={value}>
      <Placeholder value={value} error={error}>
        {placeholder}
      </Placeholder>
      <Input
        error={error}
        noBorder={noBorder}
        required={required}
        type={type || "text"}
        name={name || ""}
        placeholder={placeholder || ""}
        value={value}
        onChange={onChange}
      />
    </ValidWrapper>
  );
};

const ValidWrapper = styled.div`
  display: flex;
  position: relative;
  ${({ value }) =>
    value &&
    `& input {
    	padding-top: 0.809em;
    	padding-bottom: 0.33em;
  	}`};
`;

const Placeholder = styled.div`
  position: absolute;
  font-size: 1.2rem;
  line-height: calc(16 / 12);
  top: 7px;
  left: 16px;
  color: ${({ error }) => (error ? "var(--error)" : "var(--link-500)")};
  ${({ value }) => (value ? "display: block;" : "display: none")};
`;

const Input = styled.input`
  ${font(21, 32)};
  ${stretch(109)};
  font-weight: 400;
  color: var(--black-900);
  padding: 0.5238095em 0.7142857143em;
  width: 100%;
  box-sizing: border-box;
  border: ${({ noBorder, error }) =>
    error ? "var(--error)" : noBorder ? "none" : "1px solid var(--gray-200)"};
  border-radius: 12px;
  outline: none;
  &::placeholder {
    color: var(--gray-300);
    font-weight: 400;
  }
`;

export default InputValid;
