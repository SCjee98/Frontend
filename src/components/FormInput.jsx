import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, onChange, id, ...inputProps } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      {props.type == 'file' ?
        < input
          multiple
          {...inputProps}
          onChange={onChange}

        //onBlur={handleFocus}
        //onFocus={() =>
        //inputProps.name === "confirmPassword" && setFocused(true)
        //}
        //focused={focused.toString()}
        />
        :
        < input
          {...inputProps}
          onChange={onChange}

        //onBlur={handleFocus}
        //onFocus={() =>
        //inputProps.name === "confirmPassword" && setFocused(true)
        //}
        //focused={focused.toString()}
        />

      }
    </div>
  );
};

export default FormInput;
