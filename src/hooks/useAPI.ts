
import React from 'react'
import useSWR from 'swr'
import axios from 'axios'

export function useAPI(url:string){
    const {data,isLoading,error} = useSWR(url, async url=>{
        const response = await axios.get(url)
        const data = await response.data
        return data
    })
    return {data,isLoading,error}
}
