import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
 
export const fetchData = async (country) => {               // Note async is wriiten to tell the function to wait becasue whenfetch request is made it takes some time to bring data
  let changeableUrl = url;

  if(country){
    changeableUrl = `${url}/countries/${country}`
  }
  
  try{
        const { data: { confirmed, recovered, deaths, lastUpdata} } = await axios.get(changeableUrl);      //  Data has a lot of info coming from api, we are choosing confirmed, deathss etc from and returing
        
        return { confirmed, recovered, deaths, lastUpdata}

    }catch(error){
        console.log("nah");
        return;
    }
}


export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get('https://api.covidtracking.com/v1/us/daily.json');

      return data.map(({ positive, recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered, deaths: death, date }));
    } catch (error) {
      return error;
    }
  };

  export const fetchCountries = async () => {
    try {
     const { data: { countries } } = await axios.get(`${url}/countries`);
     return countries.map((country) => country.name);
   
    } catch (error) {
     return error;
   }
 };
// export const fetchCountries = async () => {
//     try{
//         const { data: {countries}} = await axios.get(`${url}/countries`);

//         return countries.map((i)=> i.name);
//     }catch(error){
//         console.log("ib");
//     }
// }

  // code for old apI, the old api is not showing daily data so used new api and new code written abhove
// export const fetchDailyData = async () => {
//     try{
//         const {data} = await axios.get(`${url}/daily`);             //api call to get daily data from api

//         const modifiedData = data.map((i)=>({
//             confirmed: i.confirmed.total,
//             deaths: i.confirmed.total,
//             date: i.reportDate
//         }));

//         return modifiedData;
//     }catch(error){

//     }
// }