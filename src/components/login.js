import React, { useState , useEffect } from 'react';
import { validate } from './validate';
import { notify } from './toast';
import Styles from './SingUp.module.css';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const login = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [errors, setErrors] = useState({});
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [touched, setTouched] = useState({});

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        setErrors(validate(data , 'login'))
    },[data, touched])

    const changeHandler = event => {
            setData({...data, [event.target.name]: event.target.value})
        }
    

    const focusHandler = event => {
        setTouched({...touched,[event.target.name] : true})
    }

    const submitHandler = event => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            notify('You Login successfully' , 'success')
        } else {
            notify('Invalid data!','error')
            setTouched({
                email: true,
                password: true,
            })
        }
    }

    
     
    
  return (
      <div className={Styles.container}>
          <form onSubmit={submitHandler} className={Styles.formContainer}>
              <h2 className={Styles.header}>Login</h2>
             
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
                  type="text" 
                  name="password" 
                  value={data.password} 
                  onChange={changeHandler}  
                  onFocus={focusHandler}/>
                  {errors.password &&  touched.password && <span>{errors.password}</span>}
              </div>
              
              <div className={Styles.formButtons}>
                  <Link to="/signup">SignUp</Link>
                  <button type='submit'>Login</button>
              </div>
          </form>
           <ToastContainer />
    </div>
  )
}
export default login;