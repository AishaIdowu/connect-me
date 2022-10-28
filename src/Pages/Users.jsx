import React, { Component } from "react";
import Navbar from "../components/Navbar";
// import axios from 'axios';
import "./Page.css";

export class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: false,
    };
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          items: response.results,
          loading: true,
        });
      });
  }
  render() {
    var { items, loading } = this.state;

    if (!loading) {
      return (
        <div>
          <Navbar />
          <h1 className="load">Loading...</h1>
        </div>
      );
    } else {
      return (
        <div className="users">
          <Navbar />
          <div className="users-card">
            {items.map((item) => (
              <>
                <h3>{items.name.first}</h3>
                <img src={items.picture.medium} alt={item.name.first} />
              </>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Users;
