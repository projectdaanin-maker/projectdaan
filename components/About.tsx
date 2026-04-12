'use client'

export default function About() {
  const values = [
    {
      title: 'Community First',
      description: 'We prioritize the needs and voices of the communities we serve, ensuring sustainable and meaningful impact.',
      icon: '🤝',
    },
    {
      title: 'Transparency',
      description: 'Complete accountability in our operations and a commitment to using resources efficiently and responsibly.',
      icon: '👁️',
    },
    {
      title: 'Empowerment',
      description: 'We believe in enabling individuals and communities to take charge of their own development and growth.',
      icon: '⚡',
    },
    {
      title: 'Excellence',
      description: 'Striving for the highest quality in all our programs and initiatives to maximize positive outcomes.',
      icon: '✨',
    },
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-primary font-semibold text-sm md:text-base tracking-wide block mb-3">
            WHO WE ARE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Mission & Values
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Project Daan is an NGO founded on the principle that every individual deserves access to opportunities for growth, education, and dignified living. We work across multiple sectors to create systemic change.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-accent hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="bg-muted rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Making a Difference Every Day
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">Our Approach</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                We combine grassroots engagement with strategic partnerships to ensure our programs reach those who need them most. Our team of dedicated professionals and volunteers work tirelessly to create sustainable solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">Our Impact</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                From education and healthcare to skill development and community infrastructure, Project Daan addresses multiple dimensions of human development. Every initiative is designed with long-term sustainability in mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
