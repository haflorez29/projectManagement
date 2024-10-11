import { getServerSession } from "next-auth/next"
import Link from 'next/link'

export default async function Home() {
  const session = await getServerSession()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-4">Welcome to Next.js Authentication</h1>
        {session ? (
          <p>You are logged in as {session.user?.name}</p>
        ) : (
          <Link href="/login" className="text-blue-500 hover:underline">
            Ingresar
          </Link>
        )}
      </div>
    </main>
  )
}