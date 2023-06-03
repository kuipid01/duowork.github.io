import React, { useRef, useEffect } from "react"

import Nav from "./Nav"
import NavMobile from "./NavMobile"
import Footer from "./Footer"

import { ToastContainer } from "react-toastify"
import customCursor from "../utils/customCursor"
import "react-toastify/dist/ReactToastify.min.css"

export default function Layout({ children }: any) {
  // Custom cursor ref
  const cursorDotRef = useRef<HTMLImageElement>(null)
  const cursorDotOutlineRef = useRef<HTMLImageElement>(null)

  useEffect((): any => {
    let componentIsMounted = true

    if (componentIsMounted) {
      // Call custom cursor function
      customCursor(cursorDotRef, cursorDotOutlineRef)
    }

    return () => (componentIsMounted = false)
  }, [])

  return (
    <main id="duowork">
      {/* Desktop navigation */}
      <Nav />

      {/* Mobile navigation */}
      <NavMobile />

      {/* Sections */}
      {children}

      <Footer />

      {/* Toast notification container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {/* Custom cursor */}
      <div className="cursor-dot text-white" ref={cursorDotRef}></div>
      <div
        className="cursor-dot-outline text-white"
        ref={cursorDotOutlineRef}
      ></div>
    </main>
  )
}