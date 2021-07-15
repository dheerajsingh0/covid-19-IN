import React, { useEffect ,useState} from 'react'
import './style.css'
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import img4 from './images/4.jpg'
const Covid = () => {
   const [data,setData]=useState([]);
    const getCovidData =async()=>{
     
        try{
            const res= await fetch('https://api.covid19india.org/data.json')
            const actualData=await res.json();
            console.log(actualData);
            setData(actualData.statewise[0]);
       }
        catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
      setInterval(()=>{
        getCovidData();
      },5000)
    },[setData]);
    return (
        <>
        <center>
        <h3> 🔴 LIVE COVID-19 Tracker</h3>
        <h2>COVID-19 CORONAVIRUS TRACKER FOR INDIA</h2>
        </center>
        <div className="cards-list">
      
  <div className="card 1">
    <center><h1>Country</h1></center>
    
    <div className="card_image"> <img loading="lazy" src={img1} alt="img1" /> </div>
    <div className="card_title title-white">
      <p>INDIA</p>
    </div>
  </div>
  
    <div class="card 2">
    <center><h1><b>{data.recovered}</b></h1></center>
    <div class="card_image">
      <img loading="lazy" src= "https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif" alt="img"/>
      </div>
    <div class="card_title title-green">
      <p>Total Recovered</p>
    </div>
  </div>
  
  <div class="card 3">
    <div class="card_image">
    <center><h1><b>{data.confirmed}</b></h1></center>
      <img src={img2} loading="lazy" alt="img"/>
    </div>
    <div class="card_title title-green">
      <p>Total Confirmed</p>
    </div>
  </div>
    
    <div class="card 4">
        
    <div class="card_image">
    <center><h1><b>{data.deaths}</b></h1></center>
      <img src="https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif" loading="lazy" alt="img" />
      </div>
      
    <div class="card_title title-red">
        
      <p>TOTAL DEATHS</p>
    </div>
    </div>
    <div class="card 5">
    <div class="card_image">
    <center><h1><b>{data.active}</b></h1></center>
      <img loading="lazy" src={img3} alt="img"/>
      </div>
    <div class="card_title title-red">
      <p>CURRENT ACTIVE CASE</p>
    </div>
  </div>
  <div class="card 6">
    <div class="card_image">
    <center><h1><b>{data.lastupdatedtime}</b></h1></center>
       <img loading="lazy" src={img4} alt="img" /> </div>
    <div class="card_title title-white">
      <p><b>LAST UPDATE</b></p>
      <h3>Updating</h3>
    </div>
  </div>
  </div>
            
        </>
    )
}

export default Covid
