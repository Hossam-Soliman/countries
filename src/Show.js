import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Show extends Component {
  state = {
    code: "",
    name: "",
    capital: "",
    currency: "",
    emoji: "",
    phone: "",
    language: "",
  };

  componentDidMount() {
    axios
      .post("https://countries.trevorblades.com/", {
        query: `
        query{
            country(code: "${this.props.match.params.id}"){
              name
              code
              emoji
              phone
              currency
              capital
              languages {
                name
                }
            }
        }`,
      })
      .then((res) => {
        console.log(res.data.data);
        console.log(this.props.match.params.id);
        this.setState({
          code: res.data.data.country.code,
          name: res.data.data.country.name,
          capital: res.data.data.country.capital,
          currency: res.data.data.country.currency,
          emoji: res.data.data.country.emoji,
          phone: res.data.data.country.phone,
          language: res.data.data.country.languages[0].name,
        });
      });
  }

  render() {
    return (
      <div className="show-page container">
        <h5>Country: {this.state.name}</h5> <br></br>
        <div className="details">
          <table>
            <tr>
              <td>
                country <br></br>
                <span>{this.state.name}</span>
              </td>
              <td>
                flag: <br></br>
                <img
                  src={`https://www.countryflags.io/${this.state.code}/flat/32.png`}
                  alt=""
                ></img>
              </td>
            </tr>
            <tr>
              <td>
                language <br></br>
                <span>{this.state.language}</span>
              </td>
              <td>
                phone: <br></br>
                <span> +{this.state.phone}</span>
              </td>
            </tr>
            <tr>
              <td>
                currency <br></br>
                <span>{this.state.currency}</span>
              </td>
              <td>
                capital <br></br>
                <span>{this.state.capital}</span>
              </td>
            </tr>
          </table>
        </div>
        <ul>
          <li>
            <Link to={`/news/${this.state.code}`}>
              <button className="news-bt">Latest News</button>
            </Link>
          </li>
          <li>
            <Link to={`/corona/${this.state.name}`}>
              <button className="news-bt">Coronavirus live updates</button>
            </Link>
          </li>
          <li>
            <button
              className="back-bt"
              onClick={() => {
                this.props.history.push("/");
              }}
            >
              Back
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Show);
