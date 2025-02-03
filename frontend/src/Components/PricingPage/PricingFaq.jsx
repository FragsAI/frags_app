import React, { useState } from 'react';
import '../../Styles/LandingPageStyles/faq.css'; 

const PricingFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Can I cancel my plan?",
      answer: "",
    },
    {
      question: "Can I change my plan after I subscribe?",  
      answer: "",
    },
    {
      question: "Do you have a refund policy?", 
      answer: "",
    }, 
    {
      question: "Can I monetize videos created with Frags?", 
      answer: "",
    }, 
    {
      question: "Can I generate in other languages?", 
      answer: "",
    }, 
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Asked Questions</h1>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleAnswer(index)}
            >
              {item.question}
              <span
              className={`faq-icon ${activeIndex === index ? 'rotate' : ''}`}
            >
              &gt; {/* ">" symbol */}
            </span>
            </div>
            <div
              className={`faq-answer ${
                activeIndex === index ? "open" : ""
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingFaq;
