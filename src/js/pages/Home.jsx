import React from "react";
import Navbar from "../component/Navbar.jsx";
import Jumbotron from "../component/Jumbotron.jsx";
import Card from "../component/Card.jsx";
import Footer from "../component/Footer.jsx";

function Home(){
    return(
        <>
            <Navbar />
            <div className="container">
                <Jumbotron />
                <div className="row">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;