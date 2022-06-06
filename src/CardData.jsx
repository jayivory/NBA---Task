import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// console.log("newData".cardData)

const CardData = () => {
  const [cardData, setCardData] = useState([]);

  const { id } = useParams();
//   console.log("myid", id);

  const options = {
    method: "GET",
    url: `https://free-nba.p.rapidapi.com/players/${id}`,
    headers: {
      "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
      "X-RapidAPI-Key": "2fa92c71d8msh92e316aa65699bdp14a259jsnc05a48d9c2a1",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data.team, "data");
      setCardData(response.data?.team);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="city">
            <h5>{cardData.city}</h5>
          </div>
          <div className="div">
            <h5>{cardData.division}</h5>
          </div>
          <div className="fname">
            <h5>{cardData.full_name}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardData;
