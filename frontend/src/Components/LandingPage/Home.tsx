import React from "react";
import Icons from "../icons";

const Home: React.FC = () => {
  return (
    <>
        <div className="flex mt-40 w-full self-center flex-col text-white items-center gap-[80px] mx-3">
            <div className="flex-1 flex flex-col text-center content-center gap-3">
                <div className="flex-1 flex self-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    <div className="text-[#FDFDFD]">Create viral-ready clips</div>
                    <div className="whitespace-pre text-[#797979]"> 10x faster</div>
                </div>
                <div className="text-[#FFFFFF] text-xs md:text-base lg:text-lg">Frags turns long videos into shorts, making content easy, saving you time, and grows your presence</div>
            </div>
            <div className="flex-1 flex gap-[16px] items-center">
                <div className="bg-[#51515166] flex gap-16 py-1 px-2 rounded-full items-center">
                    <div className="flex gap-2 px-3">
                        <Icons.Link />
                        <div className="text-sm md:text-base lg:text-lg text-nowrap">Drop a video link</div>                        
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