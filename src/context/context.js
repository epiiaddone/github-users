import React, { useEffect, useState } from "react";
import axios from "axios";
import mockUser from "./mockData/mockUser";
import mockRepos from "./mockData/mockRepos";
import mockFollowers from "./mockData/mockFollowers";

//forgetting the colon after https is a fun bug to find
const rootUrl = 'https://api.github.com';

const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    const [gitHubUser, setGitHubUser] = useState(mockUser);
    const [repos, setRepos] = useState(mockRepos);
    const [followers, setFollowers] = useState(mockFollowers);
    const [isLoading, setIsLoading] = useState(false);
    const [requests, setRequests] = useState('...');
    const [error, setError] = useState({show:false, msg:''});

     const checkRequests = async ()=>{
        try{
            const response = await axios.get(`${rootUrl}/rate_limit`);
            const remaining = response.data.rate.remaining
           setRequests(remaining);      
           if(remaining===0) setError({show:true, msg:'you have reached your hourly search limit'});
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        checkRequests();
    },[])

    const searchGithubUser = async (searchValue)=>{
        setError({show:false, msg:''});
        setIsLoading(true);
        try{
            const response = await axios(`${rootUrl}/users/${searchValue}`);
            if(response){
                setGitHubUser(response.data);
                const {login, followers_url} = response.data;

                await Promise.allSettled([
                    axios(`${rootUrl}/users/${login}/repos?per_page=100`),
                    axios(`${followers_url}?per_page=100`)
                ]).then(results=>{
                    console.log(results)
                    const [repos, followers] = results;
                    if(repos.status==='fulfilled') setRepos(repos.value.data)
                    if(followers.status==='fulfilled') setFollowers(followers.value.data)
                })
            }
        }catch(error){
            setError({show:true, msg:'user not found'});
        }
        setIsLoading(false);
    }

    return <AppContext.Provider 
            value={{
                gitHubUser,
                repos,
                followers,
                requests,
                error,
                searchGithubUser,
                isLoading
            }}
            >{children}</AppContext.Provider>
}

export {AppContext, AppProvider}