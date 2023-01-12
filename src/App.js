import React from "react";
import ReactDom from "react-dom/client";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Body from "./components/Body";

const AppLayout = ()=>{
    return(
        <>
        <Nav/>
        <Body/>
        <Footer/>
        </>
    );
}




const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);