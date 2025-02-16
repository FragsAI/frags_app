import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Styles/LandingPageStyles/testimonials.css"; 

const imageUrls: string[] = [
  "../../assets/Base.png",
  "../../assets/Base (1).png",
  "../../assets/Base (1).png",
"../../assets/Base (1).png",
  "../../assets/Base.png",
  "../../assets/Base (1).png",
  "../../assets/Base.png",
  "../../assets/Base (1).png",
  "../../assets/Base (1).png",
"../../assets/Base (1).png",
  "../../assets/Base.png",
  "../../assets/Base (1).png",
];

const Testimonials: React.FC = () => {
  return (
    // <div className="testimonials">
    //   <h2 className="testimonials-header">See why so many creators <span className="orangegradiant">love Frags</span></h2>
    //   <div className="testimonials-container">
    //     {Array.from({ length: 4 }).map((_, colIndex) => (
    //       <div key={colIndex} className="testimonial-column">
    //         {imageUrls.slice(colIndex * 3, colIndex * 3 + 3).map((url, imgIndex) => (
    //           <div key={imgIndex} className="testimonial-image-wrapper">
    //             <img src={url} alt={`Testimonial ${colIndex}-${imgIndex}`} className="testimonial-image" />
    //           </div>
    //         ))}
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div></div>
  );
};

export default Testimonials;