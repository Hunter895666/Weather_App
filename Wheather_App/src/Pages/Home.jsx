import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Weather from './Weather';

const Home = () => {

  const navigate = useNavigate()
  const fetchUser = async () =>{
    try{
    const token = localStorage.getItem('token')
    const response = await axios.get('http://localhost:3000/auth/home',{
      headers: {
         "Authorization" : `Bearer ${token}`
      }
    })
    if(response.status !==201){
     navigate('/login')
    }
  }catch(err){
    navigate('/login')
    console.log(err);
  }
}
  useEffect(()=>{
      fetchUser()
  },[])

  return (
    <div >
      <Weather/>
    </div>
  )
}

export default Home
