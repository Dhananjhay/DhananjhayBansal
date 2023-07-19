import React from "react";
import "./App.css"
import Home from "./components/Home";
import Footer from "./components/Footer";
import TabForms from "./components/TabForms";

function App() {
    return (
        <div className="app">
            <Home/>
            <TabForms/>
            <Footer/>
        </div>
    )
}

export default App;