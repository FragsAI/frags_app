import React from "react";
import Icons from "../icons";

const Home: React.FC = () => {
  return (
    <>
<<<<<<< HEAD
        <div className="flex mt-40 w-full self-center flex-col text-white items-center gap-[80px] mx-3">
            <div className="flex-1 flex flex-col text-center content-center gap-3">
                <div className="flex-1 flex self-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    <div className="text-[#FDFDFD]">Create viral-ready clips</div>
                    <div className="whitespace-pre text-[#797979]"> 10x faster</div>
=======
        {/* <div className="swirl-container">
            <div className="move-swirl">
                <img src="../assets/Swirl.png"/>
            </div>
        </div> */}

        <div className="home-content">
            <div className="hometextcontainer">
                <div className="move-hometext">
                    <h1 className="hometext-first">Create viral-ready clips 10x faster</h1>
                    {/* <h1 className="hometext-second">10x faster</h1> */}
>>>>>>> 69690fbdb8926058863483f3ca15b6037280c295
                </div>
                <div className="text-[#FFFFFF] text-xs md:text-base lg:text-lg">Frags turns long videos into shorts, making content easy, saving you time, and grows your presence</div>
            </div>
<<<<<<< HEAD
            <div className="flex-1 flex gap-[16px] items-center">
                <div className="bg-[#51515166] flex gap-16 py-1 px-2 rounded-full items-center">
                    <div className="flex gap-2 px-3">
                        <Icons.Link />
                        <div className="text-sm md:text-base lg:text-lg text-nowrap">Drop a video link</div>                        
=======

            <div className="bar">
                <div className='move-bar'>
                    <div className="innerbar">
                        <div className="innerbar-input">
                            <img className="bartext" src="../assets/bartext.png" alt="Bar Text" />
                            <div className="button-group">
                                <div id="createShorts" className="createshorts">Create free clips</div>
                                <div className="uploadvideo">Upload Video</div>
                            </div>
                        </div>
>>>>>>> 69690fbdb8926058863483f3ca15b6037280c295
                    </div>
                    <button className="bg-[#515151] w-2/3 py-3 px-3 rounded-full hover:bg-[#6B6B6B] transition duration-300 text-md">Create shorts</button>
                </div>
                <button>Upload</button>
            </div>
            <div className="w-3/5 h-[600px] bg-[#515151] rounded-lg">

            </div>
        </div> 

    </>
  )
}

export default Home;