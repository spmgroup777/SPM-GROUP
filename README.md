# SPM Green Tech & Developers

## Install and run
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Exact Google Maps navigation
Copy `.env.example` to `.env.local`.
Enter the exact project-site latitude and longitude from the official SPM brochure.
The visitor's browser location becomes the route origin and Google Maps opens the driving route.

Until exact coordinates are entered, the button falls back to Bhuvanagiri, Telangana. Do not treat that fallback as the final site coordinate.

## Owner notification
The callback form calls `/api/callback`, which uses Twilio to notify the owner.
For WhatsApp, configure a WhatsApp-enabled Twilio sender and the required WhatsApp recipient setup.
For SMS, use an SMS-capable Twilio sender.

Never commit `.env.local` or Twilio credentials.

## Production
```bash
npm run build
npm start
```

For Vercel, add the same environment variables under Project Settings -> Environment Variables.
