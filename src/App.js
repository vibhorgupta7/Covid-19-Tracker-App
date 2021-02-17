// install depenencies: npm install axios react-chartjs-2 react-countup classnames @material-ui/core
import React from 'react';
import { Cards, Chart, CountryPicker } from './components';         // rather than importing each component indivisually, do this , increases readebility. Make index.js file in component folder and export all there.
import styles from './App.module.css';
import { fetchData } from './api';                                  // whenevr you are accesing index.js files u dont need to mention it, just mention the folder

class App extends React.Component {
    state = {
        data: {},
    }
    async componentDidMount(){                                          // NOTE: First the constructor is called, than the render method is called than componenDidMount() is called. ComponentDidMount() only gets called once and is used to fetch data etc
        const fetchedData = await fetchData();                             // await is written because we are dealing with async function                   
        
        this.setState({data: fetchedData});
    }
    
    render(){
        const { data } = this.state;
        return(
            <div className={styles.container}>
                <Cards data={data} />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}


export default App;