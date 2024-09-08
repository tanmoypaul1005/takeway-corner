"use client"
import React from 'react';
import CommonModal from '../../components/modal/ComonModal';
import CommonInput from '../../components/input/CommonInput';
import CommonDatePicker from '../../components/input/CommonDatePicker';

interface AppointmentModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ open, setOpen }) => {
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
        <form className='flex flex-col gap-y-5'>
            <CommonInput placeHolder='Enter your Name' level='Name'/>
            <CommonInput placeHolder='Enter your Email' level='Email'/>
            <CommonInput placeHolder='Enter your Phone' level='Phone'/>
            {/* <CommonDatePicker/> */}
        </form>
        </>}
      />
    </div>
  );
}

export default AppointmentModal;