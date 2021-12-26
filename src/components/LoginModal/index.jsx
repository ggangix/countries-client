import React from "react";
import "./style.scss";

function LoginModal() {
  return (
    <div id="login-modal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Login</h4>
        </div>
        <div className="modal-body">
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
