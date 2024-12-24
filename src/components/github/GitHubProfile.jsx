import React, { useEffect, useState } from 'react';
import { User2,Loader2, Lock, RefreshCcw,Mail,Linkedin } from "lucide-react";
import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom';

const GitHubProfile = () => {
    const [profileData, setProfileData] = useState(null);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const username = process.env.USER_NAME;
    const token = process.env.GITHUB_TOKEN;

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/');
    };

    useEffect(() => {
        const fetchProfileAndRepos = async () => {
            try {
                const headers = {
                    Authorization: `Bearer ${token}`,
                };

                // Fetch user profile
                const profileResponse = await fetch(`https://api.github.com/users/${username}`, { headers });
                if (!profileResponse.ok) {
                    throw new Error('User not found');
                }
                const profileData = await profileResponse.json();
                setProfileData(profileData);

                // Fetch user repositories
                const reposResponse = await fetch(
                    `https://api.github.com/users/${username}/repos?per_page=100`,
                    { headers }
                );
                if (!reposResponse.ok) {
                    throw new Error('Repositories not found');
                }
                const reposData = await reposResponse.json();
                setRepos(reposData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProfileAndRepos();
    }, [username, token]);

    if (loading) {
        return (
            <div className="text-center text-white text-xl">
                <div className='flex justify-center items-center h-screen w-screen'>
               <Loader2 className='text-[#ffff] animate-spin' />
               <p className='text-md font-thin'>Loading...</p>
               </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-white text-xl">
                <div className='flex justify-center items-center h-screen gap-1 w-screen'>
               <User2 className='text-[#ffff] animate-bounce' />
               <p className='text-md font-thin animate-bounce'>{error}...</p>
               </div>
            </div>
        );
    }
    return (
        <div className="flex  items-center justify-center h-screen w-screen p-2">
            <div
            
                className="flex  bg-gradient-to-r from-gray-800 to-gray-600 overflow-auto  flex-col bg-[#3c3c3c] bg-opacity-100  border-[#828282] shadow-black rounded-[10px] mb-20 md:h-[80%] md:w-[90%] lg:w-[80%] 2xl:w-[60%] h-[80%] w-[100%]"
                style={{ boxShadow: "1px 10px 90px 10px rgba(255, 255, 255,0.1)",scrollbarWidth: 'none', 
                    msOverflowStyle: 'none',  }}
            >
                <div className="bg-[rgb(40,39,39)] h-10 rounded-tl-[10px] flex items-center justify-evenly pl-5 rounded-tr-[10px] w-full">
                    <div className="flex md:ml-[-32%] sm:ml-[-20%] ml-[-20%] relative items-center justify-center gap-2">
                        <div className="h-3 w-3 rounded-[100%] bg-[#ff0000] cursor-pointer" onClick={handleButtonClick}></div>
                        <div className="h-3 w-3 rounded-[100%] bg-[#ffcc00]"></div>
                        <div className="h-3 w-3 rounded-[100%] bg-[#00ff00]"></div>
                    </div>
                    <div className="flex flex-row bg-[#3c3c3c] bg-opacity-100 items-center justify-center  border-[#828282] shadow-black rounded-[8px] md:h-[70%] sm:w-[30%] md:w-[34%] lg:w-[30%] xl:w-[18%] h-[70%] w-[50%]">
                        <div className="inset-y-0 flex-row  justify-evenly h-full w-full left-0 pl-3 flex items-center pointer-events-none">
                            <div className="flex relative flex-row items-center gap-2">
                                <Lock
                                    className="size-4 text-[#828282] hover:text-gray-300 transition-colors duration-300"
                                    style={{
                                        filter: "drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.3))",
                                    }}
                                />
                                <p className="text-gray-300 text-sm sm:text-sm md:text-sm font-medium text-[10px] text-center">
                                    www.github.com
                                </p>
                            </div>

                            <button
                                aria-label="Reload"
                                className="relative inline-flex items-center  justify-center w-10 h-10 rounded-full text-[#828282] shadow-md hover:scale-105 transform transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            >
                                <RefreshCcw
                                    className="w-5 h-4 md:w-6 md:h-5 animate-spin"
                                />
                                <span className="sr-only">Reload</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-2 p-4 xl:gap-8 justify-center '>
                <div className='flex flex-row items-center justify-center'>
                    <div className="text-center mb-6 items-start justify-start mt-4  gap-1 flex flex-col">
                        <div className='flex md:flex-col justify-center items-start gap-3'>
                        <img
                            src={profileData.avatar_url}
                            alt="Avatar"
                            className="w-28 h-28 xl:w-64 xl:h-64 rounded-full  border-4 border-indigo-500 transform transition-all hover:scale-110 hover:border-[#19ffe483]"
                        />
                        <div className='flex flex-col items-start justify-start'>
                            <p className='text-md'>Ajay_singh</p>
                            <p className=' font-thin'>Ajju0211</p></div>
                            </div>
                        <p
                            className="text-lg text-gray-300 italic mt-2 w-full max-w-[30ch] mx-auto break-words font-[offside] leading-relaxed text-start"
                        >
                            {profileData.bio || 'No bio available'}
                        </p>
                        <a href='https://github.com/Ajju0211' className='font-sans flex items-center justify-center h-[40px] bg-[#383c43] border-[#666f79] border-[1px] rounded-[7px] mt-4 w-full '><p className='text-[20px] font-[offside] cursor-pointer'>View Profile</p></a>
                        <div className='flex items-center justify-center gap-3'><Mail className='text-[#959595]'/><p className='text-[#cdcaca] text-[18px]'>ajaywork0211@gmail.com</p></div>
                        <div className='flex items-center justify-center gap-3'><Linkedin className='text-[#959595]'/><p className='text-[#cdcaca] text-[18px]'>in/ajay-singh-689143253</p></div>
                    </div>
                </div>
                <div className=' flex flex-col justify-center items-center lg:justify-start lg:items-start lg:mt-10 h-full'>
                    <div className='flex flex-col justify-start items-start'>
                    <h4 className="text-2xl font-semibold text- mb-6">
                        Repositories
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 :grid-cols-3 gap-2">
                        {repos.length ? (
                            repos.map((repo) => (
                                <div
                                    key={repo.id}
                                    className="bg-gray-800 flex flex-col justify-evenly lg:h-40 items-start  bg-opacity-25 h-[100%] w-full p-4 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105"
                                >
                                    <h5 className="text-xl font-semibold text-[#fff]">{repo.name}</h5>
                                    <p className='text-sm text-gray-300 mt-2 max-w-xs text-start line-clamp-2'>{repo.description}</p>
                                    <button
                                        className="mt-4 inline-block px-4 py-2 text-sm bg-[#75749f] text-white rounded-md hover:bg-indigo-400 transition-all"
                                        onClick={() => window.open(repo.html_url, '_blank')}
                                    >
                                        View Repository
                                    </button>
                                </div>
                            ))
                        ) : (
                            <div className="text-center text-gray-400">No repositories found</div>
                        )}
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default GitHubProfile;
