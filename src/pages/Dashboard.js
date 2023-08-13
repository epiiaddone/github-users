import React from "react";
import Info from "../components/Info";
import Navbar from "../components/Navbar";
import Repos from "../components/Repos";
import Search from "../components/Search";
import User from "../components/User";
import { AppContext } from "../context/context";
import loadingImage from "../images/preloader.gif";


const Dashboard = ()=>{
    const {isLoading} = React.useContext(AppContext);

    if(isLoading){
        return(
            <main>
                <Navbar/>
                <Search/>
                <img src={loadingImage} className="loading-img" alt="loading"/>
            </main>
        )
    }
    return(
        <main>
            {/*<Navbar/> */}
            <Search/>
            <Info/>
            <User/>
            <Repos/>
        </main>
    )

}

export default Dashboard;