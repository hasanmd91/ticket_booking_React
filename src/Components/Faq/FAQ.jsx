import React, {Component} from 'react';
import FaqData from 'react-faq-component';


function FAQ() {
  
  const data1 = {
   "title":"",
   rows: [
   {
    title: 'Is the service disable friendly?',
    content:
      `Himalayan Travels is committed to making travel widely accessible, regardless of ability or disability.`,
          
  
    
   },
   {
    title: 'Compensations?',
    content:"You can apply for compensation using this form in the following cases:Your long-distance train journey was delayed by at least 60 minutes.You have a commuter season ticket and the commuter trains are significantly late.The delay caused you extra costs.You or your luggage were damaged during your train journey.",
    
   
   },
  ],
  };
  
return (
  <div>
    <h2 className="section-title">Frequently Asked Questions</h2>
    <div className="faq-wrapper">
      <FaqData data={data1} />
    </div>
   </div>
  );
  }


  export default FAQ;
