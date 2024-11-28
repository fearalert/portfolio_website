import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const encode = (data) => 
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email address.");
      return;
    }

    setLoading(true);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      });
      alert("Message sent!");
      setFormData({ name: "", email: "", message: "" });
      setError("");
    } catch (error) {
      alert("Error sending message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const InputField = ({ id, label, type = "text" }) => (
    <div className="relative mb-4">
      <label htmlFor={id} className="leading-7 text-sm text-white-gray">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="w-full bg-button-gray rounded border border-button-gray focus:border-dodger-blue focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        value={formData[id]}
        onChange={handleChange}
      />
    </div>
  );

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-button-gray rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDQyJzEyLjkiTiA4NcKwMjInMzUuOCJF!5e0!3m2!1sen!2snp!4v1709369345440!5m2!1sen!2snp"
          />
          <div className="bg-button-gray relative flex flex-wrap py-6 px-16 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">Kathmandu, Nepal</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                href="mailto:dhakalrohan229@gmail.com"
                className="text-white tracking-widest leading-relaxed"
              >
                dhakalrohan229@email.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+977 9816933888</p>
            </div>
          </div>
        </div>
        <form
          data-netlify="true"
          netlify-honeypot="bot-field"
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <input type="hidden" name="form-name" value="contact" />
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5">
            You can get in touch with me from here.
          </p>
          {error && <p className="text-red">{error}</p>}
          <InputField id="name" label="Name" />
          <InputField id="email" label="Email" type="email" />
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-white-gray">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-button-gray rounded border border-button-gray focus:border-dodger-blue focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className={`text-white ${!loading ? 'bg-dodger-blue' : 'bg-button-gray'} hover:bg-opacity-50 border-0 py-2 px-6 focus:outline-none rounded-full text-lg`}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}
