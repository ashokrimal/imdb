'use client'

import { ThemeProvider } from 'next-themes'

import React, { Children } from 'react'

export default function Providers({children}) {
  return (
    <ThemeProvider defaultTheme='system' attribute=>
        <div className="">
            {children}
        </div>
    </ThemeProvider>
  )
}
