import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Images from '../Images';
import Cardimg from '../Cardimg';
import Events from '../Events';
import Form from '../Form';
import IncrDecr from '../IncrDecr';
import Effectfun from '../Effectfun';
import Ref from '../Ref';
import ChildA from '../ChildA';
import MemoHook from '../MemoHook';
import Login from '../Login';
import SignUp from '../SignUp';
import LocationHook from '../LocationHook';


export default function Navigation() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/images" element={<Images />} />
        <Route path="/cardimg" element={<Cardimg/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/incdec" element={<IncrDecr/>}/>

        <Route path="/incdec/:fname" element={<IncrDecr/>}/> 
        {/* uper wala route hum Useparams hook k leya use kr rha hain  */}

        <Route path="/effectfun" element={<Effectfun/>}/>
        <Route path="/ref" element={<Ref/>}/>
        <Route path="/childA" element={<ChildA/>}/>
        <Route path="/memo" element={<MemoHook/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/location" element={<LocationHook/>}/>












    </Routes>
  )
}
