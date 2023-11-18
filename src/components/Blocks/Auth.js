import React, { useState } from "react";
import "../../style/auth.scss";
import { Link } from "react-router-dom";

const Auth = () => {
 
  return (
    <div className="auth">
      <div className="auth__container">
        <div className="auth__container-auth">
          <h1>Авторизация</h1>
          <input type="text" placeholder="Ваш логин" />
          <input type="password" placeholder="Ваш пароль" />
          <input className="auth__btn" type="button" value='Войти' />
          <p ><Link to='/register'>Регистрация</Link></p> 
        </div>
      </div>
    </div>
  );
};

export default Auth;
