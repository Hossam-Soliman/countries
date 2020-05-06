import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

const IndexPage = () => {                                   

    const [countries, setCountries] = useState([]);

    useEffect (() => {

        axios.post('https://countries.trevorblades.com/', { 
            query: `
                query{
                    countries{
                        name
                        code
                        emoji
                        capital
                    }
                }`

            }).then(res =>{
                setCountries(res.data.data.countries) 
            }) 
    }, [])

    const countriesList = countries.map(country =>{
        return(
             <tbody key={country.code}>
                 <tr>
                     <td>{country.name}</td>
                     <td><img src= {`https://www.countryflags.io/${country.code}/flat/32.png`} alt=""></img></td>
                     <Link to ={`/show/${country.code}`}><td><i className="material-icons">visibility</i></td></Link>
                 </tr>
             </tbody>
        )
    })

    return (  
        <div className="IndexPage container">  
                <div className="table ">
                    <table>
                        <thead>
                            <tr>
                                <th>country</th>
                                <th></th>
                                <th>view</th>
                            </tr>
                        </thead>
                        {countriesList}
                    </table>
                </div>
        </div> 
    );
}
 

export default IndexPage;