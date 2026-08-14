import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"SPM Green Tech & Developers",description:"SPM Green Tech & Developers — projects, locations and site visit enquiries."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}