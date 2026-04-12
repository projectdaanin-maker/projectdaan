'use client'

import { useState } from 'react'

export default function Volunteer() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interests: [],
    message: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const interests = [
    'Education',
    'Healthcare',
    'Community Development',
    'Environmental',
    'Women Empowerment',
    'Administrative Support',
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        interests: [],
        message: '',
      })
    }, 3000)
  }

  return (
    <section id="volunteer" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <span className="font-semibold text-sm md:text-base tracking-wide block mb-3" style={{ color: '#3C3489' }}>
              GET INVOLVED
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1a1a1a' }}>
              Join Our Volunteer Community
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#666' }}>
              Volunteers are the heart of Project Daan. Whether you have a few hours or want to be more involved, there&apos;s a role for you.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-2xl" style={{ color: '#0F6E56' }}>✓</div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: '#1a1a1a' }}>Make Real Impact</h4>
                  <p style={{ color: '#666' }}>Direct involvement in programs that change lives</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl" style={{ color: '#0F6E56' }}>✓</div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: '#1a1a1a' }}>Learn & Grow</h4>
                  <p style={{ color: '#666' }}>Develop new skills and gain valuable experience</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl" style={{ color: '#0F6E56' }}>✓</div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: '#1a1a1a' }}>Build Community</h4>
                  <p style={{ color: '#666' }}>Connect with like-minded individuals passionate about change</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl" style={{ color: '#0F6E56' }}>✓</div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: '#1a1a1a' }}>Flexible Options</h4>
                  <p style={{ color: '#666' }}>Choose roles that fit your schedule and interests</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            {isSubmitted ? (
              <div className="border-2 rounded-lg p-8 text-center" style={{ backgroundColor: '#E1F5EE', borderColor: '#0F6E56' }}>
                <div className="text-5xl mb-4" style={{ color: '#0F6E56' }}>✓</div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#1a1a1a' }}>Thank You!</h3>
                <p style={{ color: '#666' }}>
                  We&apos;ve received your application. Our team will contact you soon with more information about volunteer opportunities.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-lg p-8 space-y-6" style={{ backgroundColor: '#f5f4f0' }}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold mb-2" style={{ color: '#1a1a1a' }}>
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border"
                      style={{ borderColor: '#ddd' }}
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold mb-2" style={{ color: '#1a1a1a' }}>
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border"
                      style={{ borderColor: '#ddd' }}
                      placeholder="Doe"
                    />
                  </div>
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
                    className="w-full px-4 py-2 rounded-lg border"
                    style={{ borderColor: '#ddd' }}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2" style={{ color: '#1a1a1a' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border"
                    style={{ borderColor: '#ddd' }}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3" style={{ color: '#1a1a1a' }}>
                    Areas of Interest *
                  </label>
                  <div className="space-y-2">
                    {interests.map(interest => (
                      <label key={interest} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleCheckboxChange(interest)}
                          className="w-4 h-4 rounded"
                          style={{ accentColor: '#3C3489' }}
                        />
                        <span style={{ color: '#1a1a1a' }}>{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: '#1a1a1a' }}>
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2 rounded-lg border resize-none"
                    style={{ borderColor: '#ddd' }}
                    placeholder="Tell us about yourself and why you want to volunteer..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                  style={{ backgroundColor: '#3C3489' }}
                >
                  Apply to Volunteer
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
