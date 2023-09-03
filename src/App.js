import React, { useEffect, useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
let App = () => {
  let apikey=process.env.REACT_APP_NEWS_API;
  const [category, setCategory] = useState("science")
  const [progress, setProgress] = useState(0)
  let handleOnChange=async(e)=>{
    setCategory(e)
  }
    return (
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <Router>
        <LoadingBar
        color='#f11946'
        height={4}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}/>
        
        <Navbar func={handleOnChange}/>
        <Routes>
          <Route exact path='/'  element={<News setprogress={setProgress} key="science1" pageSize={12} apiKey={apikey} q={""} country={"in"} category={category}/>}>
          </Route>
          <Route exact path='/business'  element={<News setprogress={setProgress} key="business" pageSize={12} apiKey={apikey} q={""} country={"in"} category="business"/>}>
          </Route>
          <Route exact path='/entertainment'   element={<News setprogress={setProgress} key="entertainment" pageSize={12} apiKey={apikey} q={""} country={"in"} category={"entertainment"}/>}>
          </Route>
          <Route exact path='/general'  element={<News setprogress={setProgress} key="general" pageSize={12} apiKey={apikey} q={""} country={"in"} category={"general"}/>}>
          </Route>
          <Route exact path='/health'  element={<News setprogress={setProgress} key="health" pageSize={12} apiKey={apikey} q={""} country={"in"} category={"health"}/>}>
          </Route>
          <Route exact path='/sports' element={<News setprogress={setProgress} key="sports" pageSize={12} apiKey={apikey} q={""} country={"in"} category={"sports"}/>}>
          </Route>
          <Route exact path='/science' element={<News setprogress={setProgress} key="science"  pageSize={12} apiKey={apikey} q={""} country={"us"} category={"science"}/>}>
          </Route>
          <Route exact path='/technology'   element={<News setprogress={setProgress} key="technology" pageSize={12} apiKey={apikey} q={""} country={"us"} category={"technology"}/>}>
          </Route>
        
        </Routes>
        </Router>
      </div>
    )
  }

  export default App