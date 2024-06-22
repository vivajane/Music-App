import axios from "axios";

export const allAssets = async() =>{
   try{
    const response = await axios.get(`https://spotify23.p.rapidapi.com/search/?type=multi&offset=0&limit=10&numberOfTopResults=5`,{
        headers: {
            'x-rapidapi-host': 'spotify23.p.rapidapi.com',
            'x-rapidapi-key': '3374f90fe0mshbb2ddfbaea09dd9p1e05afjsnc61d34017012',
        },
    }
       
    );
   
    return response;
   }catch(error){
    console.log(error,"errors")
   }

}
