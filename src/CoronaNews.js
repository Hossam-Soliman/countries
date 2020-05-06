import React, { Component } from 'react';
import axios from 'axios'


class CoronaNews extends Component{

    state = {
        confirmed:'',
        deaths: '',
        recovered:'',
        active:'',
        date: ''
    }

    componentDidMount(){
        axios.get(`https://api.covid19api.com/total/country/${this.props.match.params.id}`)
        .then((res) =>{
            this.setState({
                confirmed: res.data[res.data.length - 1].Confirmed,
                deaths: res.data[res.data.length - 1].Deaths,
                recovered: res.data[res.data.length - 1].Recovered,
                active: res.data[res.data.length - 1].Active,
                date: res.data[res.data.length - 1].Date,
            })
   
        })
    }

    render(){
        return(
            <div className="coronavirus">
                <h4 >Coronavirus live updates</h4>
                <div>Confirmed <br></br> {this.state.confirmed}</div>
                <div>Recoverd <br></br>{this.state.recovered}</div>
                <div>Deaths<br></br>{this.state.deaths}</div>
                <div>Active <br></br>{this.state.active}</div>
                <div>Last update: <br></br>{this.state.date.slice(0, 10)}</div>
                <button onClick ={(e)=> {this.props.history.push('/countries')}}>Back</button>
            </div>
            
        )
    }
}

export default CoronaNews;

















// const CoronaNews = () => {                                   

//     const [news, setNews] = useState([]);

//     useEffect (() => {

//         axios.get('https://api.covid19api.com/live/country/kuwait')
//         .then((res) =>{
//             // console.log(res.data)
//             setNews(res.data)
//             // console.log(news.slice(-1)[0])
//             // console.log(news[news.length - 1])
//             console.log(news)
//         })
//     }, [])


//     return (  
//         <div className="Corona-news">  
//             {news.Country}
//         </div> 
//     );
// }
 

// export default CoronaNews;