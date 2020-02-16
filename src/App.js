import React from 'react';   
import Header from './header';
import WeatherData from './weatherdata';
import './index.css';
import clouds from './assets/images/CloudsBG.jpg';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      weather:[]
    }
  }

  componentDidMount() {
  
    const getWeatherInfo = new Promise( resolve => {
      fetch('http://localhost/php/api.php')
        .then( response => response.text() )
          .then( text => resolve(JSON.parse(text)) );
    });

    getWeatherInfo.then(jsonObj => {
      let fiveDayForecast = [];
      const weatherForecastByDay = jsonObj.list.map( obj => obj);
      
      for(let i = 0; i <= 32; i += 8){
        fiveDayForecast[i] = weatherForecastByDay[i];
      }

      this.setState({
        weather: fiveDayForecast,   
      });
    });
  }

  render(){
    const bodyStyle = {
      backgroundImage: `url(${clouds})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: "100vw",
      height: "100vh",
      color: "white",
      fontSize: "50px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    };

    return(
    <div style = {bodyStyle}>
      <Header />
      <WeatherData weatherInfo={this.state.weather}/>
    </div>);
  }
}

export default App;