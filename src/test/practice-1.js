import React, { useEffect } from "react";
import { render } from "react-dom";
import "../public/index.css";
import * as data from "./messages.json";

// Main App component
// renders a list of Messages using data from messages.json
const App = (props) => {
  const [users, setUsers] = React.useState([]);
  const [searchVals, setSearchVals] = React.useState([]);
  

  const handleSearch = (e) => {
    const {
      target: { value }
    } = e;
    const search_res = users.filter((user) => user.includes(value));
    setSearchVals(search_res);
  };
  
  const fetchData = async() =>{
    const data =  await fetch("https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0").then(res=>res)
    console.log("x",data)
  }
  useEffect(() => {
    setUsers(["user1", "user2", "dom", "practice", "Phila", "Philippines"]);
  }, []);
  
  useEffect(() => {
    setSearchVals(users);
    fetchData()
  }, [users]);
 
  return (
    <div>
      <div class="table-container">
        <div>
          <h2>Users</h2>
          <label>
            Add User :
            <input name="add_user" id="add_user" />
            <button
              onClick={() => {
                setUsers((prev) => [
                  ...prev,
                  ...(document.querySelector("#add_user").value && [
                    document.querySelector("#add_user").value
                  ])
                ]);
              }}
            >
              Add
            </button>
          </label>
        </div>
        <br />
        <div>
          <label>
            Search :
            <input name="search" onChange={handleSearch} />
          </label>
        </div>
      </div>

      <br />
      <div class="table-container">
        <table
          style={{
            textAlign: "justified",
            // borderStyle: true,
            color: "green",
            marginRight: "auto",
            marginLeft: "auto"
          }}
        >
          <tc style={{ border: "1px solid" }}>
            <th>User</th>
          </tc>
          <tr>
            {searchVals.length
              ? searchVals?.map((searchVal) => {
                  return (
                    <tr style={{ color: "blue" }}>
                      <a href="google.com">{searchVal}</a>
                    </tr>
                  );
                })
              : "No Users found."}
          </tr>
        </table>
      </div>
    </div>
  );
};

render(<App messages={data.messages} />, document.getElementById("root"));