import React, { useContext, useEffect, useState } from "react";
import { Link, json } from "react-router-dom";
import { UserContext } from "./UserContext";

const Header = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;
  return (
    <header>
      <Link className="logo" to="/">
        MyBlog
      </Link>
      <nav>
        {username && (
          <>
            <span>Hello, {username}</span>
            <Link to="/create">Create new post</Link>
            <Link onClick={logout}>Logout</Link>
          </>
        )}

        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
