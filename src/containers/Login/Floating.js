import React,{useState} from 'react';
import FloatingLabelInput from 'react-floating-label-input';
import { useForm } from "react-hook-form";

function Floating() {
  const {value, setVal} = useState('');
  const { register, handleSubmit, errors, setValue, formState } = useForm();
  function send() {
    alert('send')
  }
  function onChange(e) {
    console.log(e.target.value)
  }
  return (<div style={{ fontSize: 13  }}>
    <form onSubmit={handleSubmit(send)}>

    <FloatingLabelInput
      id="example-3"
      label="label"
      // onBlur={action('onBlur')}
      onChange={onChange}
      refs={register({ required: true, maxLength: 10 })}
      name="p"
      // onFocus={action('onFocus')}
      className="form-control"
      value={value}
    />
    {errors.p && <p className="error-feild">"This Field must have less than 10 characters"</p>}
    <button type="submit">Click</button>
    </form>
  </div>)
}

export default Floating