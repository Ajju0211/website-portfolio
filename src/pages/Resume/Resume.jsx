import React from 'react'
import Layout from '../../components/Layout/Layout'
import { cv } from '../../assets';

const Resume = () => {
  return (
    <Layout prop="resume">
      <div >
        {/* Embed the resume */}
        <img
          src={cv}
          className='h-[100%] xl:h-[100%] w-[100%] object-contain'
        ></img>
      </div>
    
    </Layout>

  )
}

export default Resume
