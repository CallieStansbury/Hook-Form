import React, { useState } from 'react';

const RegisterForm = props => {
    const [ formState, setFormState ] = useState ({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        submitted: true
    })
    const onChangeHandler = event => {
        event.preventDefault();
        console.log(formState)
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }
    const onSubmitHandler = event => {
        event.preventDefault();
        console.log(setFormState);
        }

    return(
        <div>
            {}
            <form onSubmit={onSubmitHandler}>
                <br />
                <label> First Name </label>
                <input type="text" name="firstName" onChange={onChangeHandler} />
                {formState.firstName.length > 0 && formState.firstName.length < 2 && (
                    <span className = "redtext" > First Name must be at least 2 characters!</span>
                )}
                <br />
                <label> Last Name </label>
                <input type="text" name="lastName" onChange={onChangeHandler} />
                {formState.lastName.length > 0 && formState.lastName.length < 2 && (
                    <span className = "redtext" > Last Name must be at least 2 characters!</span>
                )}
                <br />
                <label> Email </label>
                <input type="email" name="email" onChange={onChangeHandler} />
                {formState.email.length > 0 && formState.email.length < 5 && (
                    <span className = "redtext" > Email must be at least 5 characters!</span>
                )}
                <br />
                <label> Password </label>
                <input type="password" name="password" onChange={onChangeHandler} />
                {formState.password.length > 0 && formState.password.length < 8 && (
                    <span className="redtext"> Password must be at least 8 characters!</span>
                )}
                <br />
                <label> Confirm Password </label>
                <input type="password" name="confirmPassword" onChange={onChangeHandler} />
                {formState.confirmPassword === formState.password ? <span></span> :
                <span className="redtext">Passwords must match!</span>
                }   
                <br />
                <input type="submit" />
            </form>
            <div>
                <h4>Your Form Data</h4>
                <p>First Name: <span>{formState.firstName}</span> </p>
                <p>Last Name: <span>{formState.lastName}</span> </p>
                <p>Email: <span>{formState.email}</span> </p>
                <p>Password: <span>{formState.password}</span> </p>
                <p>Confirm Password: <span>{formState.confirmPassword}</span> </p>
            </div>
        </div>
    );
}
export default RegisterForm;