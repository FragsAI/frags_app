import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Styles/LandingPageStyles/testimonials.css"; 

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    customPaging: () => <div className="custom-dot"></div>,
    appendDots: (dots) => (
      <div style={{ bottom: "20px" }}>
        <ul style={{ margin: "0px", padding: "0px" }}>{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
        },
      },
    ],
  };

  const quotes = [
    { text: "“Had a Frag'n time truly recommend!”", author: "John Doe" },
    { text: "“Excellent service and amazing support team!”", author: "Jane Smith" },
    { text: "“I couldn’t be happier with my experience!”", author: "Alex Johnson" },
  ];

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">
        <span className="graygradiant">See why so many creators</span> <span className="orangegradiant">love Frags</span>
      </h2>
      <div className="testimonials-slider">
        <Slider {...settings}>
          {quotes.map((quote, index) => (
            <div key={index} className="testimonial-quote">
              <p className="graygradiant">{quote.text}</p>
              <p className="graygradiant author">{quote.author}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
