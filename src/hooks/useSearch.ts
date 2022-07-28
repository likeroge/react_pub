import { useEffect, useState } from "react"
import { ICocktail } from "../models/Cocktail"

export const useSearch = (searchString:string, cocktails:ICocktail[]) => {
    const [searchResults, setSearchResults] = useState<ICocktail[]>([])
    useEffect(()=>{
        if(searchString===''){
            setSearchResults([])
        }else{
            const newResults = cocktails.filter(cocktail=> {
                if( cocktail.title.match(searchString)!==null) {
                 return cocktail.title.match(searchString)?.input
                }
             })
            setSearchResults(newResults)
        }
        },[searchString])
    return searchResults 
}