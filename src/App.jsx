import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Booking from './components/Booking'
import Contact from './components/Contact'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <section id="about" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1631248055158-edec7a3c072b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDbGluaWN8ZW58MHwwfHx8MTc2MzY5NzM2NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Clinic" className="rounded-2xl shadow-lg border border-slate-200" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900">About Smylor Dental Care</h2>
              <p className="mt-3 text-slate-600">We combine advanced technology with a caring approach to deliver exceptional dental care. Our modern clinic is designed for comfort and our team is dedicated to helping you achieve a healthy, confident smile.</p>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li className="flex gap-3"><span>✓</span> Sedation options available for anxious patients</li>
                <li className="flex gap-3"><span>✓</span> Digital X-rays and 3D imaging for precise treatment</li>
                <li className="flex gap-3"><span>✓</span> Family-friendly environment</li>
              </ul>
            </div>
          </div>
        </section>
        <Testimonials />
        <Booking />
        <Contact />
        <footer className="bg-slate-900 text-slate-300 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Smylor Dental Care. All rights reserved.</p>
            <div className="flex items-center gap-6 text-slate-400">
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#book" className="hover:text-white">Book</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
