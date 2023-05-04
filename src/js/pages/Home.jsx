import React, { useEffect, useState } from "react";



function Home(){
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        let setIntervalId = setInterval(() => {
            setCounter(counter + 1)
        }, 1000)
        
        return () => {
            clearInterval(setIntervalId)
        }

    }, [counter])

    return (
        <>
            <div className="container">
                <div className="d-flex">
                    <h1 className="w-25">{Math.floor(counter / 100000) % 10 }</h1>
                    <h1 className="w-25">{Math.floor(counter / 10000) % 10 }</h1>
                    <h1 className="w-25">{Math.floor(counter / 1000) % 10 }</h1>
                    <h1 className="w-25">{Math.floor(counter / 100) % 10 }</h1>
                    <h1 className="w-25">{Math.floor(counter / 10) % 10}</h1>
                    <h1 className="w-25">{Math.floor(counter / 1) % 10}</h1>
                </div>
            </div>
        </>
    );
};

export default Home;