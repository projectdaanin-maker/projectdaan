'use client'

export default function Impact() {
  const programs = [
    {
      title: 'Education Initiative',
      description: 'Providing quality education to underprivileged children through scholarships and learning centers.',
      icon: '📚',
      impact: '2,500 students reached',
    },
    {
      title: 'Healthcare Program',
      description: 'Ensuring accessible healthcare services and health awareness in rural and urban communities.',
      icon: '🏥',
      impact: '10,000+ lives impacted',
    },
    {
      title: 'Skill Development',
      description: 'Training youth with practical skills for employment and entrepreneurship opportunities.',
      icon: '🛠️',
      impact: '1,200 trained professionals',
    },
    {
      title: 'Community Development',
      description: 'Building infrastructure and resources to strengthen local communities and improve living conditions.',
      icon: '🏘️',
      impact: '50+ villages supported',
    },
    {
      title: 'Women Empowerment',
      description: 'Specialized programs focused on women&apos;s education, health, and economic independence.',
      icon: '👩‍🦰',
      impact: '3,000 women supported',
    },
    {
      title: 'Environmental Action',
      description: 'Promoting sustainable practices and environmental conservation in all our initiatives.',
      icon: '🌱',
      impact: '100k trees planted',
    },
  ]

  return (
    <section id="impact" className="py-16 md:py-24" style={{ backgroundColor: '#f5f4f0' }}>
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="font-semibold text-sm md:text-base tracking-wide block mb-3" style={{ color: '#3C3489' }}>
            OUR INITIATIVES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1a1a1a' }}>
            Programs Creating Change
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#666' }}>
            Through diverse initiatives, we address the multifaceted challenges facing communities. Each program is designed to create sustainable, measurable impact.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 hover:shadow-lg transition-all duration-300"
              style={{ border: '1px solid #e5e5e5' }}
            >
              <div className="text-5xl mb-4">{program.icon}</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1a1a1a' }}>
                {program.title}
              </h3>
              <p className="leading-relaxed mb-6" style={{ color: '#666' }}>
                {program.description}
              </p>
              <div className="pt-4" style={{ borderTop: '1px solid #e5e5e5' }}>
                <p className="font-semibold text-sm" style={{ color: '#3C3489' }}>
                  {program.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
