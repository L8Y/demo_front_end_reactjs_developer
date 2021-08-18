import TwitterIcon from "@material-ui/icons/Twitter";
import { Component } from "react";
import fire from "./fire";
import HomeRoundedIcon from "@material-ui/icons/HomeOutlined";
import Button from "@material-ui/core/Button";
import ExploreIcon from "@material-ui/icons/ExploreOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  logOut() {
    fire.auth().signOut();
  }

  render() {
    const button = {
      width: "10rem",
      margin: "1rem",
      fontSize: "1rem",
      fontColor: "yellow",
    };

    return (
      <div className="home">
        {/* <TwitterIcon style={{ fontSize: 50, color: "#00acee" }} /> */}
        <Button variant="text" style={button}>
          <HomeRoundedIcon />
          Home
        </Button>
        <Button variant="text" style={button}>
          <ExploreIcon />
          Explore
        </Button>
        <Button variant="text" style={button}>
          <PersonOutlineOutlinedIcon />
          Profile
        </Button>
        <Button onClick={this.logOut} style={button}>
          <LockOutlinedIcon />
          Log Out
        </Button>
        <hr></hr>
      </div>
    );
  }
}

export default home;
