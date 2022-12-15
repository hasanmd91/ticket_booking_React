import React from "react";
import FaqData from "react-faq-component";

function FAQ() {
  const data1 = {
    title: "",
    rows: [
      {
        title: "Is the service disable friendly?",
        content: `Himalayan Travels is committed to making travel widely accessible, regardless of ability or disability. Please contact our customer service number or customer services point at bus stations.`,
      },
      {
        title: "My travel is delayed. Am I entitled to compensation?",
        content:
          "You are eligible to get compensation if your long-distance journey was delayed at least by 60 minutes. We will also compensate any other extra costs due to the travel delay for ex. substitute travel option.",
      },

      {
        title: "I have forgotten my items inside the bus. What should I do?",
        content:
          "In this case, you should inform our 24/7 customer service number 030 1234 XXXX rightaway. Also inform your travel route. The items will be transferred to our Lost and Found Center. You can call them at 020 4567 XXXX and proceed to receive it back.",
      },
    ],
  };

  return (
    <div className="faq max-w-[620px] mx-auto my-[50px]">
      <h2 className="section-title">Frequently Asked Questions</h2>
      <div className="faq-wrapper">
        <FaqData
          data={data1}
          styles={{
            rowTitleColor: "rgb(255, 106, 0)",
          }}
        />
      </div>
    </div>
  );
}

export default FAQ;
