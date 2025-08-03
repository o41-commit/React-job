import React from 'react'
import JobListings from '../component/jobListings';
import Footer from '../layout/footer';

const JobPage = () => {
  return (
    <section className='bg-blue-50 px-4 py-6'>
      <JobListings />
      <Footer />
    </section>
  )
}

export default JobPage