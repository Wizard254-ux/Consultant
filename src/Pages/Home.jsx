import React from 'react'
import Navbar from '../Components/Navbar'
import ImageCarousel from '../Components/Corousels'
import HomeServices from './../Components/HomeServices';
import WhyChooseUS from '../Components/WhyChooseUs';
import Footer from '../Components/Footer';

function Home({isSideBar,displaySideBar}) {
  return (
    <div className='flex flex-col'> 
    <Navbar isSideBar={isSideBar} displaySideBar={displaySideBar} />
    <ImageCarousel/>
    <div className='flex flex-col md:flex-row justify-center items-center'>
      <div className='py-12 pl-11 max-w-[550px]'>
      <i class="fa-solid fa-quote-left " style={{fontSize:35,color:'rgb(148, 163, 184)'}}></i>
        <p className='text-xl font- text-gray-600 text-'>
          
        ERISPE IT Solutions and Consultancy Ltd is a premier IT solutions provider, 
        training, research, and consultancy firm. We do ICT training and provide system consultancy and 
        implementation in organizations that span Small and Medium Enterprises (SMEs), Government Ministries,
         Departments and Agencies, Non-Governmental Organizations (NGOs), and corporations across various sectors.
        </p>
      </div>
      <div className=' md:pt-9 md:pr-8 px-5'>
      <img 
              src="team.png"
              // src='https://bobgroganconsulting.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-05-at-4.59.16-PM-1.jpeg' 
              className="w-full max-w-[500px] h-full object-cover rounded-md"
            />
      </div>
    </div>

<HomeServices/>
<WhyChooseUS/>
<Footer/>
    </div>
  )
}

export default Home