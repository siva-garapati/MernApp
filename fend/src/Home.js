import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    let [images,setImages]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/get").then((res)=>{
            console.log(res.data)
            setImages(res.data)
        })
    },[])
  return (
    <div className='home'>
        <div className='con'>
            {
                images.map((obj)=>{
                    return <div className='card'>
                        <h2>{obj.name}</h2>
                        <img src={`http://localhost:5000/images/${obj.url}`} alt=''/>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Home