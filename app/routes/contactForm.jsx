import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Form } from '@remix-run/react';

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();

    emailjs
      .sendForm('service_7wyqpbh', 'template_v544s6d', form.current, {
        publicKey: 'z5iMV1niVhhOE2uLo',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          console.log('message sent');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="h-screen bg-[url('https://www.greensgroup.co.uk/img/green-pets-main-image2.jpg')] bg-cover bg-center flex items-center justify-center">
      <div className="max-w-md bg-white bg-opacity-90 shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold mb-4">We Care About You</h1>
        <p className="text-lg mb-4">
          Please feel free to send us a message. Your feedback is important to us!
        </p>
        <Form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="user_name" className="text-sm font-semibold">
              Name:
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              required
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="user_email" className="text-sm font-semibold">
              Email:
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              required
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-semibold">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Send
          </button>
        </Form>
      </div>
    </div>
  );
}

export default ContactForm;
