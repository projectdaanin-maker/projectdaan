import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Project Daan | Transforming Communities Through Service',
  description: 'Project Daan is an NGO dedicated to creating positive social impact through community service, education, and volunteer engagement.',
  openGraph: {
    title: 'Project Daan | Transforming Communities Through Service',
    description: 'Project Daan is an NGO dedicated to creating positive social impact through community service, education, and volunteer engagement.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#1F5233',
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
