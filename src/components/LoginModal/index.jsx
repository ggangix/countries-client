import React from "react";
import "./style.scss";
import Api from "../../services/api";

function LoginModal() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [isLogin, setIsLogin] = React.useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const call = {
      register: Api.register(username, password),
      login: Api.login(username, password),
    };
    call[isLogin ? "login" : "register"]
      .then((data) => {
        console.log(data);
        if (
          data.message !== "User logged in" &&
          data.message !== "User created"
        ) {
          return setError(data.message);
        }
        if (data.token) localStorage.setItem("token", data.token);
        window.location.reload();
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div id="login-modal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">{isLogin ? "Login" : "Signup"}</h4>
        </div>
        {error && <div className="error">{error}</div>}
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                placeholder="Enter username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                placeholder="Enter password"
              />
            </div>
            <button type="submit" onSubmit={handleSubmit}>
              Login
            </button>
          </form>
          <span onClick={() => setIsLogin(!isLogin)} className="signup-switch">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
