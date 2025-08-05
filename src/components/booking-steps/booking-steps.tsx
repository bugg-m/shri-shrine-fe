import React, { useState } from 'react';
import {
  Check,
  ChevronLeft,
  ChevronRight,
  User,
  Calendar,
  CreditCard,
  MapPin,
  Phone,
} from 'lucide-react';

const BookingSystem: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    // Step 1: Package Selection
    selectedPackage: {
      name: '3D/2N Mathura Vrindavan Complete Tour',
      price: 7500,
      image: '/images/mathura-vrindavan.jpg',
    },

    // Step 2: Travel Details
    travelDate: '',
    groupSize: 2,
    roomType: 'standard',
    specialRequests: '',

    // Step 3: Traveler Information
    travelers: [{ name: '', email: '', phone: '', age: '', gender: '' }],

    // Step 4: Contact & Preferences
    contactPerson: {
      name: '',
      email: '',
      phone: '',
      address: '',
    },
    emergencyContact: {
      name: '',
      phone: '',
    },

    // Step 5: Payment
    paymentMethod: 'online',
    totalAmount: 0,
  });

  const steps = [
    { id: 1, title: 'Package', icon: MapPin },
    { id: 2, title: 'Travel Details', icon: Calendar },
    { id: 3, title: 'Travelers', icon: User },
    { id: 4, title: 'Contact Info', icon: Phone },
    { id: 5, title: 'Payment', icon: CreditCard },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateBookingData = (field: string, value: any) => {
    setBookingData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addTraveler = () => {
    setBookingData((prev) => ({
      ...prev,
      travelers: [
        ...prev.travelers,
        { name: '', email: '', phone: '', age: '', gender: '' },
      ],
    }));
  };

  const updateTraveler = (index: number, field: string, value: string) => {
    setBookingData((prev) => ({
      ...prev,
      travelers: prev.travelers.map((traveler, i) =>
        i === index ? { ...traveler, [field]: value } : traveler
      ),
    }));
  };

  const calculateTotal = () => {
    const baseAmount =
      bookingData.selectedPackage.price * bookingData.groupSize;
    const gst = baseAmount * 0.05;
    return baseAmount + gst;
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Selected Package
            </h2>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="flex items-center space-x-4">
                <div className="flex size-24 items-center justify-center rounded-lg bg-gray-200">
                  <MapPin className="size-8 text-gray-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">
                    {bookingData.selectedPackage.name}
                  </h3>
                  <p className="text-gray-600">
                    3 Days • 2 Nights • All Meals Included
                  </p>
                  <p className="text-2xl font-bold text-orange-600">
                    ₹{bookingData.selectedPackage.price.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Travel Details</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Travel Date
                </label>
                <input
                  type="date"
                  value={bookingData.travelDate}
                  onChange={(e) =>
                    updateBookingData('travelDate', e.target.value)
                  }
                  className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Group Size
                </label>
                <select
                  value={bookingData.groupSize}
                  onChange={(e) =>
                    updateBookingData('groupSize', parseInt(e.target.value))
                  }
                  className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Person' : 'People'}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Room Type
                </label>
                <select
                  value={bookingData.roomType}
                  onChange={(e) =>
                    updateBookingData('roomType', e.target.value)
                  }
                  className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500"
                >
                  <option value="standard">Standard Room</option>
                  <option value="deluxe">Deluxe Room (+₹1000)</option>
                  <option value="suite">Suite (+₹2500)</option>
                </select>
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Special Requests
              </label>
              <textarea
                value={bookingData.specialRequests}
                onChange={(e) =>
                  updateBookingData('specialRequests', e.target.value)
                }
                rows={3}
                className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500"
                placeholder="Any dietary restrictions, accessibility needs, or special arrangements..."
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">
                Traveler Information
              </h2>
              <button
                onClick={addTraveler}
                className="rounded-lg bg-orange-600 px-4 py-2 text-white hover:bg-orange-700"
              >
                Add Traveler
              </button>
            </div>
            <div className="space-y-6">
              {bookingData.travelers.map((traveler, index) => (
                <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-4 text-lg font-semibold">
                    Traveler {index + 1}
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={traveler.name}
                        onChange={(e) =>
                          updateTraveler(index, 'name', e.target.value)
                        }
                        className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500"
                        placeholder="As per ID proof"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        value={traveler.email}
                        onChange={(e) =>
                          updateTraveler(index, 'email', e.target.value)
                        }
                        className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={traveler.phone}
                        onChange={(e) =>
                          updateTraveler(index, 'phone', e.target.value)
                        }
                        className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Age
                      </label>
                      <input
                        type="number"
                        value={traveler.age}
                        onChange={(e) =>
                          updateTraveler(index, 'age', e.target.value)
                        }
                        className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500"
                        min="1"
                        max="100"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Gender
                      </label>
                      <select
                        value={traveler.gender}
                        onChange={(e) =>
                          updateTraveler(index, 'gender', e.target.value)
                        }
                        className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500"
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Contact Information
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-lg font-semibold">Primary Contact</h3>
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={bookingData.contactPerson.name}
                      onChange={(e) =>
                        updateBookingData('contactPerson', {
                          ...bookingData.contactPerson,
                          name: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      value={bookingData.contactPerson.email}
                      onChange={(e) =>
                        updateBookingData('contactPerson', {
                          ...bookingData.contactPerson,
                          email: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={bookingData.contactPerson.phone}
                      onChange={(e) =>
                        updateBookingData('contactPerson', {
                          ...bookingData.contactPerson,
                          phone: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <textarea
                      value={bookingData.contactPerson.address}
                      onChange={(e) =>
                        updateBookingData('contactPerson', {
                          ...bookingData.contactPerson,
                          address: e.target.value,
                        })
                      }
                      rows={3}
                      className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-lg font-semibold">
                  Emergency Contact
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      value={bookingData.emergencyContact.name}
                      onChange={(e) =>
                        updateBookingData('emergencyContact', {
                          ...bookingData.emergencyContact,
                          name: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={bookingData.emergencyContact.phone}
                      onChange={(e) =>
                        updateBookingData('emergencyContact', {
                          ...bookingData.emergencyContact,
                          phone: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Payment & Confirmation
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-lg font-semibold">Booking Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Package:</span>
                    <span className="font-medium">
                      {bookingData.selectedPackage.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Travel Date:</span>
                    <span className="font-medium">
                      {bookingData.travelDate}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Group Size:</span>
                    <span className="font-medium">
                      {bookingData.groupSize} people
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Room Type:</span>
                    <span className="font-medium capitalize">
                      {bookingData.roomType}
                    </span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>
                        ₹
                        {(
                          bookingData.selectedPackage.price *
                          bookingData.groupSize
                        ).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>GST (5%):</span>
                      <span>
                        ₹
                        {Math.round(
                          bookingData.selectedPackage.price *
                            bookingData.groupSize *
                            0.05
                        ).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between border-t pt-2 text-lg font-bold">
                      <span>Total:</span>
                      <span>₹{calculateTotal().toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-lg font-semibold">Payment Method</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="online"
                      name="payment"
                      value="online"
                      checked={bookingData.paymentMethod === 'online'}
                      onChange={(e) =>
                        updateBookingData('paymentMethod', e.target.value)
                      }
                      className="text-orange-600"
                    />
                    <label htmlFor="online" className="text-sm font-medium">
                      Online Payment (UPI/Card/Net Banking)
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="advance"
                      name="payment"
                      value="advance"
                      checked={bookingData.paymentMethod === 'advance'}
                      onChange={(e) =>
                        updateBookingData('paymentMethod', e.target.value)
                      }
                      className="text-orange-600"
                    />
                    <label htmlFor="advance" className="text-sm font-medium">
                      Advance Payment (30% now, rest later)
                    </label>
                  </div>
                </div>

                <div className="mt-6 rounded-lg bg-blue-50 p-4">
                  <h4 className="mb-2 font-medium text-blue-800">
                    Booking Confirmation
                  </h4>
                  <p className="text-sm text-blue-700">
                    Your booking will be confirmed within 2 hours. You&apso;ll
                    receive a confirmation email with detailed itinerary and
                    pickup instructions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;

              return (
                <div key={step.id} className="flex flex-col items-center">
                  <div
                    className={`mb-2 flex size-12 items-center justify-center rounded-full border-2 ${
                      isCompleted
                        ? 'border-green-500 bg-green-500 text-white'
                        : isActive
                          ? 'border-orange-500 bg-orange-500 text-white'
                          : 'border-gray-300 bg-white text-gray-400'
                    }`}
                  >
                    {isCompleted ? (
                      <Check className="size-5" />
                    ) : (
                      <Icon className="size-5" />
                    )}
                  </div>
                  <span
                    className={`text-xs font-medium ${
                      isActive ? 'text-orange-600' : 'text-gray-500'
                    }`}
                  >
                    {step.title}
                  </span>
                  {index < steps.length - 1 && (
                    <div
                      className={`absolute ml-12 mt-6 hidden h-0.5 w-24 md:block ${
                        isCompleted ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                      style={{ transform: 'translateX(100%)' }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Content */}
        <div className="mb-8 rounded-lg bg-gray-50 p-8">
          {renderStepContent()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`flex items-center rounded-lg px-6 py-3 font-medium ${
              currentStep === 1
                ? 'cursor-not-allowed bg-gray-200 text-gray-400'
                : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <ChevronLeft className="mr-2 size-5" />
            Previous
          </button>

          <button
            onClick={
              currentStep === 5 ? () => alert('Booking confirmed!') : nextStep
            }
            className="flex items-center rounded-lg bg-orange-600 px-6 py-3 font-medium text-white hover:bg-orange-700"
          >
            {currentStep === 5 ? 'Confirm Booking' : 'Next'}
            {currentStep !== 5 && <ChevronRight className="ml-2 size-5" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingSystem;
