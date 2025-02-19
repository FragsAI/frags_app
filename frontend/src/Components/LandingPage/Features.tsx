import React from 'react';

const Features: React.FC = () => {
  return (
    <>
      {/* Entire Features Section with Tailwind */}
      <div className="mt-[330px] md:mt-[150px] space-y-16">
        {/* Row One */}
        <div className="flex flex-row justify-center items-center w-full max-w-[1400px] p-5 gap-16 lg:gap-12 md:gap-10 sm:gap-8 mx-auto mt-[150px] md:mt-[-100px]">
          <div className="flex flex-col gap-4 items-start">
            <img id="textOneA" src="./assets/textOne.png" alt="Text One" className="w-[300px] md:w-[350px] sm:w-[200px] object-cover" />
          </div>
          <div className="flex justify-center items-center relative w-[280px] md:w-[240px] sm:w-[200px]">
            <img src="./assets/RecOne.png" alt="Rectangle One" className="object-cover w-full max-h-[300px] rounded-lg" />
          </div>
        </div>

        {/* Row Two (Switched) */}
        <div id="moveRowTwo" className="flex flex-row justify-center items-center w-full max-w-[1400px] p-5 gap-16 mx-auto">
          <div id="rowTwoText" className="flex flex-col gap-4 items-start order-2">
            <img id="textTwoA" src="./assets/textTwo.png" alt="Text Two" className="w-[300px] md:w-[350px] sm:w-[200px] object-cover" />
          </div>
          <div id="rowTwoImg" className="flex justify-center items-center w-[280px] md:w-[240px] sm:w-[200px]">
            <img id="rowTwoImage" src="./assets/RecTwo.png" alt="Rectangle Two" className="object-cover w-full max-h-[300px] rounded-lg" />
          </div>
        </div>

        {/* Row Three */}
        <div className="flex flex-row justify-center items-center w-full max-w-[1400px] p-5 gap-16 mx-auto">
          <div className="flex flex-col gap-4 items-start">
            <img id="textThreeA" src="./assets/textThree.png" alt="Text Three" className="w-[300px] md:w-[350px] sm:w-[200px] object-cover" />
          </div>
          <div className="flex justify-center items-center relative w-[280px] md:w-[240px] sm:w-[200px]">
            <img id="rowThreeImage" src="./assets/RecThree.png" alt="Rectangle Three" className="object-cover w-full max-h-[300px] rounded-lg" />
          </div>
        </div>
      </div>

      {/* Join Community Section */}
      <div className="flex flex-col items-center justify-center space-y-10 mt-[150px] mb-[150px]">
        <img src="./assets/joinCommunityText.png" alt="Join Community" className="w-[600px] md:w-[660px] sm:w-[400px] object-contain" />
        <img src="./assets/stats.png" alt="Stats" className="w-[600px] md:w-[550px] sm:w-[400px] object-contain" />
      </div>
    </>
  );
};

export default Features;
