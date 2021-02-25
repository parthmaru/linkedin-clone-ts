import React, { useState } from "react";
import "./Login.css";
import loginImg from "../../images/login-img.png";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [profilePic, setProfilePic] = useState<string>("");

  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert("Please enter Fullname!");
    }

    auth.createUserWithEmailAndPassword(email, password).then((userAuth) =>
      userAuth.user
        ?.updateProfile({
          displayName: name,
          photoURL: profilePic,
        })
        .then(() =>
          dispatch(
            login({
              email: userAuth.user?.email,
              uid: userAuth.user?.uid,
              displayName: name,
              photoUrl: profilePic,
            })
          )
        )
        .catch((err) => alert(err.message))
    );
  };

  const loginToApp = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) =>
        dispatch(
          login({
            email: userAuth.user?.email,
            uid: userAuth.user?.uid,
            displayName: userAuth.user?.displayName,
            profileUrl: userAuth.user?.photoURL,
          })
        )
      )
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <img src={loginImg} alt="login-cover" />
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Fullname (required if registering)"
        />
        <input
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile pic URL (optional)"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <button onClick={loginToApp}>Sign In</button>
      </form>

      <p>
        Not a Member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
