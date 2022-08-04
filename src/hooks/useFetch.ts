import { useEffect, useState } from "react"
import { cocktailsApi } from "../api/cocktails"

export const useFetch = (url:string) => {
    const [data, setData] = useState([])
    useEffect(()=>{
        async function fetchData(){
            try{
                const {data} = await cocktailsApi.get(url)
                setData(data)
            }catch(err){
                setData([])
            }
        
        }
        fetchData()
    },[])
    return data
}