function Services() {
  const services = [
    { title: 'Checkups & Cleaning', desc: 'Routine exams, professional cleanings, and personalized oral health plans.', icon: '🪥' },
    { title: 'Cosmetic Dentistry', desc: 'Teeth whitening, veneers, and smile makeovers tailored to you.', icon: '✨' },
    { title: 'Invisalign & Braces', desc: 'Comfortable, discreet teeth alignment options for all ages.', icon: '🦷' },
    { title: 'Implants & Crowns', desc: 'Durable, natural-looking restorations crafted with precision.', icon: '👑' },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Services</h2>
          <p className="mt-3 text-slate-600">Comprehensive care for every smile</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-3 font-semibold text-lg text-slate-900">{s.title}</h3>
              <p className="text-slate-600 mt-2 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
