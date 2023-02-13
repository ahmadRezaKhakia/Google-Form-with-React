export const validate = (data,type) => {
    const errors = {};

    if (type === 'signup') {
        if (!data.name.trim()) {
            errors.name = 'Name required';
        } else {
            delete errors.name;
        }
        if (!data.confirmPassword) {
            errors.confirmPassword = 'confirmPassword is required';

        } else if (data.confirmPassword !== data.password) {
            errors.confirmPassword = 'Password do not match'
        } else {
           delete errors.confirmPassword
        }

        if (data.isAccepted) {
            delete errors.isAccepted
        } else {
            errors.isAccepted = 'Accept our regulations'
        }

        
        
    }

    if (!data.email) {
        errors.email = 'email required'
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'Email address is invalid '
    } else {
        delete errors.email
    }

    if (!data.password) {
        errors.password = 'Password required'
    }  else if (!data.password === /([\d]?[\w]?[\S]{6,})/gim.test(data.password)) {
        errors.password = 'Password is to be 6 character or more'
    } else {
        delete errors.password
    }

    return errors;
}





























// export const validate = (data , type) =>{
//     const errors = {};

  

//     if (!data.email) {
//         errors.email = 'email required'
//     } else if (!/\S+@\S+\.\S+/.test(data.email)) {
//         errors.email = 'Email address is invalid';
//     } else {
//         delete errors.email
//     }

//     if (!data.password) {
//         errors.password = 'Password is required';
//     } else if (data.password.length < 6) {
//         errors.password = 'Password is to be 6 character or more'
//     } else {
//         delete errors.password
//     }

   

//     if (type === 'signup') {
//           if (!data.name.trim()) {
//             errors.name = 'userName required';
//         }   else {
//                 delete errors.name;
//         }

//          if (!data.confirmPassword) {
//             errors.confirmPassword = 'confirm Password'
//         } else if (data.confirmPassword !== data.password) {
//             errors.confirmPassword = 'Password do not match'
//         } else {
//             delete errors.confirmPassword
//         }

//     if (data.isAccepted) {
//         delete errors.isAccepted
//         } else {
//             errors.isAccepted = 'Accept our regulations'
//         }
//     }

//     return errors;


// }