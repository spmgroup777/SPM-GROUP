/*"use client";
import {FormEvent,useState} from "react";
export default function CallbackForm(){
 const [state,setState]=useState("idle"),[msg,setMsg]=useState("");
 async function submit(e:FormEvent<HTMLFormElement>){
  e.preventDefault();setState("sending");setMsg("");
  const form=e.currentTarget;
  try{const r=await fetch("/api/callback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object.fromEntries(new FormData(form).entries()))});const j=await r.json();if(!r.ok)throw new Error(j.error);setState("success");setMsg("Request received. The SPM team has been notified.");form.reset();}catch(err){setState("error");setMsg(err instanceof Error?err.message:"Unable to submit request.");}
 }
 return <form className="form" onSubmit={submit}><input name="name" required placeholder="Your name"/><input name="phone" required type="tel" placeholder="Phone number"/><input name="email" type="email" placeholder="Email address"/><select name="interest" defaultValue=""><option value="" disabled>Select your interest</option><option>Plot at Bhuvanagiri</option><option>Other SPM project</option><option>Site visit</option><option>Current pricing</option></select><textarea name="message" rows={5} placeholder="Your message"/><button className="primaryBtn" disabled={state==="sending"}>{state==="sending"?"Sending…":"Request a Call Back"}</button>{msg&&<p className={state==="error"?"error":"success"}>{msg}</p>}</form>;
}*/