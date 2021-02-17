import React, {useState,useEffect} from 'react';
import {fetchDailyData} from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = () => {

    const [dailyData,setdailyData] = useState([]);

    useEffect(() => {                                                       // It is hard to use useEffect on async functions so make a async function under in
        const fetchAPI = async() => {                                       // UseEffect() is called after the page is rendered
                setdailyData(await fetchDailyData());                       // fetching data from APi and putting it in dailyData
        }

        fetchAPI();
    });

    const lineChart = (
        dailyData.length !=0 ?
        (
            <Line
                data={{
                        labels: dailyData.map(({ date }) => date),
                        labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
                        // abhove labels is defining th X-axis
                        datasets: [{
                                data: dailyData.map((data) => data.confirmed),
                                label: 'Infected',
                                borderColor: '#3333ff',
                                fill: true,
                            }, {
                                data: dailyData.map((data) => data.deaths),
                                label: 'Deaths',
                                borderColor: 'red',
                                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                                fill: true,
                            },  {
                                data: dailyData.map((data) => data.recovered),
                                label: 'Recovered',
                                borderColor: 'green',
                                backgroundColor: 'rgba(0, 255, 0, 0.5)',
                                fill: true,
                            },
                        ]
                }}
     
            />
        
        ) : null
    );
    return(
        
        <div className={styles.container}>
            {lineChart}
        </div>
        
    ) 
}

export default Chart;

