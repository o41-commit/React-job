import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import JobPage from './pages/JobPage';
import NotFoundPage from './pages/NotFoundPage';
import MainJob, { jobLoader } from './pages/MainJob';
import AddJobPage from './pages/AddJobPage';
import EdithJobPage from './pages/EdithJobPage';

const BIN_URL = 'https://api.jsonbin.io/v3/b/688f995ff7e7a370d1f2f39e';
const BIN_RECORD_URL = `${BIN_URL}/record`;

const App = () => {

  const addJob = async (newJob) => {
    const res = await fetch(BIN_RECORD_URL);
    const data = await res.json();
    const jobs = data.jobs || [];
    const jobWithId = { ...newJob, id: Date.now().toString() };
    const updatedJobs = [...jobs, jobWithId];
    await fetch(BIN_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ jobs: updatedJobs })
    });
    return;
  }

  const deleteJob = async (id) => {
    
    const res = await fetch(BIN_RECORD_URL);
    const data = await res.json();
    const jobs = data.jobs || [];
    
    const updatedJobs = jobs.filter(job => job.id !== id);
    await fetch(BIN_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ jobs: updatedJobs })
    });
    return;
  }


  const updateJob = async (job) => {
    const res = await fetch(BIN_RECORD_URL);
    const data = await res.json();
    const jobs = data.jobs || [];
    const updatedJobs = jobs.map(j => j.id === job.id ? job : j);
    await fetch(BIN_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ jobs: updatedJobs })
    });
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobPage />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path='/jobs/:id' element={<MainJob deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path='/edith-job/:id' element={<EdithJobPage updatedJobSubmit={updateJob} />} loader={jobLoader} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}

export default App