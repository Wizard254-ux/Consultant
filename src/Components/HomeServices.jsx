import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomeServices() {
    const navigate=useNavigate()
  return (

  <div class="max-w-7xl mx-auto py-10 px-4">
    <h2 class="text-3xl font-bold text-center mb-8">Our Comprehensive Services</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    

      <div class="bg-slate-500 rounded-lg shadow-md p-6 flex items-start space-x-4 hover:shadow-lg transition">
        <div class="text-4xl text-white">
          <i class="fas fa-chalkboard-teacher"></i>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">ICT Consultancy </h3>
          <p class="text-black text-sm">
          We provide professional expert advise on ICT services
          </p>
          <span onClick={()=>navigate('/Services')} class="text-yellow-500 hover:cursor-pointer font-medium mt-2 inline-flex items-center">
            Learn more <i class="fas fa-external-link-alt ml-2"></i>
          </span>
        </div>
      </div>

      <div class="bg-slate-500 rounded-lg shadow-md p-6 flex items-start hover:cursor-pointer space-x-4 hover:shadow-lg transition">
        <div class="text-4xl text-white">
          <i class="fas fa-flask"></i>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">ICT Project Management</h3>
          <p class="text-black text-sm">
          organizations through the project management cycle
          </p>
          <span  onClick={()=>navigate('/Services')}class="text-yellow-500 hover:cursor-pointer font-medium mt-2 inline-flex items-center">
            Learn more <i class="fas fa-external-link-alt ml-2"></i>
          </span>
        </div>
      </div>

      <div class="bg-slate-500 rounded-lg shadow-md p-6 flex items-start hover:cursor-pointer space-x-4 hover:shadow-lg transition">
        <div class="text-4xl text-white">
          <i class="fas fa-graduation-cap"></i>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">ERP Development and Implementation</h3>
          <p class="text-black text-sm">
          We develop cutting age business solutions for various organizations
          </p>
          <span onClick={()=>navigate('/Services')} class="text-yellow-500 font-medium mt-2 inline-flex items-center">
            Learn more <i class="fas fa-external-link-alt ml-2"></i>
          </span>
        </div>
      </div>

      <div class="bg-slate-500 rounded-lg shadow-md p-6 flex items-start space-x-4 hover:shadow-lg transition">
        <div class="text-4xl text-white">
          <i class="fas fa-chart-line"></i>
        </div>

        <div >
          <h3 class="text-xl font-semibold mb-2">Corporate ICT Training</h3>
          <p class="text-black text-sm">
          We provide in depth ICT training for corporate organizations.
          </p>
          <span onClick={()=>navigate('/Services')} href="#" class="text-yellow-500 hover:cursor-pointer font-medium mt-2 inline-flex items-center">
            Learn more <i class="fas fa-external-link-alt ml-2"></i>
          </span>
        </div>
      </div>
    </div>
  </div>

)
}

export default HomeServices