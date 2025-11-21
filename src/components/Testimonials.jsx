function Testimonials() {
  const reviews = [
    { name: 'Sarah L.', text: 'The team is so kind and gentle. Best cleaning I have ever had!', rating: 5 },
    { name: 'David R.', text: 'They explained everything clearly and made me feel at ease.', rating: 5 },
    { name: 'Priya M.', text: 'Beautiful results with whitening. Love my new smile!', rating: 5 },
  ]

  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What Patients Say</h2>
          <p className="mt-3 text-slate-600">Real experiences from our happy patients</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 text-amber-500">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="mt-3 text-slate-700">“{r.text}”</p>
              <p className="mt-4 font-semibold text-slate-900">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
