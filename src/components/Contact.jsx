import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Sending...' })
    try {
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Something went wrong')
      setStatus({ type: 'success', message: 'Thanks for reaching out! We will get back to you soon.' })
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus({ type: 'error', message: err.message })
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Contact Us</h2>
          <p className="mt-2 text-slate-600">Have questions? Send us a message and we’ll respond shortly.</p>
          <div className="mt-6 space-y-3 text-slate-700">
            <p><span className="font-semibold">Phone:</span> (555) 123-4567</p>
            <p><span className="font-semibold">Email:</span> hello@smylor.dental</p>
            <p><span className="font-semibold">Address:</span> 123 Smile Ave, Suite 200, Your City</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input required name="name" value={form.name} onChange={handleChange} className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input required type="email" name="email" value={form.email} onChange={handleChange} className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-600" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Subject</label>
              <input name="subject" value={form.subject} onChange={handleChange} className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-600" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea required name="message" value={form.message} onChange={handleChange} rows="4" className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-600" />
            </div>
          </div>
          {status && (
            <p className={`mt-4 text-sm ${status.type === 'success' ? 'text-green-700' : status.type === 'error' ? 'text-red-700' : 'text-slate-600'}`}>
              {status.message}
            </p>
          )}
          <button type="submit" className="mt-4 w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 rounded-md">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
