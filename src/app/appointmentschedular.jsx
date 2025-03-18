'use client';
// components/AppointmentScheduler.jsx
import { useState, useRef, useEffect } from 'react';
import SignatureCanvas from 'react-signature-canvas';

export default function AppointmentScheduler() {
  const [date, setDate] = useState('03/17/2025');
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('March');
  const [selectedYear, setSelectedYear] = useState(2025);
  const [selectedDay, setSelectedDay] = useState(17);
  const [selectedTime, setSelectedTime] = useState(null);
  const sigCanvas = useRef({});
  const calendarRef = useRef(null);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const timeSlots = [
    '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM'
  ];

  // Generate calendar days for the selected month and year
  const generateCalendarDays = () => {
    const monthIndex = months.indexOf(selectedMonth);
    const daysInMonth = new Date(selectedYear, monthIndex + 1, 0).getDate();
    const firstDayOfMonth = new Date(selectedYear, monthIndex, 1).getDay();
    
    let days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push({ day: null, current: false });
    }
    
    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({ day, current: day === selectedDay });
    }
    
    return days;
  };

  // Clear signature pad
  const clearSignature = () => {
    sigCanvas.current.clear();
  };

  // Toggle calendar visibility
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  // Handle day selection
  const selectDay = (day) => {
    if (day) {
      setSelectedDay(day);
      setDate(`${(months.indexOf(selectedMonth) + 1).toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${selectedYear}`);
      setShowCalendar(false);
    }
  };

  // Handle time selection
  const selectTime = (time) => {
    setSelectedTime(time);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const signatureData = sigCanvas.current.isEmpty() ? null : sigCanvas.current.toDataURL();
    
    const appointmentData = {
      date,
      time: selectedTime,
      signature: signatureData,
    };
    
    console.log('Appointment data:', appointmentData);
    alert('Appointment scheduled successfully!');
  };

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const calendarDays = generateCalendarDays();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Signature Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Signature <span className="text-red-500">*</span>
          </label>
          <div className="relative border rounded-md overflow-hidden bg-white">
            <SignatureCanvas
              ref={sigCanvas}
              canvasProps={{
                className: 'w-full h-24 cursor-crosshair',
              }}
              backgroundColor="rgba(255, 255, 255, 0)"
              penColor="rgba(0, 0, 0, 0.5)"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-300 pointer-events-none">
              Sign Here
            </div>
            <div className="absolute right-2 top-2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </div>
          </div>
          <div className="flex justify-end mt-1">
            <button
              type="button"
              onClick={clearSignature}
              className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Appointment Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Appointment
          </label>
          <div className="space-y-4">
            {/* Date Picker */}
            <div className="relative">
              <div className="flex">
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                  readOnly
                />
                <button
                  type="button"
                  onClick={toggleCalendar}
                  className="ml-2 p-2 border border-gray-300 rounded-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
              
              {/* Calendar Dropdown */}
              {showCalendar && (
                <div ref={calendarRef} className="absolute z-10 mt-1 w-full bg-white shadow-lg border rounded-md">
                  <div className="flex justify-between border-b p-2">
                    <div className="relative">
                      <select
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                        className="appearance-none bg-white border-gray-200 rounded py-1 px-3 pr-8 leading-tight focus:outline-none"
                      >
                        {months.map((month) => (
                          <option key={month} value={month}>
                            {month}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <select
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                        className="appearance-none bg-white border-gray-200 rounded py-1 px-3 pr-8 leading-tight focus:outline-none"
                      >
                        {[2024, 2025, 2026].map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Weekday Headers */}
                  <div className="grid grid-cols-7 text-center text-xs bg-blue-50">
                    {weekdays.map((day) => (
                      <div key={day} className="py-1 font-medium text-blue-600">
                        {day}
                      </div>
                    ))}
                  </div>
                  
                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 text-center">
                    {calendarDays.map((item, index) => (
                      <div
                        key={index}
                        className={`p-2 text-sm ${
                          item.day === null
                            ? ''
                            : item.current
                            ? 'bg-blue-600 text-white rounded-full'
                            : 'hover:bg-gray-100 cursor-pointer'
                        }`}
                        onClick={() => item.day && selectDay(item.day)}
                      >
                        {item.day}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Selected Date Display */}
            <div className="text-lg font-medium">
              Monday, March 17
            </div>
            
            {/* Time Slot Selection */}
            <div>
              <div className="flex justify-between mb-2">
                <button type="button" className="p-1 rounded-full bg-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button type="button" className="p-1 rounded-full bg-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    className={`p-3 border rounded-md text-center ${
                      selectedTime === time
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'border-gray-300 text-blue-600 hover:bg-blue-50'
                    }`}
                    onClick={() => selectTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Timezone */}
            <div className="flex items-center text-sm text-gray-600 mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Asia/Karachi (01:31 PM)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Consultation Notice */}
        <div className="border-t pt-4">
          <h3 className="font-medium mb-2">Consultation Scheduling Notice:</h3>
          <p className="text-sm">
            Our office will send a confirmation text message during business hours to verify the 
            scheduled consultation. Please reply with "YES" to confirm your acceptance. If we do not 
            receive a response, the consultation will be canceled automatically.
          </p>
        </div>
        
        {/* Submit Button */}
        {/* <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="w-full sm:w-1/3 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200"
          >
            Submit
          </button>
        </div> */}
        
        {/* Footer */}
        <div className="text-center text-sm text-gray-500">
          Powered by Jotform
        </div>
      </form>
    </div>
  );
}