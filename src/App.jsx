import { createContext, useState } from 'react';
import './App.css';
import Navigation from './component/config/Navigation';
import Images from './component/Images';
import Cardimg from './component/Cardimg';
import Events from './component/Events';
import Form from './component/Form';
import IncrDecr from './component/IncrDecr';
import Effectfun from './component/Effectfun';
import Ref from './component/Ref';
import ChildA from './component/ChildA';
import ContextAPI from './component/ContextAPI';
import MemoHook from './component/MemoHook';
import CallbackHook from './component/CallbackHook';
import Login from './component/Login';
import SignUp from './component/SignUp';
import LocationHook from './component/LocationHook';
import AxiosApi from './component/AxiosApi';
import Axiospost from './component/Axiospost';
import EventFun from './component/EventFun';
import Getinput from './component/Getinput';
import ToggleBtn from './component/ToggleBtn';
import FormHanding from './component/FormHanding';
import ConditionalRendering from './component/ConditionalRendering';
import PassFunctionsAsProps from './component/PassFunctionsAsProps';
import ReactFragment from './component/ReactFragment';
import FormValidation from './component/FormValidation';
import UseEffectHook from './component/UseEffectHook';
import UseContextHook from './component/UseContextHook';

// const fName = createContext();
// const lName = createContext(); 
// is trhn sa hum createContext banata hai ContextAPI or UseContext Hook mai dono mai 

function App() {
 
  // const name = "Code with Israr";


  // function getData(){
  //   alert("Hello From App")
  // } ya function is leya banya tha k props k sth function kesa bhjta hain 

  const [count , setCount] = useState(0);
   return (
    <>

     {/* <Navigation/> */}

     {/* <Images/> */}

    {/* <Cardimg/> */}

    {/* <Events/> */}

    {/* <Form/> */}

    {/* <IncrDecr/> */}

    {/* <Effectfun/> */}

    {/* <Ref/> */}

    {/* <ChildA name = {name}/> */}
      {/* this is props data ko bhjna kis bhi dusri file mai */}

      {/* <fName.Provider value={"Israr"}> */}
        {/* <lName.Provider value={"Nisar"}> */}
        {/* <ContextAPI/> */}
        {/* </lName.Provider> */}
      {/* </fName.Provider> */}

      {/* <MemoHook/> */}

      {/* <CallbackHook/> */}

      {/* <Login/> */}
      {/* <SignUp/> */}
      {/* <LocationHook/> */}

      {/* <AxiosApi/> */}

      {/* <Axiospost/> */}

{/* <EventFun/> */}

{/* <Getinput/> */}

{/* <ToggleBtn/> */}

{/* <FormHanding/> */}

{/* <ConditionalRendering/> */}

{/* <PassFunctionsAsProps data={getData}/> */}

{/* <ReactFragment/> */}

{/* <FormValidation/> */}

{/* <UseEffectHook data={count}/>
<button onClick={()=> setCount(count + 1)}>Counter</button> */}

{/* uper wala hook hum props ko bhjna k leya use kr rha tha  */}


{/* <UseEffectHook /> */}

<UseContextHook/>


    </>
  )
}

export default App;
// export {fName,lName};


// useContext Hook Or Context API Dono ek hi trhn sa create hoga or dono ko provider bhi ek hi trhn sa dana hoga or export bhi ek h trhn sa hoga change bs comsumer mai hoga 
