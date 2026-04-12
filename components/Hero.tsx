'use client'

export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-accent via-white to-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-6 inline-block">
            <span className="text-primary font-semibold text-sm md:text-base tracking-wide">
              TRANSFORMING COMMUNITIES
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Creating Lasting Social Impact Through Service and Compassion
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Project Daan is dedicated to building stronger communities through education, volunteer engagement, and sustainable development initiatives that make a real difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto">
              Start Volunteering
            </button>
            <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-accent transition-all w-full sm:w-auto">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-gray-200">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-gray-600 text-sm md:text-base">Active Volunteers</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50K+</div>
              <p className="text-gray-600 text-sm md:text-base">Lives Impacted</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-gray-600 text-sm md:text-base">Initiatives</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
