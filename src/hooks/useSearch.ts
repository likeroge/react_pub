import { useEffect, useState } from "react"
import { ICocktail } from "../models/Cocktail"

export const useSearch = (searchString:string, cocktails:ICocktail[]) => {
    const [searchResults, setSearchResults] = useState<ICocktail[]>([])
    useEffect(()=>{
        if(searchString===''){
            setSearchResults([])
        }else{
            const newResults = cocktails.filter(cocktail=> {
                if( cocktail.title.toLowerCase().match(searchString.toLowerCase())!==null) {
                 return cocktail.title.toLowerCase().match(searchString.toLowerCase())?.input
                }
             })
            setSearchResults(newResults)
        }
        },[searchString])
    return searchResults 
}