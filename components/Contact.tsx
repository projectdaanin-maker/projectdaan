'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="py-16 md:py-24" style={{ backgroundColor: '#f5f4f0' }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-semibold text-sm md:text-base tracking-wide block mb-3" style={{ color: '#3C3489' }}>
              GET IN TOUCH
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1a1a1a' }}>
              Contact Project Daan
            </h2>
            <p className="text-lg" style={{ color: '#666' }}>
              Have questions? We&apos;d love to hear from you. Reach out and let&apos;s start a conversation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-white rounded-lg p-8 text-center" style={{ border: '1px solid #e5e5e5' }}>
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#1a1a1a' }}>Address</h3>
              <p style={{ color: '#666' }}>
                123 Community Street<br />
                City, State 12345<br />
                India
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center" style={{ border: '1px solid #e5e5e5' }}>
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#1a1a1a' }}>Phone</h3>
              <p style={{ color: '#666' }}>
                +91 (555) 000-0000<br />
                Available: Mon-Fri, 9AM-6PM<br />
                IST
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center" style={{ border: '1px solid #e5e5e5' }}>
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#1a1a1a' }}>Email</h3>
              <p style={{ color: '#666' }}>
                hello@projectdaan.org<br />
                volunteer@projectdaan.org<br />
                info@projectdaan.org
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 md:p-12" style={{ border: '1px solid #e5e5e5' }}>
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4" style={{ color: '#0F6E56' }}>✓</div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#1a1a1a' }}>Message Sent!</h3>
                <p style={{ color: '#666' }}>
                  Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: '#1a1a1a' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border"
                      style={{ borderColor: '#ddd' }}
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: '#1a1a1a' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border"
                      style={{ borderColor: '#ddd' }}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2" style={{ color: '#1a1a1a' }}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border"
                    style={{ borderColor: '#ddd' }}
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: '#1a1a1a' }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border resize-none"
                    style={{ borderColor: '#ddd' }}
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                  style={{ backgroundColor: '#3C3489' }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
