import React from "react";
import "./style.scss";
import Api from "../../services/api";

function LoginModal() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    Api.login(username, password)
      .then((data) => {
        console.log(data);
        if (data.message !== "User logged in") {
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
          <h4 className="modal-title">Login</h4>
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
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
