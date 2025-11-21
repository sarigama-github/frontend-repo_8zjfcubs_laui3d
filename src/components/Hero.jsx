function Hero() {
  return (
    <section className="relative overflow-hidden pt-28" id="home">
      <div className="absolute inset-0 -z-10 opacity-40" aria-hidden>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-200 rounded-full blur-3xl" />
        <div className="absolute top-48 -left-24 w-96 h-96 bg-blue-200 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-cyan-700 font-medium mb-3">Welcome to Smylor</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            Gentle, Modern Dental Care for Confident Smiles
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            From routine checkups to cosmetic treatments, our friendly team makes every visit comfortable and stress-free.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#book" className="bg-cyan-600 text-white px-5 py-3 rounded-md shadow hover:bg-cyan-700">Book an Appointment</a>
            <a href="#services" className="px-5 py-3 rounded-md border border-slate-300 hover:border-cyan-600 hover:text-cyan-700">Explore Services</a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-slate-600">
            <div>
              <p className="text-2xl font-bold text-slate-900">1,500+</p>
              <p className="text-sm">Happy Patients</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">4.9/5</p>
              <p className="text-sm">Average Rating</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">15+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-200">
            <img src="https://images.unsplash.com/photo-1606811842243-af7e16970c1f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEZW50aXN0JTIwYW5kJTIwcGF0aWVudHxlbnwwfDB8fHwxNzYzNjk3MzY0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Dentist and patient" className="w-full h-[420px] object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-xl p-4 border border-slate-200">
            <p className="text-sm text-slate-500">Trusted by families across the city</p>
            <p className="text-lg font-semibold text-slate-900">Gentle, patient-centered care</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
