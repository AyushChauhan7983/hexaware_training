import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  const handleSignup = () => {
    if (email && password) {
      let data = { name, email, password };
      localStorage.setItem(name, JSON.stringify(data));
      alert("Signup successful");
    } else {
      alert("Please fill out all fields");
    }
  };

  const handleSignin = () => {
    let data = JSON.parse(localStorage.getItem(name));
    if (data && email === data.email && password === data.password) {
      alert("Signin successful");
    } else {
      alert("Invalid credentials");
    }
  };

  const handleUpdate = () => {
    let data = JSON.parse(localStorage.getItem(name));
    if (
      data &&
      email === data.email &&
      password === data.password &&
      newPassword
    ) {
      data.password = newPassword;
      localStorage.setItem(name, JSON.stringify(data));
      alert("Password updated successfully");
      setIsUpdating(false);
    } else {
      alert("Wrong credentials or missing new password");
    }
  };

  const remove = () => {
    if (localStorage.getItem(name)) {
      localStorage.removeItem(name);
      alert("Removed successfully");
    } else {
      alert("User does not exist");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {isUpdating && (
        <input
          type="text"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      )}
      <br></br>
      <button onClick={handleSignup}>Signup</button>
      <button onClick={handleSignin}>Signin</button>
      {!isUpdating && (
        <button onClick={() => setIsUpdating(true)}>Update</button>
      )}
      {isUpdating && <button onClick={handleUpdate}>Done</button>}
      <button onClick={remove}>Remove</button>
    </div>
  );
};

export default Signup;
