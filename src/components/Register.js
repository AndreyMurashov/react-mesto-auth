import React from "react";

const Register = () => {

return (
    <div className="components">
        <div className="components__container">
    <h2 className="components__title">
        Регистрация
    </h2>
    <form className="components__form">
        <input type='Email' className="components__input" placeholder="Email"></input>
        <input className="components__input"  placeholder="Пароль"></input>
        <button className="components__button">Зарегистрироваться</button>
    </form>
    <p  className="components__text">
        Уже зарегистрированы? Войти
    </p>
    </div>
    </div>
)}

export default Register;