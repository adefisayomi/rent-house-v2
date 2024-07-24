import React from 'react';

const Letter = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md">
      <div className="border-b-4 border-blue-500 pb-4 mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-blue-700">BORCELLE</h1>
            <p className="text-lg text-blue-700">REAL ESTATE</p>
          </div>
          <div>
            <img src="logo.png" alt="Borcelle Logo" className="h-16" />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-right">20 July 2024</p>
      </div>

      <div className="mb-8">
        <p className="font-bold">Dear Matt Zhang,</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold">Request for Funding to Build New Cluster Housing</h2>
        <p>Dear Sir/Madam,</p>
        <p>
          I am the Head of Borcelle Real Estate, and I am writing to request funding for the construction of a new cluster housing. As per our recent meeting, I would like to extend an invitation to become a sponsor of our latest project. We require a total of $200,000,000 (two hundred million US dollars) to complete the project.
        </p>
        <p>
          Please consider our proposal and take action as soon as possible. If you have any questions or require additional information, please do not hesitate to contact us. We look forward to hearing from you soon. Thank you for your time and consideration.
        </p>
        <p>Sincerely,</p>
      </div>

      <div className="mb-8">
        <p className="font-bold">Jamie Chastain</p>
        <p>President of Borcelle</p>
      </div>

      <div className="border-t-4 border-blue-500 pt-4 mt-8">
        <div className="flex justify-between items-center">
          <div>
            <p>+123-456-7890</p>
            <p>+123-456-7890</p>
          </div>
          <div>
            <p>www.reallygreatsite.com</p>
            <p>hello@reallygreatsite.com</p>
          </div>
          <div>
            <p>123 Anywhere St., Any City, ST 12345</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Letter;
