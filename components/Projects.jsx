import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import StockImg from '../public/assets/projects/Stock.png'
import SpeechRecogImg from '../public/assets/projects/Speech_Recog_Pic.png'
import CryptoImg from '../public/assets/projects/Crypto_WebAPI_Pic.png'
import HouseImg from '../public/assets/projects/Zillow_Pic.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#504be7]'>
          Projects
        </p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>

          <ProjectItem 
          title='Stock Price Prediction Model' 
          backgroundImg={StockImg} 
          projectURL='https://github.com/Jin-Kang-Lee/Stock_Prediction_Model'
          build='Python, Machine Learning'/>
          
          <ProjectItem 
          title='Real Time Speech Recognition' 
          backgroundImg={SpeechRecogImg} 
          projectURL='https://github.com/Jin-Kang-Lee/Real-Time-Speech-Recognition'
          build='Python'/>
          
          <ProjectItem 
          title='Cryoto Web API Automation' 
          backgroundImg={CryptoImg} 
          projectURL='https://github.com/Jin-Kang-Lee/Crypto_WebAPI_Pull_Automation'
          build='Python'/>
          
          <ProjectItem 
          title='House Price Prediction Model' 
          backgroundImg={HouseImg} 
          projectURL='https://github.com/Jin-Kang-Lee/House_Price_Prediction'
          build='Python, Machine Learning'/>
        </div>
      </div>
    </div>
    
  )
}

export default Projects