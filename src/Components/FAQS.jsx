// import Faq from "react-faq-component";
// import "./Faq.css";

// const CreateFaq = () => {
//   const FaqData = {
//     title: "Frequently Asked Questions",
//     rows: [
//       {
//         title:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, earum?",
//         content:
//           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi error nam accusamus labore quae ipsa dicta saepe qui, totam expedita obcaecati cum necessitatibus quia, nostrum, maxime delectus soluta! Ad pariatur placeat ex quisquam maiores optio. ",
//       },
//       {
//         title:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, earum?",
//         content:
//           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi error nam accusamus labore quae ipsa dicta saepe qui, totam expedita obcaecati cum necessitatibus quia, nostrum, maxime delectus soluta! Ad pariatur placeat ex quisquam maiores optio. ",
//       },
//       {
//         title:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, earum?",
//         content:
//           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi error nam accusamus labore quae ipsa dicta saepe qui, totam expedita obcaecati cum necessitatibus quia, nostrum, maxime delectus soluta! Ad pariatur placeat ex quisquam maiores optio. ",
//       },
//       {
//         title:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, earum?",
//         content:
//           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi error nam accusamus labore quae ipsa dicta saepe qui, totam expedita obcaecati cum necessitatibus quia, nostrum, maxime delectus soluta! Ad pariatur placeat ex quisquam maiores optio. ",
//       },
//     ],
//   };

//   return (
//     <section className="faq-wrapper">
//       <Faq data={FaqData} />
//     </section>
//   );
// };
// export default CreateFaq;

import Faq from "react-faq-component";
import "./Faq.css";

const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: "Lorem ipsum dolor sit amet, consectetur ",
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.",
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content:
        "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc",
    },
    {
      title: "What is the package version",
      content: "v1.0.5",
    },
  ],
};

export default function Faqs() {
  return (
    <div className="App">
      <section className="title-center">
        <Faq data={data} />
      </section>
      <br />
      <br />
      <br />
      <br />
      <section className="center">
        <Faq data={data} />
      </section>
    </div>
  );
}
