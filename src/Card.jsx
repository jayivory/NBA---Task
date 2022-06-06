import React, { useState } from "react";
import { Link } from "react-router-dom";

function Card() {
  const [data, setData] = useState([]);
  // console.log("statdata",data)

  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://free-nba.p.rapidapi.com/players",
    params: { page: "0", per_page: "25" },
    headers: {
      "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
      "X-RapidAPI-Key": "2fa92c71d8msh92e316aa65699bdp14a259jsnc05a48d9c2a1",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      setData(response.data.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  const HandleButton = () => {};

  return (
    <>
      {data.map(function (val) {
        {
          {/* console.log(val.id) */}
        
        }
        return (
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div clssName="card">
                  <div clssName="card-body">
                    <h5 className="id">{val.id}</h5>
                    <h5 clssName="fname">{val.first_name}</h5>
                    <h5 clssName="lname">{val.last_name}</h5>
                    <Link to={`CardData/${val.id}`}>
                      <button type="" clssName="btn btn-success" onMouseOver={HandleButton}>
                        button
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;
