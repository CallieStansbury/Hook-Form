import React, { useState } from 'react';

const RegisterForm = props => {
    const [ formState, setFormState ] = useState ({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
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
        console.log(formState);
    }
    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <br />
                <label> First Name </label>
                <input type="text" name="firstName" onChange={onChangeHandler} />
                <br />
                <label> Last Name </label>
                <input type="text" name="lastName" onChange={onChangeHandler} />
                <br />
                <label> Email </label>
                <input type="email" name="email" onChange={onChangeHandler} />
                <br />
                <label> Password </label>
                <input type="password" name="password" onChange={onChangeHandler} />
                <br />
                <label> Confirm Password </label>
                <input type="password" name="confirmPassword" onChange={onChangeHandler} />
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