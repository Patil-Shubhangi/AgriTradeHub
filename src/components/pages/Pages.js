import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import Home from "../home/Home";
import About from "../about/About";
import Products from "../services/Products";
import Contact from "../contact/Contact";
import Register from "../blog/Register";
import Orders from "../order/Orders";
import Footer from "../common/footer/Footer";


const Pages = () => {
    return ( <
        >
        <
        Router >
        <
        Header / >
        <
        Routes > { /* Wrap Routes around Route components */ } <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/about"
        element = { < About / > }
        /> <
        Route path = "/services"
        element = { < Products / > }
        /> <
        Route path = "/blog"
        element = { < Register / > }
        /> <
        Route path = "/contact"
        element = { < Contact / > }
        /> <
        Route path = "/order"
        element = { < Orders / > }
        /> < /
        Routes > <
        Footer / >
        <
        /Router> < / >
    );
};

export default Pages;