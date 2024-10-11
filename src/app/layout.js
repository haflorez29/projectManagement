import './globals.css'
import { Inter } from 'next/font/google'
import { getServerSession } from "next-auth/next"
import SessionProvider from './components/SessionProvider'

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}) {
  const session = await getServerSession()

  return (
    <html lang="en">
      <body className={`${inter.className} bg-emerald-100`}>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}