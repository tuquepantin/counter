import React from "react";
import Navbar from "../component/Navbar.jsx";
import Jumbotron from "../component/Jumbotron.jsx";
import Card from "../component/Card.jsx";

function Home(){
    return(
        <>
            <Navbar />
            <div className="container">
                <Jumbotron />
                <Card />
                

            </div>
            
        </>
    )
}

export default Home;