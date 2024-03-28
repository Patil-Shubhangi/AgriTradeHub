import React, { useState } from "react";
import Back from "../common/Back";
import img from "../images/img.png";
import "./register.css"; // Import your CSS file

const Blog = () => {
    const [signupData, setSignupData] = useState({
        fullName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [loginData, setLoginData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [isLoginForm, setIsLoginForm] = useState(false);

    const handleSignupChange = (e) => {
        const { name, value } = e.target;
        setSignupData({
            ...signupData,
            [name]: value
        });
    };

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        console.log("Signup form submitted:", signupData);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log("Login form submitted:", loginData);
    };

    const toggleLoginForm = () => {
        setIsLoginForm(!isLoginForm);
    };

    return ( <
        >
        <
        section className = 'blog-out mb' >
        <
        Back name = 'Registraion'
        title = 'SignIn - SignUp'
        cover = { img }
        /> <
        div className = 'container recent' >
        <
        div className = 'signup-form' >
        <
        h2 > { isLoginForm ? "Login" : "Sign Up" } -
        for Our AgriTradeHub < /h2> <
        form onSubmit = { isLoginForm ? handleLoginSubmit : handleSignupSubmit } > {!isLoginForm && ( <
                >
                <
                input type = 'text'
                placeholder = 'Full Name'
                name = 'fullName'
                value = { signupData.fullName }
                onChange = { handleSignupChange }
                required /
                >
                <
                input type = 'text'
                placeholder = 'Last Name'
                name = 'lastName'
                value = { signupData.lastName }
                onChange = { handleSignupChange }
                required /
                >
                <
                />
            )
        } {
            !isLoginForm && ( <
                input type = 'email'
                placeholder = 'Email'
                name = 'email'
                value = { signupData.email }
                onChange = { handleSignupChange }
                required /
                >
            )
        } {
            !isLoginForm && ( <
                input type = 'password'
                placeholder = 'Password'
                name = 'password'
                value = { signupData.password }
                onChange = { handleSignupChange }
                required /
                >
            )
        } {
            !isLoginForm && ( <
                input type = 'password'
                placeholder = 'Confirm Password'
                name = 'confirmPassword'
                value = { signupData.confirmPassword }
                onChange = { handleSignupChange }
                required /
                >
            )
        } {
            isLoginForm ? ( <
                input type = 'text'
                placeholder = 'Username'
                name = 'username'
                value = { loginData.username }
                onChange = { handleLoginChange }
                required /
                >
            ) : null
        } {
            isLoginForm ? ( <
                input type = 'email'
                placeholder = 'Email'
                name = 'email'
                value = { loginData.email }
                onChange = { handleLoginChange }
                required /
                >
            ) : null
        } <
        input type = 'password'
        placeholder = 'Password'
        name = 'password'
        value = { loginData.password }
        onChange = { handleLoginChange }
        required /
        >
        <
        button type = 'submit' > { isLoginForm ? "Login" : "Sign Up" } < /button> < /
        form > <
        div className = 'switch-form' > {
            isLoginForm ? ( <
                >
                Don 't have an account?{" "} <
                button onClick = { toggleLoginForm } > Sign Up < /button> < / >
            ) : ( <
                >
                Already have an account ? { " " } <
                button onClick = { toggleLoginForm } > Login < /button> < / >
            )
        } <
        /div> < /
        div > <
        /div> < /
        section > <
        />
    );
};

export default Blog;