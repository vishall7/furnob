import React, { useState } from 'react'
import { GrStatusGood } from 'react-icons/gr'
import Button from './Button'
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { cn } from '../utils/cn';

function OrderConfirmBox() {
    const navigate = useNavigate();
    const [close, setClose] = useState(false);
  return (
    <div className={cn('fixed inset-0 z-50 flex items-center justify-center bg-black/70', close && 'hidden')}>
        <X size={20} stroke='#fff' strokeWidth={1.9} className='absolute top-5 right-5 cursor-pointer' onClick={() => setClose(true)}/>
      <div className='w-[90%] md:w-[50%] lg:w-[25%] flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-6 shadow-lg text-center'>
        <GrStatusGood size={60} className='text-green-500'/>
        <h2 className='text-2xl font-semibold text-gray-800'>Order Confirmed</h2>
        <p className='my-2 text-sm text-gray-600'>Thank you for your order. We are processing your order and will send you a confirmation email soon.</p>
        <Button variant='primary' onClick={() => navigate('/')}>Go to Home</Button>
      </div>
    </div>
  )
}

export default OrderConfirmBox
