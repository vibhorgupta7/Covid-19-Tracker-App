// install depenencies: npm install axios react-chartjs-2 react-countup classnames @material-ui/core
import React from 'react';
import { Cards, Chart, CountryPicker } from './components';         // rather than importing each component indivisually, do this , increases readebility. Make index.js file in component folder and export all there.
import styles from './App.module.css';
import { fetchData } from './api';                                  // whenevr you are accesing index.js files u dont need to mention it, just mention the folder
import coronaImage from './images/image.png';


class App extends React.Component {
    state = {
        data: {},
        country:''                                                  // current country that you are on, initially empty
    }
    
    async componentDidMount(){                                          // NOTE: First the constructor is called, than the render method is called than componenDidMount() is called. ComponentDidMount() only gets called once and is used to fetch data etc
        const fetchedData = await fetchData();                             // await is written because we are dealing with async function                   
        
        this.setState({data: fetchedData});
    }
    
    handleCountryChange = async(country) => {
        // fetch the data
        // set the state
        const fetchedData = await fetchData(country); 
        this.setState({data:fetchedData, country:country});
    }

    render(){
        const { data , country} = this.state;
        return(
            <div className={styles.container}>
                <img className={styles.image}src={coronaImage} alt="COVID-19"></img>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}


export default App;