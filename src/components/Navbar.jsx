import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-cyan-600 text-white font-bold">S</span>
          <span className="text-xl font-semibold text-slate-800">Smylor Dental Care</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-slate-700">
          <a href="#services" className="hover:text-cyan-600">Services</a>
          <a href="#about" className="hover:text-cyan-600">About</a>
          <a href="#team" className="hover:text-cyan-600">Team</a>
          <a href="#testimonials" className="hover:text-cyan-600">Reviews</a>
          <a href="#contact" className="hover:text-cyan-600">Contact</a>
          <a href="#book" className="inline-flex items-center bg-cyan-600 text-white px-4 py-2 rounded-md shadow hover:bg-cyan-700">Book Now</a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-3 flex flex-col gap-3">
            <a href="#services" className="hover:text-cyan-600">Services</a>
            <a href="#about" className="hover:text-cyan-600">About</a>
            <a href="#team" className="hover:text-cyan-600">Team</a>
            <a href="#testimonials" className="hover:text-cyan-600">Reviews</a>
            <a href="#contact" className="hover:text-cyan-600">Contact</a>
            <a href="#book" className="inline-flex items-center bg-cyan-600 text-white px-4 py-2 rounded-md shadow hover:bg-cyan-700">Book Now</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
