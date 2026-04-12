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
            <span className="text-primary font-semibold text-sm md:text-base tracking-wide block mb-3">
              GET INVOLVED
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Join Our Volunteer Community
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Volunteers are the heart of Project Daan. Whether you have a few hours or want to be more involved, there&apos;s a role for you.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-2xl">✓</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Make Real Impact</h4>
                  <p className="text-gray-600">Direct involvement in programs that change lives</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl">✓</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Learn & Grow</h4>
                  <p className="text-gray-600">Develop new skills and gain valuable experience</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl">✓</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Build Community</h4>
                  <p className="text-gray-600">Connect with like-minded individuals passionate about change</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl">✓</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Flexible Options</h4>
                  <p className="text-gray-600">Choose roles that fit your schedule and interests</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            {isSubmitted ? (
              <div className="bg-accent border-2 border-primary rounded-lg p-8 text-center">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                <p className="text-gray-600">
                  We&apos;ve received your application. Our team will contact you soon with more information about volunteer opportunities.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-muted rounded-lg p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Areas of Interest *
                  </label>
                  <div className="space-y-2">
                    {interests.map(interest => (
                      <label key={interest} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleCheckboxChange(interest)}
                          className="w-4 h-4 text-primary rounded focus:ring-2 focus:ring-primary"
                        />
                        <span className="text-gray-700">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20 resize-none"
                    placeholder="Tell us about yourself and why you want to volunteer..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
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
