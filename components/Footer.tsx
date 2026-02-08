'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-base-300">
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-base-content/70">
          © {currentYear} Tasnim Sakib | All rights reserved.
        </p>
      </div>
    </footer>
  )
}