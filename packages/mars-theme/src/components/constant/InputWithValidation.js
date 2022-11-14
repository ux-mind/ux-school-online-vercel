import { useState } from "react";
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
  const [inputFocused, setInputFocused] = useState(false);

  return (
    <ValidWrapper
      placeholder={placeholder}
      value={value}
      error={error}
      focused={inputFocused}
    >
      <Placeholder value={value} error={error} focused={inputFocused}>
        {placeholder}
      </Placeholder>
      <Input
        focused={inputFocused}
        error={error}
        noBorder={noBorder}
        required={required}
        type={type || "text"}
        name={name || ""}
        placeholder={placeholder || ""}
        value={value}
        onChange={onChange}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
      />
    </ValidWrapper>
  );
};

const ValidWrapper = styled.div`
  display: flex;
  position: relative;
  ${({ value, error, focused }) =>
    (value || error || focused) &&
    `& input {
    	padding-top: 0.7619em;
    	padding-bottom: 0.2857em;
  	}`};
`;

const Placeholder = styled.div`
  position: absolute;
  font-size: 1.2rem;
  line-height: calc(16 / 12);
  top: 7px;
  left: 16px;
  color: ${({ error }) => (error ? "var(--error)" : "var(--link-500)")};
  ${({ value, error, focused }) =>
    value || error || focused ? "display: block;" : "display: none"};
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
    error
      ? "1px solid var(--error)"
      : noBorder
      ? "1px solid transparent"
      : "1px solid var(--gray-200)"};
  border-radius: 12px;
  outline: none;
  &::placeholder {
    color: var(--gray-300);
    font-weight: 400;
    ${({ error }) => error && "opacity: 0;"};
    ${({ focused }) => focused && "opacity: 0;"};
  }
`;

export default InputValid;
