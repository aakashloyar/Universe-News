import React,{ useState } from 'react'
import './app.css'
import Navbar from './assets/Navbar.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import News from './assets/News.jsx'
import LoadingBar from 'react-top-loading-bar'

export const App=()=> {
  const pageSize = 5;
  const [progress, setProgress] = useState(0)
  const [dcountry,setCountry]=useState("us");
  const apikey=import.meta.env.VITE_APIKEY;

    const handleinClick=()=>{
      console.log("india")
      setCountry("in");
    }
    const handleruClick=()=>{
      setCountry("ru");
      console.log("russia")
    }    
    const handleusClick=()=>{
      setCountry("us");
      console.log("usa")
    }  
    const handleauClick=()=>{
      setCountry("au");
      console.log("australia")
    }  
    const handlefrClick=()=>{
      setCountry("fr");
      console.log("france")
    }  
    const handledeClick=()=>{
      setCountry("de");
      console.log("germany")
    }  
    const handlechClick=()=>{
      setCountry("ch");
      console.log("china")
    }  
    const handlegbClick=()=>{
      setCountry("gb");
      console.log("Britain")
    }  
    return (
      <div style={{backgroundColor:"grey"}}>
        <BrowserRouter>
        <Navbar country={dcountry} handleinClick={handleinClick} handleruClick={handleruClick} handleusClick={handleusClick} handleauClick={handleauClick} handledeClick={handledeClick} handlegbClick={handlegbClick} handlechClick={handlechClick} handlefrClick={handlefrClick}/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        />
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} apikey={apikey}  key="general"  pageSize={20} category={"general"} country={dcountry}/>} />
            <Route path="/business" element={<News setProgress={setProgress} apikey={apikey}  key="business"  pageSize={20} category={"business"} country={dcountry}/>} />
            <Route path="/entertainment" element={<News setProgress={setProgress} apikey={apikey}  key="entertainment"  pageSize={20} category={"entertainment"} country={dcountry}/>} />
            <Route path="/general" element={<News setProgress={setProgress} apikey={apikey}  key="general" pageSize={20} category={"general"} country={dcountry}/>} />
            <Route path="/health" element={<News setProgress={setProgress} apikey={apikey}  key="health"  pageSize={20} category={"health"} country={dcountry} />} />
            <Route path="/science" element={<News setProgress={setProgress} apikey={apikey}  key="science" pageSize={20} category={"science"} country={dcountry}/>} />
            <Route path="/sports" element={<News setProgress={setProgress} apikey={apikey}  key="sports" pageSize={20} category={"sports"} country={dcountry}/>} />
            <Route path="/technology" element={<News setProgress={setProgress} apikey={apikey}  key="technology"  pageSize={20} category={"technology"} country={dcountry}/>} />
          </Routes>
        </BrowserRouter>
        
        
      </div>
    )
  
}
//react component lifecycle
//mounting-birth of new component
//update-growth of your component
//unmount-dath of your component
//componentDidUpdate()
//componentDidMount()
//componentWillUnmount

//react hooks
//allow us to use function based component with class based functionality(using rcc in rfc)
//common methods 
//useState
//useEffect
//useContext
//useRef



//mern stack
//mongodb
//expressjs
//react
//nodejs
