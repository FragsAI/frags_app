import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  return (
    <div className="w-[1000px] pt-10 flex flex-col items-center text-center py-16 px-6">
      {/* Large Header */}
      <h1 className="text-4xl mb-10 font-bold text-white mb-8">Got Questions?</h1>

      {/* Accordion Section */}
      <Accordion type="single" collapsible className="w-full  max-w-lg border-none">
        
        {/* Question 1 */}
        <AccordionItem value="item-1" className="border-b  border-gray-700 min-h-[60px]">
          <AccordionTrigger className="text-white text-lg py-4">Can I cancel my plan?</AccordionTrigger>
          <AccordionContent className="text-gray-400">
            Yes, you can cancel your plan anytime before the next billing cycle.
          </AccordionContent>
        </AccordionItem>

        {/* Question 2 */}
        <AccordionItem value="item-2" className="border-b border-gray-700 min-h-[60px]">
          <AccordionTrigger className="text-white text-lg py-4">Can I change my plan after I subscribe?</AccordionTrigger>
          <AccordionContent className="text-gray-400">
            Yes, you can upgrade or downgrade your plan at any time from your account settings.
          </AccordionContent>
        </AccordionItem>

        {/* Question 3 */}
        <AccordionItem value="item-3" className="border-b border-gray-700 min-h-[60px]">
          <AccordionTrigger className="text-white text-lg py-4">Do you have a refund policy?</AccordionTrigger>
          <AccordionContent className="text-gray-400">
            We offer a 7-day refund policy for new subscriptions.
          </AccordionContent>
        </AccordionItem>

        {/* Question 4 */}
        <AccordionItem value="item-4" className="border-b border-gray-700 min-h-[60px]">
          <AccordionTrigger className="text-white text-lg py-4">Can I monetize videos created with Frags?</AccordionTrigger>
          <AccordionContent className="text-gray-400">
            Yes! You can monetize all videos created using Frags across platforms.
          </AccordionContent>
        </AccordionItem>

        {/* Question 5 */}
        <AccordionItem value="item-5" className="border-b border-gray-700 min-h-[60px]">
          <AccordionTrigger className="text-white text-lg py-4">Can I generate in other languages?</AccordionTrigger>
          <AccordionContent className="text-gray-400">
            Yes! We support multiple languages for video generation.
          </AccordionContent>
        </AccordionItem>

        {/* Question 6 */}
        <AccordionItem value="item-6" className="min-h-[60px]">
          <AccordionTrigger className="text-white text-lg py-4">More Questions</AccordionTrigger>
          <AccordionContent className="text-gray-400">
            Reach out to our support team for additional inquiries.
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </div>
  );
};

export default FAQSection;
