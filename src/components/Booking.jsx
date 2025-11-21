import { useState } from 'react'

function Booking() {
  const [form, setForm] = useState({ full_name: '', email: '', phone: '', preferred_date: '', preferred_time: '', service: '', notes: '' })
  const [status, setStatus] = useState(null)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Submitting...' })
    try {
      const res = await fetch(`${baseUrl}/api/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'website' })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Something went wrong')
      setStatus({ type: 'success', message: 'Request received! We will contact you shortly.' })
      setForm({ full_name: '', email: '', phone: '', preferred_date: '', preferred_time: '', service: '', notes: '' })
    } catch (err) {
      setStatus({ type: 'error', message: err.message })
    }
  }

  return (
    <section id="book" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Book an Appointment</h2>
          <p className="mt-2 text-slate-600">Send a request and our team will confirm your appointment.</p>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li className="flex items-start gap-3"><span>•</span> Open Mon–Sat, 9:00 AM – 7:00 PM</li>
            <li className="flex items-start gap-3"><span>•</span> Emergency visits available</li>
            <li className="flex items-start gap-3"><span>•</span> Insurance assistance provided</li>
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Full name</label>
              <input required name="full_name" value={form.full_name} onChange={handleChange} className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input required type="email" name="email" value={form.email} onChange={handleChange} className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Phone</label>
              <input required name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Preferred date</label>
              <input type="date" name="preferred_date" value={form.preferred_date} onChange={handleChange} className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Preferred time</label>
              <input name="preferred_time" value={form.preferred_time} onChange={handleChange} placeholder="e.g., 10:30 AM" className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Service</label>
              <select name="service" value={form.service} onChange={handleChange} className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-600">
                <option value="">Select a service</option>
                <option>Checkup & Cleaning</option>
                <option>Cosmetic Dentistry</option>
                <option>Invisalign</option>
                <option>Implants</option>
                <option>Root Canal</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Notes</label>
              <textarea name="notes" value={form.notes} onChange={handleChange} rows="4" className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-600" placeholder="Tell us anything we should know" />
            </div>
          </div>
          {status && (
            <p className={`mt-4 text-sm ${status.type === 'success' ? 'text-green-700' : status.type === 'error' ? 'text-red-700' : 'text-slate-600'}`}>
              {status.message}
            </p>
          )}
          <button type="submit" className="mt-4 w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 rounded-md">Submit Request</button>
        </form>
      </div>
    </section>
  )
}

export default Booking
