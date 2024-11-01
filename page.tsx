
import Link from "next/link";
import React from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
// import cssStyle from "./components/footer.module.css";
// import cssStyle from "./components/header.module.css";
// console.log(cssStyle,"CSS-Style");
// console.log(cssStyleF);
const Navbar =()=>{
    return(
    <body>
    <div  className="bg-red-200">
    <Header></Header>
    <nav className="bg-emerald-400" >
    <Link href="/about">  <button className="p-2 w-[100px] bg-neutral-200 m-1 border-black border-2 rounded-md">About</button></Link> 
    <Link href="/Contact"><button className="p-2 w-[100px] bg-neutral-200 m-1 border-black border-2 rounded-md">Contact</button></Link>
    <Link href="/Service"><button className="p-2 w-[100px] bg-neutral-200 m-1 border-black border-2 rounded-md">Services</button></Link>
    </nav>
        <Hero></Hero>
        <Footer></Footer>
        </div>
    </body>
    );
}
export default Navbar;
