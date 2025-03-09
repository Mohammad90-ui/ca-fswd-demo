// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react'
import OrdersummaryCard from './component/orderSummaryCard'
import './App.css'

function App() {
  
  const order1 = {
    orderId: "1",
    customerName: "Harry",
    productName: "iphone 16 pro",
    totalPrice: "$999",
    orderStatus: false,
  };
  const order2 = {
    orderId: "2",
    customerName: "Harmione",
    productName: "Mackbook",
    totalPrice: "$1099",
    orderStatus: true,
  };


  return (
    <>
     <div className='flex justify-center gap-6 items-center h-screen bg-gray-100'>
      <OrdersummaryCard {...order1} />
      <OrdersummaryCard {...order2} />
     </div>
    </>
  )
}

export default App
