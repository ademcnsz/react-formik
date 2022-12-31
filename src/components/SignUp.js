import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, useFormik} from 'formik';
import Validations from './Validations';

function SignUp() {
  const {handleSubmit,handleChange,handleBlur,values,errors,touched} = useFormik({
    initialValues: {
      email :"",
      password:"",
      passwordConfirm:"",
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema:Validations,
  });
  return (
    <div className="App">

          <form onSubmit={handleSubmit}>
            <br></br>
            <br></br>
            <br></br>
            <label htmlFor='email'>Email</label>
            <input id="email" name="email" type="email" placeholder="email" onChange={handleChange} onBlur={handleBlur}></input>
            {errors.email && touched.email && <div>{errors.email}</div>}
            <br></br>
            <br></br>
            <br></br>

            <label htmlFor='password'>Password</label>
            <input id="password" name="password" type="password" placeholder="password" onChange={handleChange} onBlur={handleBlur}></input>
            {errors.password && touched.password && <div>{errors.password}</div>}
            <br></br>
            <br></br>
            <br></br>
            <label htmlFor='passwordConfirm'>Password Confirm</label>
            <input id="passwordConfirm" name="passwordConfirm" type="passwordConfirm" placeholder="passwordConfirm" onChange={handleChange} onBlur={handleBlur}></input>
            {errors.passwordConfirm && touched.passwordConfirm && <div>{errors.passwordConfirm}</div>}
            <br></br>
            <br></br>
            <br></br>
        
            <button type='submit'>submit</button>
            <br></br>
            <br></br>
            
            <code>
            {JSON.stringify(values)}
            </code>
            
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </form>
    </div>
  );
}

export default SignUp;
