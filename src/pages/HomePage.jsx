import React from 'react'
import Hero from '../component/Hero';
import JobListings from '../component/jobListings';
import HomeCard from '../component/HomeCard';
import ViewAllJobs from '../component/ViewAllJobs';

const HomePage = () => {
  return (
    <>
    <Hero />
    <HomeCard />
    <JobListings  isHome= { true }/>
    <ViewAllJobs />
    </>
  )
}

export default HomePage