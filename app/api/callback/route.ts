import {NextResponse} from "next/server";
import twilio from "twilio";
export async function POST(req:Request){
 try{
  const {name,phone,email,interest,message}=await req.json();
  if(!name||!phone)return NextResponse.json({error:"Name and phone number are required."},{status:400});
  const sid=process.env.TWILIO_ACCOUNT_SID,token=process.env.TWILIO_AUTH_TOKEN,owner=process.env.OWNER_PHONE,from=process.env.TWILIO_FROM,channel=process.env.NOTIFY_CHANNEL||"sms";
  if(!sid||!token||!owner||!from)return NextResponse.json({error:"Owner notification is not configured yet. Add the Twilio environment variables."},{status:503});
  const body=`New SPM callback request\nName: ${name}\nPhone: ${phone}\nEmail: ${email||"Not provided"}\nInterest: ${interest||"Not specified"}\nMessage: ${message||"None"}`;
  const client=twilio(sid,token);
  const sent=await client.messages.create({body,from:channel==="whatsapp"?`whatsapp:${from}`:from,to:channel==="whatsapp"?`whatsapp:${owner}`:owner});
  return NextResponse.json({ok:true,sid:sent.sid});
 }catch(e){console.error(e);return NextResponse.json({error:"The owner notification could not be delivered."},{status:500});}
}