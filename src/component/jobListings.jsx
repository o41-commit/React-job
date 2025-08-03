import React from 'react'
import JobListing from "./JobListing";
import Spinner from './Spinner';
import { useState,useEffect } from 'react';

const JobListings = ({ isHome = false }) => {
  const [jobs, setjobs] = useState([]);
  const [loading, setloading] = useState(true);

useEffect(() => {
  const fetchJobs = async () => {
    try {
      const res = await fetch('https://api.jsonbin.io/v3/b/688f995ff7e7a370d1f2f39e');
      const data = await res.json();

    
      const jobs = isHome ? data.record.slice(0, 3) : data.record;
      setjobs(jobs);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setloading(false);
    }
  };

  fetchJobs();
}, []);

  })
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
               </h2>
          { loading ? (
            <div className="flex justify-center items-center min-h-[200px]">
              <Spinner loading={loading} />
            </div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
          )}
      </div>
    </section>
  )
}

export default JobListings
