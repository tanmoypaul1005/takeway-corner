"use client"
import React from 'react';
import CommonModal from '../../components/modal/ComonModal';
import CommonInput from '../../components/input/CommonInput';
import CommonDatePicker from '../../components/input/CommonDatePicker';

export interface TimeSlot {
  start: string;
  end: string;
  available: boolean;
}

interface AppointmentModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  selectDoctor?: TimeSlot[];
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ open, setOpen,selectDoctor }) => {

  console.log("selectDoctor", selectDoctor);
  
  return (
    <div>
      <CommonModal
        setOpen={setOpen} 
        open={open} 
        content={<>
        <div>
          <div className='text-3xl font-bold text-center text-white'>Book Appointment</div>
          <div className='text-center text-white'>Please enter your name to book an appointment</div>
        </div>
        <form className='flex flex-col mb-5 gap-y-5'>
            <CommonInput placeHolder='Enter your Name' level='Name'/>
            <CommonInput placeHolder='Enter your Email' level='Email'/>
            <CommonInput placeHolder='Enter your Phone' level='Phone'/>
            {/* <CommonDatePicker/> */}
        </form>
        <div className='flex flex-wrap gap-3'>

        {selectDoctor?.map((timeSlot: TimeSlot, index: number) => (
          <div key={index} className='flex bg-[#007E85] text-sm rounded-md px-4 py-2  justify-between text-white'>
            {timeSlot.start} - {timeSlot.end}
        </div>
      ))}
      </div>
        </>}
      />
    </div>
  );
}

export default AppointmentModal;