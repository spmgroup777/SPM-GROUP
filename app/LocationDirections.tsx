"use client";
import {useState} from "react";
export default function LocationDirections(){
 const [status,setStatus]=useState("");
 function go(){
  if(!navigator.geolocation){setStatus("This browser does not support location access.");return;}
  setStatus("Getting your location…");
  navigator.geolocation.getCurrentPosition(({coords})=>{
   const lat=process.env.NEXT_PUBLIC_SITE_LAT, lng=process.env.NEXT_PUBLIC_SITE_LNG;
   const destination=lat&&lng?`${lat},${lng}`:"Bhuvanagiri, Telangana";
   const url=`https://www.google.com/maps/dir/?api=1&origin=${coords.latitude},${coords.longitude}&destination=${encodeURIComponent(destination)}&travelmode=driving`;
   window.open(url,"_blank","noopener,noreferrer");
   setStatus(lat&&lng?"Google Maps opened with the project-site route.":"Exact site coordinates are not configured yet; the temporary destination is Bhuvanagiri.");
  },()=>setStatus("Location permission was denied. Allow location access and try again."),{enableHighAccuracy:true,timeout:10000,maximumAge:0});
 }
 return <div className="direction"><button className="primaryBtn" onClick={go}>📍 Use My Location → Get Directions</button><p>{status||"Your coordinates are used in the browser only to build the route."}</p></div>;
}