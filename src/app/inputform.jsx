'use client';
// components/ApplicationForm.jsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import AppointmentScheduler from './appointmentschedular';
import Home from './signaturebox';
import SignatureBox from './signaturebox';


export default function ApplicationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Create form data object to handle file upload
      const formData = new FormData();
      Object.keys(data).forEach(key => {
        if (key !== 'idImage') {
          formData.append(key, data[key]);
        }
      });
      
      if (selectedFile) {
        formData.append('idImage', selectedFile);
      }
      
      // Submit form data to your API endpoint
      // const response = await fetch('/api/submit-application', {
      //   method: 'POST',
      //   body: formData
      // });
      
      // Handle response
      console.log('Form submitted successfully', data);
      alert('Application submitted successfully!');
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white ">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Fields */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name <span className="text-red-500">*</span>
          </label>
          <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <input
                type="text"
                {...register('firstName', { required: 'First name is required' })}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
              />
              <p className="mt-1 text-xs text-gray-500">First Name</p>
              {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName.message}</p>}
            </div>
            <div>
              <input
                type="text"
                {...register('lastName', { required: 'Last name is required' })}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
              />
              <p className="mt-1 text-xs text-gray-500">Last Name</p>
              {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName.message}</p>}
            </div>
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <div className="mt-1">
            <input
              type="tel"
              placeholder="(000) 000-0000"
              {...register('phoneNumber', { 
                pattern: {
                  value: /^(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/,
                  message: 'Please enter a valid phone number'
                }
              })}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
            />
            <p className="mt-1 text-xs text-gray-500">Please enter a valid phone number.</p>
            {errors.phoneNumber && <p className="text-red-500 text-xs">{errors.phoneNumber.message}</p>}
          </div>
        </div>

        {/* Social Security Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Social Security Number <span className="text-red-500">*</span>
          </label>
          <div className="mt-1">
            <input
              type="text"
              {...register('ssn', { 
                required: 'Social Security Number is required',
                pattern: {
                  value: /^\d{3}-?\d{2}-?\d{4}$/,
                  message: 'Please enter a valid SSN'
                }
              })}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
            />
            <p className="mt-1 text-xs text-gray-500">Full Social Security Number</p>
            {errors.ssn && <p className="text-red-500 text-xs">{errors.ssn.message}</p>}
          </div>
        </div>

        {/* ID Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Upload I.D. Image [ Front Only ] <span className="text-red-500">*</span>
          </label>
          <div className="mt-1">
            <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Browse Files</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      accept="image/*"
                      {...register('idImage', { required: 'ID image is required' })}
                      onChange={handleFileChange}
                    />
                  </label>
                  <p className="pl-1">or drag and drop files here</p>
                </div>
                {selectedFile && (
                  <p className="text-sm text-gray-500">
                    Selected file: {selectedFile.name}
                  </p>
                )}
                {errors.idImage && <p className="text-red-500 text-xs">{errors.idImage.message}</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div>
          <h3 className="text-lg font-medium text-gray-900">PAYMENT INFORMATION</h3>
          
          {/* Card Number */}
          <div className="mt-4">
            <input
              type="text"
              {...register('cardNumber', { 
                required: 'Card number is required',
                pattern: {
                  value: /^\d{13,19}$/,
                  message: 'Please enter a valid card number'
                }
              })}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
            />
            <p className="mt-1 text-xs text-gray-500">CARD:</p>
            {errors.cardNumber && <p className="text-red-500 text-xs">{errors.cardNumber.message}</p>}
          </div>

          {/* Expiration and CVC */}
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <input
                type="text"
                placeholder="MM/YY"
                {...register('expiration', { 
                  required: 'Expiration date is required',
                  pattern: {
                    value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                    message: 'Please enter a valid expiration date (MM/YY)'
                  }
                })}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
              />
              <p className="mt-1 text-xs text-gray-500">EXP:</p>
              {errors.expiration && <p className="text-red-500 text-xs">{errors.expiration.message}</p>}
            </div>
            <div>
              <input
                type="text"
                placeholder="123"
                {...register('cvc', { 
                  required: 'CVC is required',
                  pattern: {
                    value: /^\d{3,4}$/,
                    message: 'Please enter a valid CVC'
                  }
                })}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
              />
              <p className="mt-1 text-xs text-gray-500">CVC:</p>
              {errors.cvc && <p className="text-red-500 text-xs">{errors.cvc.message}</p>}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        {/* <div className="pt-5">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </div> */}
      </form>
      {/* <AppointmentScheduler/> */}
     <SignatureBox/>
    </div>
  );
}