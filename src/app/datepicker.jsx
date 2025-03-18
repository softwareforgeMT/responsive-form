// components/AppointmentScheduler.jsx
import { useState } from 'react';

const AppointmentScheduler = () => {
  const [selectedDate, setSelectedDate] = useState('03/17/2025');
  const [selectedMonth, setSelectedMonth] = useState('March');
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedTime, setSelectedTime] = useState(null);
  
  // Calendar data
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const marchDays = Array.from({ length: 31 }, (_, i) => i + 1);
  const timeSlots = ['8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM'];
  
  // Generate calendar grid
  const calendarGrid = [];
  let week = [];
  
  // Add empty cells for days before the 1st of the month
  // For March 2025, the 1st is a Saturday (index 6)
  for (let i = 0; i < 6; i++) {
    week.push(null);
  }
  
  marchDays.forEach((day, index) => {
    week.push(day);
    
    if ((index + 6 + 1) % 7 === 0 || day === marchDays.length) {
      calendarGrid.push(week);
      week = [];
    }
  });
  
  // Fill in any remaining days in the last week
  if (week.length > 0) {
    while (week.length < 7) {
      week.push(null);
    }
    calendarGrid.push(week);
  }
  
  const handleDateClick = (day) => {
    if (day) {
      setSelectedDate(`03/${day.toString().padStart(2, '0')}/2025`);
    }
  };
  
  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handlePrevDay = () => {
    // For demo purposes, just showing UI interaction
    console.log('Previous day clicked');
  };

  const handleNextDay = () => {
    // For demo purposes, just showing UI interaction
    console.log('Next day clicked');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <h2 className="text-xl font-medium mb-4">Appointment</h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left side - Calendar */}
        <div className="w-full md:w-1/2">
          {/* Date input and dropdowns */}
          <div className="mb-4">
            <div className="relative flex border border-gray-300 rounded">
              <input 
                type="text" 
                value={selectedDate} 
                readOnly 
                className="p-2 flex-grow outline-none"
              />
              <button className="px-2 text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Month/Year selectors */}
          <div className="flex mb-4">
            <div className="w-1/2 pr-1">
              <div className="relative border border-gray-300 rounded">
                <select 
                  value={selectedMonth} 
                  onChange={(e) => setSelectedMonth(e.target.value)} 
                  className="appearance-none w-full p-2 pr-8 outline-none"
                >
                  <option>March</option>
                  {/* Other months would go here */}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <div className="flex flex-col">
                    <svg className="w-4 h-2" fill="none" viewBox="0 0 12 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M1 5L6 1L11 5" />
                    </svg>
                    <svg className="w-4 h-2" fill="none" viewBox="0 0 12 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M1 1L6 5L11 1" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 pl-1">
              <div className="relative border border-gray-300 rounded">
                <select 
                  value={selectedYear} 
                  onChange={(e) => setSelectedYear(e.target.value)} 
                  className="appearance-none w-full p-2 pr-8 outline-none"
                >
                  <option>2025</option>
                  {/* Other years would go here */}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <div className="flex flex-col">
                    <svg className="w-4 h-2" fill="none" viewBox="0 0 12 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M1 5L6 1L11 5" />
                    </svg>
                    <svg className="w-4 h-2" fill="none" viewBox="0 0 12 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M1 1L6 5L11 1" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Calendar */}
          <div className="border border-gray-300 rounded overflow-hidden">
            {/* Day headers */}
            <div className="grid grid-cols-7 bg-blue-50 text-center py-1">
              {daysOfWeek.map(day => (
                <div key={day} className="text-xs text-blue-600 font-medium">
                  {day}
                </div>
              ))}
            </div>
            
            {/* Calendar grid */}
            {calendarGrid.map((week, weekIndex) => (
              <div key={weekIndex} className="grid grid-cols-7 border-t border-gray-200">
                {week.map((day, dayIndex) => (
                  <div 
                    key={`${weekIndex}-${dayIndex}`} 
                    className={`
                      h-12 flex items-center justify-center text-sm border-r border-gray-200 last:border-r-0
                      ${day === 17 ? 'bg-blue-500 text-white' : 'hover:bg-gray-100 cursor-pointer'}
                      ${!day ? 'text-gray-300' : ''}
                    `}
                    onClick={() => handleDateClick(day)}
                  >
                    {day || ''}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        {/* Right side - Time slots */}
        <div className="w-full md:w-1/2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg">Monday, March 17</h3>
            <div className="flex space-x-2">
              <button 
                onClick={handlePrevDay}
                className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button 
                onClick={handleNextDay}
                className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Time slots */}
          <div className="grid grid-cols-2 gap-4">
            {timeSlots.map(time => (
              <button
                key={time}
                onClick={() => handleTimeClick(time)}
                className={`
                  border border-blue-500 rounded py-3 px-4 text-center text-blue-600 
                  hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300
                  ${selectedTime === time ? 'bg-blue-50' : ''}
                `}
              >
                {time}
              </button>
            ))}
          </div>
          
          {/* Timezone selector */}
          <div className="mt-10 flex items-center text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Asia/Karachi (04:40 PM)</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Notice text */}
      <div className="mt-10">
        <h3 className="font-bold mb-2">Consultation Scheduling Notice:</h3>
        <p className="text-sm">
          Our office will send a confirmation text message during business hours to verify the
          scheduled consultation. Please reply with "YES" to confirm your acceptance. If we do not
          receive a response, the consultation will be canceled automatically.
        </p>
      </div>
    </div>
  );
};

export default AppointmentScheduler;