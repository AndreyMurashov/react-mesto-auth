import React from "react";

const Login = () => {
    return (
        <div className="components">
            <div className="components__container">
        <h2 className="components__title">
            Вход
        </h2>
        <form className="components__form">
            <input type='Email' className="components__input" placeholder="Email"></input>
            <input className="components__input"  placeholder="Пароль"></input>
            <button className="components__button">Войти</button>
        </form>
        </div>
        </div>
    )}


export default Login;