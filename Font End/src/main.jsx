// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'



import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx'
import Scholarship from './components/Scholarship/Scholarship.jsx'
import Service from './components/Service/Service.jsx'

// Sub-service components
import UniversityAdmission from './components/Service/University_admission_process.jsx'
import VisaProcessing from './components/Service/Visa_processing.jsx'
import ScholarshipArrangement from './components/Service/Scholarship_arrangement.jsx'
import Accomodation from './components/Service/Accomodation.jsx'
import PostStudyOpportunity from './components/Service/Post_study_opportunity.jsx'
import PredepartureHelp from './components/Service/Predeparture_help.jsx'
import Contact from './components/Contact/Contact.jsx'
import Apply from './components/Contact/Apply.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/scholarships',
        element: <Scholarship />
      },
      {
        path: '/services',
        element: <Service />
      },
      // Sub-service routes
      {
        path: '/services/university-admission-process',
        element: <UniversityAdmission />
      },
      {
        path: '/services/visa-processing',
        element: <VisaProcessing />
      },
      {
        path: '/services/scholarship-arrangement',
        element: <ScholarshipArrangement />
      },
      {
        path: '/services/accommodation-support',
        element: <Accomodation />
      },
      {
        path: '/services/post-study-opportunity',
        element: <PostStudyOpportunity />
      },
      {
        path: '/services/pre-departure-help',
        element: <PredepartureHelp />
      },{
        path:'/contact',
        element:<Contact/>
      },
      {
        path: '/apply',
        element: <Apply />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <RouterProvider router={router} />
    
  </StrictMode>,
)
