'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-white py-12 md:py-16" style={{ backgroundColor: '#3C3489' }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h4 className="text-lg font-bold mb-4">Project Daan</h4>
            <p className="leading-relaxed text-sm" style={{ color: '#EEEDFE' }}>
              Transforming communities through education, healthcare, and volunteer engagement.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="transition-colors" style={{ color: '#EEEDFE' }} onMouseEnter={(e) => e.currentTarget.style.color = '#white'} onMouseLeave={(e) => e.currentTarget.style.color = '#EEEDFE'}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#impact" className="transition-colors" style={{ color: '#EEEDFE' }} onMouseEnter={(e) => e.currentTarget.style.color = '#white'} onMouseLeave={(e) => e.currentTarget.style.color = '#EEEDFE'}>
                  Our Programs
                </a>
              </li>
              <li>
                <a href="#volunteer" className="transition-colors" style={{ color: '#EEEDFE' }} onMouseEnter={(e) => e.currentTarget.style.color = '#white'} onMouseLeave={(e) => e.currentTarget.style.color = '#EEEDFE'}>
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors" style={{ color: '#EEEDFE' }} onMouseEnter={(e) => e.currentTarget.style.color = '#white'} onMouseLeave={(e) => e.currentTarget.style.color = '#EEEDFE'}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#impact" className="transition-colors" style={{ color: '#EEEDFE' }} onMouseEnter={(e) => e.currentTarget.style.color = '#white'} onMouseLeave={(e) => e.currentTarget.style.color = '#EEEDFE'}>
                  Education
                </a>
              </li>
              <li>
                <a href="#impact" className="transition-colors" style={{ color: '#EEEDFE' }} onMouseEnter={(e) => e.currentTarget.style.color = '#white'} onMouseLeave={(e) => e.currentTarget.style.color = '#EEEDFE'}>
                  Healthcare
                </a>
              </li>
              <li>
                <a href="#impact" className="transition-colors" style={{ color: '#EEEDFE' }} onMouseEnter={(e) => e.currentTarget.style.color = '#white'} onMouseLeave={(e) => e.currentTarget.style.color = '#EEEDFE'}>
                  Skill Development
                </a>
              </li>
              <li>
                <a href="#impact" className="transition-colors" style={{ color: '#EEEDFE' }} onMouseEnter={(e) => e.currentTarget.style.color = '#white'} onMouseLeave={(e) => e.currentTarget.style.color = '#EEEDFE'}>
                  Community Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors" style={{ backgroundColor: '#AFA9EC' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EEEDFE'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#AFA9EC'} aria-label="Facebook">
                f
              </a>
              <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors" style={{ backgroundColor: '#AFA9EC' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EEEDFE'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#AFA9EC'} aria-label="Twitter">
                𝕏
              </a>
              <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors" style={{ backgroundColor: '#AFA9EC' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EEEDFE'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#AFA9EC'} aria-label="LinkedIn">
                in
              </a>
              <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors" style={{ backgroundColor: '#AFA9EC' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EEEDFE'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#AFA9EC'} aria-label="Instagram">
                📷
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="pt-8" style={{ borderTop: '1px solid #AFA9EC' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: '#EEEDFE' }}>
              © {currentYear} Project Daan. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="transition-colors" style={{ color: '#EEEDFE' }} onMouseEnter={(e) => e.currentTarget.style.color = '#white'} onMouseLeave={(e) => e.currentTarget.style.color = '#EEEDFE'}>
                Privacy Policy
              </a>
              <a href="#" className="transition-colors" style={{ color: '#EEEDFE' }} onMouseEnter={(e) => e.currentTarget.style.color = '#white'} onMouseLeave={(e) => e.currentTarget.style.color = '#EEEDFE'}>
                Terms of Service
              </a>
              <a href="#" className="transition-colors" style={{ color: '#EEEDFE' }} onMouseEnter={(e) => e.currentTarget.style.color = '#white'} onMouseLeave={(e) => e.currentTarget.style.color = '#EEEDFE'}>
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
