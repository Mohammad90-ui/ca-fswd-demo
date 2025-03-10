// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react'
import StudentCard from './component/StudentCard'
import './App.css'

function App() {

  const student1 = {
    studentPhoto: "https://picsum.photos/200/300",
    name: "Harry Potter",
    enrollno: "786",
    courseName: "B.Tech",
    email: "harrybtech@gmail.com",
  }
  return (
    <>
      <div className='flex justify-center gap-6 items-center h-screen bg-gray-100'>
        <StudentCard {...student1}/>
      </div>
    </>
  )
}

export default App
