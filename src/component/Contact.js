import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  //const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    // setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "96c5318e-66b4-4b02-a123-42f0104e182b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      //setResult("Form Submitted Successfully");
      event.target.reset();
      alert("Message sent succesful");
    } else {
      console.log("Error", data);
      //setResult(data.message);
    }
  };

  return (
    <div id="contact">
      <h1 className="text-slate-50 font-bold text-3xl  flex justify-center">
        Get in touch
      </h1>
      <div className="w-60 mt-4 rounded-2xl bg-pink-600 h-3 flex justify-center m-auto mb-12"></div>
      <div className="flex mx-40 justify-center max-[700px]:block max-[700px]:items-center max-[700px]:m-20px  contact">
        <div className=" m-4 ">
          <h1 className="font-bold text-5xl from-purple-800 via-pink-500 to-yellow-500 bg-gradient-to-r bg-clip-text text-transparent m-4">
            Let's talk
          </h1>
          <p className="text-white max-w-[550px] text-xl m-4 ">
            I'm currently available to take on new project, so feel free to send
            me a message about anything that you want me to work on, you can
            contact any time
          </p>
          <div className="m-4 ">
            <div className="text-white mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-3 " />
              debasishrana2002@gmail.com
            </div>
            <div className="text-white mb-2">
              <FontAwesomeIcon icon={faPhone} className="mr-3" />
              6295993505
            </div>
            <div className="text-white mb-2">
              <FontAwesomeIcon icon={faLocationDot} className="mr-3" />
              Kolkata,India
            </div>
          </div>
        </div>
        <div>
          <form onSubmit={onSubmit} className="flex flex-col items-start  m-4">
            <label htmlFor="" className="text-white mb-4">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className="w-96 h-10 bg-gray-800 p-2 mb-2 outline-none text-white"
            />
            <label htmlFor="" className="text-white mb-4">
              Your Email
            </label>
            <input
              type="text"
              placeholder="Enter your Email"
              name="email"
              className="w-96 h-10 bg-gray-800 p-2 mb-2 outline-none text-white"
            />
            <label htmlFor="" className="text-white mb-2">
              Type your message here
            </label>
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="8"
              id=""
              className="w-96 bg-gray-800 outline-none p-2 text-white max-[950px]: w-70px"
            ></textarea>
            <button className="text-white bg-gradient-to-r from-purple-800  via-pink-500 to-yellow-400 items-center m-auto mt-4 p-2 w-24 rounded-xl transition-transform duration-500 hover:scale-125">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
