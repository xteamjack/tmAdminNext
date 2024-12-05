"use client";

import React, { useState } from "react";

function App() {
  // State for Accordion toggling
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">DigiHire</h1>
          <nav className="space-x-6">
            <a href="#hero" className="hover:text-gray-300">
              Home
            </a>
            <a href="#clients" className="hover:text-gray-300">
              Clients
            </a>
            <a href="sign-in" className="hover:text-gray-300">
              Sign In
            </a>
            <a href="#footer" className="hover:text-gray-300">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="bg-blue-500 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl md:text-6xl font-bold">
            Welcome to DigiHire
          </h2>
          <p className="mt-4 text-lg md:text-xl">
            Experience Transparency, Predictability, and Success in Every Hire.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-100">
            <a href="/dashboard">Get Started</a>
          </button>
        </div>
      </section>

      {/* Clients Accordion */}
      <section id="clients" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-center">Our Clients</h3>
          <div className="space-y-4">
            {/* Accordion Item 1 */}
            <div>
              <button
                className="w-full text-left bg-gray-200 py-3 px-4 rounded-lg focus:outline-none focus:ring"
                onClick={() => toggleAccordion(0)}
              >
                <span className="font-medium">Client 1</span>
              </button>
              {activeAccordion === 0 && (
                <div className="mt-2 p-4 bg-gray-100 rounded-lg">
                  <p>
                    Details about Client 1 and how we helped them achieve
                    success.
                  </p>
                </div>
              )}
            </div>

            {/* Accordion Item 2 */}
            <div>
              <button
                className="w-full text-left bg-gray-200 py-3 px-4 rounded-lg focus:outline-none focus:ring"
                onClick={() => toggleAccordion(1)}
              >
                <span className="font-medium">Client 2</span>
              </button>
              {activeAccordion === 1 && (
                <div className="mt-2 p-4 bg-gray-100 rounded-lg">
                  <p>Details about Client 2 and their success story with us.</p>
                </div>
              )}
            </div>

            {/* Accordion Item 3 */}
            <div>
              <button
                className="w-full text-left bg-gray-200 py-3 px-4 rounded-lg focus:outline-none focus:ring"
                onClick={() => toggleAccordion(2)}
              >
                <span className="font-medium">Client 3</span>
              </button>
              {activeAccordion === 2 && (
                <div className="mt-2 p-4 bg-gray-100 rounded-lg">
                  <p>
                    Details about Client 3 and how we partnered to achieve great
                    results.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-center">
            What Our Clients Say
          </h3>
          <div className="flex flex-wrap -mx-4">
            {/* Testimonial 1 */}
            <div className="w-full md:w-1/3 px-4 mb-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <p className="italic">
                  "This platform revolutionized the way we do business."
                </p>
                <h4 className="mt-4 font-bold">- Jane Doe, CEO</h4>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="w-full md:w-1/3 px-4 mb-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <p className="italic">
                  "Highly recommend to anyone looking for innovative solutions."
                </p>
                <h4 className="mt-4 font-bold">- John Smith, Manager</h4>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="w-full md:w-1/3 px-4 mb-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <p className="italic">
                  "The team is incredibly supportive and professional."
                </p>
                <h4 className="mt-4 font-bold">- Sarah Lee, Entrepreneur</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-gray-800 text-gray-400 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Brand. All rights reserved.</p>
          <nav className="mt-4 space-x-4">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Contact Us
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
