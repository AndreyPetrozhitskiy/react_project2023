import React, { useState } from "react";
import user from "../../image/user-profile.png"
import "../../style/auth.scss";
import {NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import {register,logout,login} from "../../store/AuthSlice"
const Auth = () => {
const [isLogin, setIsLogin] = useState(true);
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const DataAuth = useSelector(state => state.auth.authdataMassive)
const Name = DataAuth[0].login
const Verif = DataAuth[0].isAuth
const dispatch = useDispatch()
const loginError = DataAuth.loginError;
const handleLogin = () => {
  dispatch(login({ login: username, password: password }));
};
const handleRegister = () => {
  dispatch(register({ login:username,password:password }));
};

  return (
    <div className="auth">
      <div className="auth__container">
      {Verif ? (
        <div className="auth__container-profile">
            <div className="auth__container-profile__user">
              <img src={user} />
              <p>{Name}</p>
            </div>

            <div className="auth__container-profile__exit">
            <NavLink to='/basket'><input className="auth__container-profile__exit-basket" 
              type="button" 
              value="Корзина" 
              


              // Выйти
              
              /></NavLink>
              <input className="auth__container-profile__exit-btn" 
              type="button" 
              value="Выйти" 



              // Выйти
              onClick={() => dispatch(logout())} 
              />
            </div>
          </div>
          ) : (
            isLogin ? (
              <div className="auth__container-auth">
                <h1>Авторизация</h1>
                <input type="text" placeholder="Ваш логин"    
                value={username} 
                onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" placeholder="Ваш пароль" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                />
                <input className="auth__btn" 
                type="button" 
                value='Войти'  
                onClick={handleLogin}
                />
                <p 
                onClick={() => setIsLogin(false)}>Регистрация</p> 
              </div>
              ) : (
              <div className="auth__container-auth">
                <h1>Регистрация</h1>
                <input type="text" placeholder="Ваш логин"
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                />
                <input type="password" placeholder="Ваш пароль"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                 />
                <input className="auth__btn" 
                type="button" 
                value='Зарегистрироваться'
                onClick={
                  handleRegister
                  // console.log(DataAuth[1])
                }
                 />
                <p 
                onClick={() => setIsLogin(true)}
                >Авторизация</p>
              </div>
            )
          )}

{/* 
          {loginError && <p className="auth__error">{loginError}</p>} */}
      </div>
      </div>
  );
};

export default Auth;
