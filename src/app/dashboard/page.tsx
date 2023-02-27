"use client"
import React from "react";
import {useAPI} from "@/hooks/useAPI";
import Cards from "./card/page";
export default function Repositorios(){
    const {data,error,isLoading} = useAPI('https://api.github.com/users/felipesergios/repos')
    console.log(data)
    return(
        <>
       <div className="container mx-auto">
        {isLoading && <h1>Carregando dados ....</h1>}

      {data?.map((item:any) => (
        <Cards key={item.id} name={item.name} describe={item.full_name} img={item.owner.avatar_url} />
      ))}   
       </div>
        </>
    )
}