import React, { useEffect, useState } from "react"
import { ICocktail } from "../models/Cocktail"


export const useFilter = (categoryId: number, cocktails:ICocktail[]) => {

    const [filteredCocktails, setFilteredCocktails] = useState<ICocktail[]>(cocktails)

    useEffect(()=>{
        // const filteredCocktailsByCategory = cocktails.filter(cocktail => cocktail.category ===categoryId)
        const filteredCocktailsByCategory = cocktails.filter(cocktail => +cocktail.category.toString()[0] ===categoryId)
        setFilteredCocktails(filteredCocktailsByCategory) 
    }, [categoryId])

    return filteredCocktails
}