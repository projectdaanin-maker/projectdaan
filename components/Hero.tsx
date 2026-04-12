'use client'

export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-40 md:pb-24" style={{ backgroundColor: '#f5f4f0' }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-6 inline-block">
            <span className="font-semibold text-sm md:text-base tracking-wide" style={{ color: '#3C3489' }}>
              TRANSFORMING COMMUNITIES
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: '#1a1a1a' }}>
            Creating Lasting Social Impact Through Service and Compassion
          </h1>

          <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto" style={{ color: '#666' }}>
            Project Daan is dedicated to building stronger communities through education, volunteer engagement, and sustainable development initiatives that make a real difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto" style={{ backgroundColor: '#3C3489' }}>
              Start Volunteering
            </button>
            <button className="text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all w-full sm:w-auto" style={{ backgroundColor: '#BA7517' }}>
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8" style={{ borderTop: '1px solid #e5e5e5' }}>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#3C3489' }}>500+</div>
              <p className="text-sm md:text-base" style={{ color: '#888' }}>Active Volunteers</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#3C3489' }}>50K+</div>
              <p className="text-sm md:text-base" style={{ color: '#888' }}>Lives Impacted</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#3C3489' }}>15+</div>
              <p className="text-sm md:text-base" style={{ color: '#888' }}>Initiatives</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
