import TextField from "@material-ui/core/TextField";
import { flexbox } from "@material-ui/system";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Height, InfoTwoTone } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Component } from "react";
import fire from "./fire";
import { useMediaQuery } from "@material-ui/core";

class signUp extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signUp = this.signUp.bind(this);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  signUp(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
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
      margin: "1.5rem",
      display: "flex",
    };

    const buttonStyle = {
      backgroundColor: "#4ec0f4",
      width: "16rem",
      height: "4rem",
      fontSize: "20px",
      color: "white",
    };

    return (
      <div className="signup-page">
        <Grid align="center">
          <TwitterIcon style={{ fontSize: 80, color: "#00acee" }} />
          <h1 style={{ fontSize: 40, color: "#3b4647" }}>Sign Up</h1>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            style={inputStyle}
            onChange={this.handleChange}
            value={this.state.name}
            InputLabelProps={{ className: "textfield-color" }}
          />
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
          <Button style={buttonStyle} onClick={this.signUp}>
            SIGN UP
          </Button>
          <p>
            Alredy have an account?
            <Link exact to="/login">
              Log in
            </Link>
          </p>
        </Grid>
      </div>
    );
  }
}

export default signUp;
