import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroller";

function Card() {

  
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0)
  console.log(page)
  // console.log("statedata",data)

  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://free-nba.p.rapidapi.com/players",
    params: { page: page, per_page: "5" },
    headers: {
      "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
      "X-RapidAPI-Key": "2fa92c71d8msh92e316aa65699bdp14a259jsnc05a48d9c2a1",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      setData([...data, ...response.data.data]);
    })
    .catch(function (error) {
      console.error(error);
    });

  const HandleButton = () => {};

  const scrollEnd = () => {
    setPage(page + 1);
  }

  window.onscroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight)
    {
      scrollEnd();
      // console.log("scrollB bottom")
    }
  } 

  return (
    <>
      {data.map(function (val) {
        {
          {
            /* console.log(val.id) */
          }
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
                      <button
                        type=""
                        clssName="btn btn-success"
                        onMouseOver={HandleButton}
                      >
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
