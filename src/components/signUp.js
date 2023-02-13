import React, { useState , useEffect } from 'react';
import { validate } from './validate';
import { notify } from './toast';
import Styles from './SingUp.module.css';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const signUp = () => {


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        isAccepted:false
    })

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [errors, setErrors] = useState({});
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [touched, setTouched] = useState({});

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        setErrors(validate(data , 'signup'))
    },[data, touched])

    const changeHandler = event => {
        if (event.target.name === 'isAccepted') {
            setData({...data, [event.target.name]: event.target.checked})
        } else {
            setData({...data, [event.target.name]: event.target.value})
        }
    }

    const focusHandler = event => {
        setTouched({...touched,[event.target.name] : true})
    }

    const submitHandler = event => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            notify('You signed Up successfully' , 'success')
        } else {
            notify('Invalid data!','error')
            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted:true,
            })
        }
    }

    
     
    
  return (
      <div className={Styles.container}>
          <form onSubmit={submitHandler} className={Styles.formContainer}>
              <h2 className={Styles.header}>Sign Up</h2>
              <div className={Styles.formField}>
                  <label>Name</label>
                  <input
                   className={(errors.name && touched.name) ? Styles.uncompleted : Styles.formInput}  
                   type="text"
                   name="name" 
                   value={data.name}
                   onChange={changeHandler}
                   onFocus={focusHandler}/>
                  {errors.name && touched.name && <span>{errors.name}</span>}
              </div>
              <div className={Styles.formField}>
                  <label>Email</label>
                  <input 
                 className={(errors.email && touched.email) ? Styles.uncompleted : Styles.formInput}
                  type="text" 
                  name="email" 
                  value={data.email} 
                  onChange={changeHandler}  
                  onFocus={focusHandler}/>
                  {errors.email &&  touched.email && <span>{errors.email}</span>}
              </div>
              <div className={Styles.formField}>
                  <label>Password</label>
                  <input 
                  className={(errors.password && touched.password) ? Styles.uncompleted : Styles.formInput}
                  type="password" 
                  name="password" 
                  value={data.password} 
                  onChange={changeHandler}  
                  onFocus={focusHandler}/>
                  {errors.password &&  touched.password && <span>{errors.password}</span>}
              </div>
              <div className={Styles.formField}>
                  <label>confirmPassword</label>
                  <input 
                  className={(errors.confirmPassword && touched.confirmPassword) ? Styles.uncompleted : Styles.formInput}
                  type="password" 
                  name="confirmPassword" 
                  value={data.confirmPassword} 
                  onChange={changeHandler} 
                  onFocus={focusHandler} />
                  {errors.confirmPassword &&  touched.confirmPassword && <span>{errors.confirmPassword}</span>}
              </div>
              <div className={Styles.formField}>
                  <div className={Styles.checkBoxContainer}>
                  <label>l accet terms of privacy policy </label>
                  <input 
                  type="checkbox" 
                  name="isAccepted" 
                  value={data.isAccepted} 
                  onChange={changeHandler}  
                  onFocus={focusHandler}/>
                  </div>
                  {errors.isAccepted &&  touched.isAccepted && <span>{errors.isAccepted}</span>}
              </div>
              <div className={Styles.formButtons}>
                  <Link to="/login">Login</Link>
                  <button type='submit'>Sign Up</button>
              </div>
          </form>
           <ToastContainer />
    </div>
  )
}
export default signUp;