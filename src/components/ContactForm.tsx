import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });
    if (response.ok) {
        console.log('Form submitted successfully');
    } else {
        console.error('Error submitting form');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="space-y-12">
      <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-700">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 px-4 rounded-md hover:bg-red-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Information Section */}
      <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-center text-white mb-6">Our Branches</h3>
        <div className="space-y-4">
          <div className="text-center">
            <p className="text-lg font-semibold text-red-500">MANJALPUR</p>
            <p className="text-gray-300">99785 84763</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-red-500">MANEJA</p>
            <p className="text-gray-300">87580 43853</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-red-500">KALALI ROAD</p>
            <p className="text-gray-300">95129 65413</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-red-500">KHODIYAR NAGAR</p>
            <p className="text-gray-300">93282 09462</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-red-500">WAGHODIA ROAD</p>
            <p className="text-gray-300">95103 85760</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
