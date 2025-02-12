import React, { useState } from 'react';
import '../../Styles/LandingPageStyles/faq.css'; 

interface FaqItem {
  question: string,
  answer: string
}

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FaqItem[] = [
    {
      question: "Is Frags free to use?",
      answer: "You bet your shorts! New users can enjoy Frags Shorts maker for free with a &-day trial on the Pro Plan, Providing 90 minutes of video processing time. No Credit card is required. After the trial, you can continue using our free plan with 60 minutes of processing time monthly.",
    },
    {
      question: "What makes Frags short clip maker unique?",  
      answer: "",
    },
    {
      question: "Can I customize my shorts with Frags?", 
      answer: "",
    }, 
    {
      question: "How does Frags support creator platforms?", 
      answer: "",
    }, 
    {
      question: "What happens to my clips after the Frags free trial?", 
      answer: "",
    }, 
    {
      question: "Can Frags handle multiple video formats?", 
      answer: "",
    }, 
    {  
      question: "Is there a limit to the number of shorts I can create with Frags?", 
      answer: "",
    }, 
    {
      question: "Does Frags offer support for beginners?", 
      answer: "",
    }, 
  ];

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Ask Away...</h1>
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

export default Faq;
