'use client'

import { useEffect } from 'react'

export const useScrollStyles = () => {
  useEffect(() => {
    // Add custom scrollbar styles when component mounts
    document.body.style.setProperty('--scrollbar-thumb-color', 'rgba(255, 255, 255, 0.3)')
    document.body.style.setProperty('--scrollbar-thumb-hover-color', 'rgba(255, 255, 255, 0.5)')
    
    const style = document.createElement('style')
    style.textContent = `
      ::-webkit-scrollbar {
        width: 6px !important;
      }
      ::-webkit-scrollbar-track {
        background: #151515 !important;
      }
      ::-webkit-scrollbar-thumb {
        background: var(--scrollbar-thumb-color) !important;
        border-radius: 50px !important;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: var(--scrollbar-thumb-hover-color) !important;
      }
    `
    document.head.appendChild(style)

    // Cleanup function to remove styles when component unmounts
    return () => {
      document.body.style.removeProperty('--scrollbar-thumb-color')
      document.body.style.removeProperty('--scrollbar-thumb-hover-color')
      document.head.removeChild(style)
    }
  }, [])
} 