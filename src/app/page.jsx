'use client';
import React from 'react'
import CreditRepairForm from './applicationform'
import ApplicationForm from './inputform';



function page() {
  return (
<>
    <div className="container mx-auto bg-gray-100 justify-content-center">
      

           <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-10">
               <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                 Application Form
               </h1>
               <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                 Please complete all required fields marked with an asterisk (*).
               </p>
             </div>
    
             <CreditRepairForm />
             {/* <ApplicationForm/> */}
             {/* <AppointmentScheduler/> */}
            
          
           </main>
         </div>

    
    </>
  );
}

export default page



