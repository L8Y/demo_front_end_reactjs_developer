import TextField from "@material-ui/core/TextField";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Component } from "react";
import fire from "./fire";

class login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: "",
    };
  }

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        alert(err);
      });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const inputStyle = {
      width: "26rem",
      marginTop: "1.5rem",
      marginBottom: "1.5rem",
      display: "flex",
    };

    const buttonStyle = {
      backgroundColor: "#00abdd",
      width: "16rem",
      height: "4rem",
      fontSize: "20px",
      color: "white",
    };
    return (
      <div className="login-page">
        <Grid align="center">
          <TwitterIcon style={{ fontSize: 80, color: "#00acee" }} />
          <h1 style={{ fontSize: 40, color: "#3b4647" }}>Log in</h1>
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            type="email"
            style={inputStyle}
            required
            onChange={this.handleChange}
            value={this.state.email}
          />
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            style={inputStyle}
            type="password"
            required
            onChange={this.handleChange}
            value={this.state.password}
          />
          <Button style={buttonStyle} onClick={this.login}>
            Log in
          </Button>
          <p>
            Don't have an account?
            <Link exact to="/">
              Sign Up
            </Link>
          </p>
        </Grid>
      </div>
    );
  }
}

export default login;
