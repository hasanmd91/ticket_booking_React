import React, {Component} from 'react';
import FaqData from 'react-faq-component';
import "./Faq.css";

function FAQ() {
  
  const data1 = {
   "title":"",
   rows: [
   {
    title: 'Is the service disable friendly?',
    content:
      `Himalayan Travels is committed to making travel widely accessible, regardless of ability or disability. Please contact our customer service number or customer services point at bus stations`,
          
  
    
   },
   {
    title: 'Compensations?',
    content:"You are eligible to get compensation if your long-distance busses journey was delayed by at least by 60 minutes.The delay caused you extra costs.You or your luggage were damaged during your bus journey.",
    
   
   },

   {
    title: 'Forgot your goods in the vehicle or at the station?',
    content:
      `Lost and found items left on the vehicle or at the station are forwaded to the Lost and Found Center. 

      You can ask the operator directly about lost items on replacement buses. You can find out the operator by contacting our customer service on 012 345 6789 (€2/answered call + date/mpm) .`,
          
  
    
   },
  ],
  };
  
return (
  <div>
    <h2 className="section-title">Frequently Asked Questions</h2>
    <div className="faq-wrapper">
      <FaqData data={data1} styles={{
        rowTitleColor: "rgb(255, 106, 0)",
    }}/>
    </div>
   </div>
  );
  }


  export default FAQ;