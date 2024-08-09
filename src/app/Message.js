'use client'
import React from 'react'
import { ToastContainer } from 'react-toastify'

export default function Message({children}) {
  return (
    <>
        

        {children}
          <ToastContainer
          />
    </>
  )
}
