import React from "react";
import "./App.css"
import Projects from "./components/Projects";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
    return (
        <>
        <div className="App">
            <Home/>
            <Projects/>
        </div>
            <Footer/>
        </>
    )
}

export default App;