import React from "react";
import './app.scss';
import Header from "../shared/header/header";
import MainBackground from "../shared/mainBackground/mainBackground";
import Footer from "../shared/footer/footer";
import Contents from "../shared/contents/contents";
import CoronaInfo from "../shared/corona-info/corona-info";
import HomeQuote from "./components/home-quote/home-quote";
import HomeInfo from "./components/home-info/home-info";



const App = () => {
    return <div className="main">
        <MainBackground>
            <Header/>
            <Contents>
                <CoronaInfo/>
                <HomeQuote/>
                <HomeInfo/>
            </Contents>
            <Footer/>
        </MainBackground>
    </div>;
};

export default App;

