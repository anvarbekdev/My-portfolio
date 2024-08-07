import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef("");

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
    .sendForm(
      "service_t2wkjio",
      "template_v3rpayp",
      form.current,
      "DvQ85ZzxolswIHJyp"
      )
      .then(
        (result) => {
          toast.success('Message sent. Thanks😊')
        },
        (error) => {
          toast.error('Message not sent')
        }
      );

    e.target.reset();
  };

  return (
    <section className="box-color dark:bg-gray-900">
      <ToastContainer/>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center  dark:text-white">
          Contact Us
        </h2>
        <p id="contact" className="mb-8 lg:mb-16 font-light text-center text-gray-300  dark:text-gray-400 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form ref={form} onSubmit={sendEmail} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block font-secondary mb-2  font-medium "
            >
              Your name
            </label>
            <input
              type="text"
              name="from_name"
              id="email"
              className="shadow-sm  border bg-slate-200 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="from_email"
              className="block mb-2 font-secondary  font-medium "
            >
              Your Email
            </label>
            <input
              type="text"
              id="from_email"
              name="from_email"
              className="block p-3 w-full  text-gray-900 bg-slate-200 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Email"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 font-secondary  font-medium "
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              name="message"
              className="block p-2.5 w-full  text-gray-900 bg-slate-200 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 hover:border-green-300 hover:border-2 border font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
