import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const IndexPage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .post("https://countries.trevorblades.com/", {
        query: `
                query{
                    countries{
                        name
                        code
                        emoji
                        capital
                    }
                }`,
      })
      .then((res) => {
        setCountries(res.data.data.countries);
      });
  }, []);

  const countriesList = countries.map((country) => {
    return (
      <div className="card-content">
        <div className="country-flag">
          <h5 className="country-name" style={{ color: "white" }}>
            {country.name}
          </h5>
          <img
            src={`https://www.countryflags.io/${country.code}/flat/32.png`}
            alt=""
            style={{ marginLeft: 10 }}
          ></img>
        </div>

        <Link to={`/show/${country.code}`}>
          <i className="material-icons">visibility</i>
        </Link>
      </div>
    );
  });

  return <div className="IndexPage container">{countriesList}</div>;
};

export default IndexPage;
