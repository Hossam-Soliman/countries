import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import {Link} from 'react-router-dom'


class IndexPage extends Component {

    state = {
        countries:[]
    }
   

    componentDidMount(){
        axios.post('https://countries.trevorblades.com/', { 
        query: `
            query{
                countries{
                    name
                    code
                    emoji

                }
            }`
        }

        ).then(res =>{
            console.log(res.data.data)
            this.setState({
                countries: res.data.data.countries
            })
        })       
    }

   render(){
       console.log(this.props.newUser)
       const user = this.props.newUser

       const countriesList = this.state.countries.map(country =>{
           return(
                <tbody key={country.code}>
                    <tr>
                        <td>{country.code}</td>
                        <td>{country.name}</td>
                        <td><img src= {`https://www.countryflags.io/${country.code}/flat/32.png`} alt=""></img></td>
                        <Link to ={`/show/${country.code}`}><td><i className="material-icons">visibility</i></td></Link>
                    </tr>
                </tbody>
           )
       })
        
        return(
            <div className="IndexPage">  
                <div className= "user-page">User page</div>
                    <div className = "userData">
                        <span>user email: {user.email} </span><br></br>
                        <span>user password: {user.password}</span>
                    </div>

                    <div className="table">
                        <table>
                            <thead>
                                <tr>
                                    <th>code</th>
                                    <th>name</th>
                                    <th>emoji</th>
                                    <th>action</th>
                                </tr>
                            </thead>
                            {countriesList}
                        </table>
                    </div>
            </div>  
        )
   }    
}

const mapStateToProps = (state) =>{
    return{
        newUser: state
    }
}

export default connect(mapStateToProps)(IndexPage)

