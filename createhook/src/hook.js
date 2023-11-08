import { useState } from "react"

function hookgenerator(){
    const [data,setData] =useState({})
    useState(()=>{
        fetch('https://fakestoreapi.com/products/1')
        .then((res)=>res.json())
        console.log(data.json())
    },[])
}

export default hookgenerator;