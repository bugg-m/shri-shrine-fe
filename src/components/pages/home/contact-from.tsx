'use client';

import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { Image } from '@bugg-m/bugg-ui';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    groupSize: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const destinations = [
    'Mathura-Vrindavan',
    'Varanasi (Kashi)',
    'Tirupati Balaji',
    'Shirdi Sai Baba',
    'Haridwar-Rishikesh',
    'Char Dham Yatra',
    'Amarnath Yatra',
    'Vaishno Devi',
    'Other Destination',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert(
      'Thank you! We will contact you within 24 hours for your spiritual journey planning.'
    );
    setFormData({
      name: '',
      email: '',
      phone: '',
      destination: '',
      travelDate: '',
      groupSize: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h2 className="mb-6 text-3xl font-bold text-gray-800">
              Plan Your Sacred Journey
            </h2>
            <p className="mb-8 leading-relaxed text-gray-600">
              Ready to embark on a transformative pilgrimage? Our spiritual
              travel experts are here to craft your perfect divine experience.
              Share your preferences, and we&apos;ll create a personalized
              itinerary just for you.
            </p>

            <div className="flex items-center">{/* <Image /> */}</div>

            <div className="mt-8 rounded-lg border border-primary-100 bg-gradient-to-r from-primary-50 to-amber-50 p-6">
              <h3 className="mb-2 font-semibold text-gray-800">
                Why Choose ShriShrine?
              </h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>✓ Expert local guides with spiritual knowledge</li>
                <li>✓ Comfortable AC transportation</li>
                <li>✓ Temple darshan bookings included</li>
                <li>✓ 24/7 customer support during journey</li>
                <li>✓ Authentic prasadam and sattvic meals</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-xl bg-gray-50 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-primary-500"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-primary-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Preferred Destination *
                  </label>
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select destination</option>
                    {destinations.map((dest) => (
                      <option key={dest} value={dest}>
                        {dest}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Travel Date
                  </label>
                  <input
                    type="date"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Group Size
                </label>
                <select
                  name="groupSize"
                  value={formData.groupSize}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">Select group size</option>
                  <option value="1">Solo Traveler</option>
                  <option value="2">2 People</option>
                  <option value="3-5">3-5 People</option>
                  <option value="6-10">6-10 People</option>
                  <option value="10+">More than 10</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Special Requirements / Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-primary-500"
                  placeholder="Tell us about any special requirements, elderly travelers, dietary preferences, or other details..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center space-x-2 rounded-lg bg-primary-600 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-700 disabled:bg-primary-400"
              >
                {isSubmitting ? (
                  <div className="size-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                ) : (
                  <>
                    <Send className="size-5" />
                    <span>Send Inquiry</span>
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-500">
                We&apos;ll respond within 24 hours with a customized itinerary
                and pricing
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
