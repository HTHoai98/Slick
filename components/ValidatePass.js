

export default function ValidatePass(values) {
    let errors = {};
    
    if (!values.email) {
        errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } 
    else if (values.password.length < 8) {
        errors.password = 'Password must be 8 or more characters.';
    } 
    else if (values.password.search(/[a-z]/i) < 0) {
        errors.password = 'Password must contain at least one lowercase letter.';
    } 
    else if (values.password.search(/[A-Z]/g) < 0) {
        errors.password = 'Password must contain at least one upercase-letter.';
    }
    else if (values.password.search(/[0-9]/m) < 0) {
        errors.password = 'Password must contain at least one digit.';
    }
    
    return errors;
        
};
