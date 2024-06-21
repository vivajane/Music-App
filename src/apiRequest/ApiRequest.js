import axios from "axios";

export const allAssets = async() =>{
   try{
    const response = await axios.get('https://spotify23.p.rapidapi.com/albums/?ids=3IBcauSj5M2A6lTeffJzdv',{
        headers: {
            'x-rapidapi-host': 'spotify23.p.rapidapi.com',
            'x-rapidapi-key': '90625ec61bmshe58be17b0daeae7p1604dbjsnf464546f8b40',
        },
    }
       
    );
   
    return response;
   }catch(error){
    console.log(error,"errors")
   }

}
