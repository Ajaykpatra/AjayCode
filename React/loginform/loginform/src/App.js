import {useState, useEffect } from "react";
import { getPosts } from "./api";
import postCard from "./components/postCard";
import './App.css';

function App() {

  const [data, setData]=useState(null);

    useEffect(()=>{
      getPosts().then((posts)=>setData(posts));
      
    },[]);

  return (
    <div className="App">
    {
      data? data.map((e)=><postcard/>) :<p>No Data</p>
    }
       
    </div>
  );
}

export default App;
