import React, { Component } from "react";
import Navbar from "../components/Navbar";
// import { useState, useEffect } from "react";
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

// // import React from 'react'

// function Users() {
//   const [data, setData] = useState(null);
//  const [loading, setLoading] = useState(true);
//  const [error, setError] = useState(null);


//  useEffect(() => {
//   fetch(`https://randomuser.me/api/?results=50`)
//    .then((response) => console.log());
//    .then((actualData) => console.log(actualData));
//    .catch((err) => {
//     console.log(err.message);
//    });
//  }, []);

//   return (
//     <div>Users</div>
//   )
// }

// export default Users
