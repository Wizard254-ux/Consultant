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
          <i class="fas fa-chart-line"></i>
        </div>

        <div >
          <h3 class="text-xl font-semibold mb-2">Business Incubation And Acceleration Support</h3>
          <p class="text-black text-sm">
            We empower startups and growing businesses by providing the essential...
          </p>
          <span onClick={()=>navigate('/Services')} href="#" class="text-yellow-500 hover:cursor-pointer font-medium mt-2 inline-flex items-center">
            Learn more <i class="fas fa-external-link-alt ml-2"></i>
          </span>
        </div>
      </div>

      <div class="bg-slate-500 rounded-lg shadow-md p-6 flex items-start space-x-4 hover:shadow-lg transition">
        <div class="text-4xl text-white">
          <i class="fas fa-chalkboard-teacher"></i>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">Corporate Training</h3>
          <p class="text-black text-sm">
            Bob Grogan Consulting Ltd offers cutting-edge training programs...
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
          <h3 class="text-xl font-semibold mb-2">Research Grant Writing And Resource Mobilization</h3>
          <p class="text-black text-sm">
            With a commitment to evidence-based decision-making, we conduct...
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
          <h3 class="text-xl font-semibold mb-2">Advisory And Corporate Research</h3>
          <p class="text-black text-sm">
            As trusted advisors, we offer consultancy services that help...
          </p>
          <span onClick={()=>navigate('/Services')} class="text-yellow-500 font-medium mt-2 inline-flex items-center">
            Learn more <i class="fas fa-external-link-alt ml-2"></i>
          </span>
        </div>
      </div>
    </div>
  </div>

)
}

export default HomeServices