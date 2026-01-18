import './globals.css'

export const metadata = {
  title: 'Sunnyside Family Dental | Austin, TX',
  description: 'Where healthy smiles grow. Family dentistry in Austin, TX offering gentle care for patients of all ages.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
