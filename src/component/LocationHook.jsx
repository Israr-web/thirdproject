import React from 'react'
import { useLocation } from 'react-router-dom'

export default function LocationHook() {

    const location = useLocation();

    // UseLocation Hook Hum ko Current location data hai humara page ki 

    console.log(location);
    
  return (
    <div>
        <h2>LocationHook
            </h2>

    <h1>Current Location : {location.pathname}</h1>

    </div>
  )
}
