import {useFormik} from 'formik';

function Login() {
     const {handleSubmit,handleChange,values} = useFormik({
    initialValues: {
      firstName :"",
      surName :"",
      email :"",
      gender:"male",
      hobies:[],
      country:"turkey",
    },
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <div>
         <form onSubmit={handleSubmit}>
          <br></br>
            <br></br>
            <br></br>
            <label htmlFor='firstName'>Firstname : </label>
            <input id="firstName" name="firstName"  placeholder="name" onChange={handleChange}></input>
    
            <label htmlFor='surName'>Surname</label>
            <input id="surName" name="surName" placeholder="surName" onChange={handleChange}></input>
    
            <label htmlFor='email'>Email</label>
            <input id="email" name="email" type="email" placeholder="email" onChange={handleChange}></input>
    
            <br></br>
            <br></br>
            <br></br>
    
            <div>
              <input type="radio" name="gender" value="male" onChange={handleChange} checked={values.gender==="male"} ></input>
              male
            </div>
            <div>
              <input type="radio" name="gender" value="female" onChange={handleChange} checked={values.gender==="female"}  ></input>
             female
            </div>
    
            <br></br>
            <br></br>
            
            <input type="checkbox" name="hobies" value="football" id="football" onChange={handleChange} />
            <label htmlFor='football'>football</label>
            <input type="checkbox" name="hobies" value="basketball" id="basketball"  onChange={handleChange} />
            <label htmlFor='basketball'>basketball</label>
            <input type="checkbox" name="hobies" value="voleyball" id="voleyball"  onChange={handleChange} />
            <label htmlFor='voleyball'>voleyball</label>
        
            <br></br>
            <br></br>

            <select name='country' value={values.country} onChange={handleChange}>
              <option value="turkey">Turkey</option>
              <option value="england">England</option>
              <option value="india">India</option>
            </select>
           
    
    
            <button type='submit'>submit</button>
            <br></br>
            <br></br>
            <code>
            {JSON.stringify(values)}
            </code>
          </form>
          <br></br> 
    </div>
  )
}

export default Login
