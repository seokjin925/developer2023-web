import React from 'react';
import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import MainContainer from "../components/MainContainer";
import Project from "../components/Project";
import About from "../components/About";
import Team from "../components/Team";
import StackUpPage from "../components/StackUpPage";

const MainPage = () => {
    return (
        <div>
            <Header />
            <MainBanner />
            <MainContainer>
                <About />
                <Team />
                <Project />
                <StackUpPage/>
            </MainContainer>

        </div>
    );
};


export default MainPage;