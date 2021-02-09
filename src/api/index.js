import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
 
export const fetchData = async () => {               // Note async is wriiten to tell the function to wait becasue whenfetch request is made it takes some time to bring data
    try{
        const { data: { confirmed, recovered, deaths, lastUpdata} } = await axios.get(url);      //  Data has a lot of info coming from api, we are choosing confirmed, deathss etc from and returing
        
        return { confirmed, recovered, deaths, lastUpdata}

    }catch(error){
        console.log("nah");
        return;
    }
}