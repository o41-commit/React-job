import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Router} from 'react-router-dom'
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import JobPage from './pages/JobPage';
import NotFoundPage from './pages/NotFoundPage';
import MainJob, { jobLoader } from './pages/MainJob';
import AddJobPage from './pages/AddJobPage';
import EdithJobPage from './pages/EdithJobPage';


 const App = () => {
  // ADD NEW JOB
  const addJob = async(newJob) => {
    const res = await fetch('https://gist.githubusercontent.com/o41-commit/75bf8df241a4a8622cc156b3b2f3095b/raw/690c91bc3d2e1e97a3159f1095c0db64c0ec37a6/jobs.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    return;
  }

  // DELETE JOB
  const deleteJob = async(id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE'
    });
    return;
  }

  // UPDATE JOB
  const updateJob = async(job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    });
    return;
  }

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<MainLayout />}>
    <Route index element={<HomePage/>}/>
    <Route path='/jobs' element={<JobPage />}/>
    <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
    <Route path='/jobs/:id' element={<MainJob deleteJob={deleteJob} />} loader={jobLoader}/>
    <Route path='/edith-job/:id' element={<EdithJobPage updatedJobSubmit={updateJob} />} loader={jobLoader}/>
    <Route path='*' element={<NotFoundPage/>}/>
  </Route>
  )
);
  return (
    <RouterProvider router={router}/>
  )
}


export default App
