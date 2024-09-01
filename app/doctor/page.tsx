import React from 'react'
import DoctorCard from '../components/card/DoctorCard'

const Doctor = () => {
    return (
        <section className="grid grid-cols-1 gap-4 p-4 rounded bg-slate-900 place-self-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
      </section>
    )
}

export default Doctor