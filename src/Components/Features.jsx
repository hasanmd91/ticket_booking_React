import React from "react";

function Features() {
  return (
    <div className="w-[700px] mx-auto my-[50px]">
      <h2 className="text-3xl text-center mb-8">Features</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="w-[300px] bg-sky-400 text-white border rounded-md p-4 justify-self-center shadow-lg">
          <i className="material-icons text-[40px]">schedule</i>
          <p className="text-xl mb-4">Punctual</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            ipsam quo earum in tenetur aliquid, fugiat consequuntur vitae
            exercitationem debitis? Nobis magni laboriosam aspernatur minima.
          </p>
        </div>
        <div className="w-[300px] bg-sky-400 text-white border rounded-md p-4 justify-self-center shadow-lg">
          <i className="material-icons text-[40px]">security</i>
          <p className="text-xl mb-4">Safe</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            ipsam quo earum in tenetur aliquid, fugiat consequuntur vitae
            exercitationem debitis? Nobis magni laboriosam aspernatur minima.
          </p>
        </div>

        <div className="w-[300px] bg-sky-400 text-white border rounded-md p-4 justify-self-center shadow-lg">
          <i className="material-icons text-[40px]">wifi</i>
          <p className="text-xl mb-4">Facilities</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            ipsam quo earum in tenetur aliquid, fugiat consequuntur vitae
            exercitationem debitis? Nobis magni laboriosam aspernatur minima.
          </p>
        </div>

        <div className="w-[300px] bg-sky-400 text-white border rounded-md p-4 justify-self-center shadow-lg">
          <i className="material-icons text-[40px]">support_agent</i>
          <p className="text-xl mb-4">24/7 Customer Service</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            ipsam quo earum in tenetur aliquid, fugiat consequuntur vitae
            exercitationem debitis? Nobis magni laboriosam aspernatur minima.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
