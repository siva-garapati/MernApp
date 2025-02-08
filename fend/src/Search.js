import React, { useState } from 'react'
import axios from 'axios'

const Search = ({setImages}) => {
    let [str,setStr]=useState('')

    let handleSearch=()=>{
      axios.get(`http://localhost:5000/filter/${str}`).then((res)=>{
        console.log(res.data)
        setImages(res.data)
      })
    }
  return (
    <div className='search'>
        <input type='text' placeholder='search' onChange={(e)=>setStr(e.target.value)} value={str}/>
        <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Search