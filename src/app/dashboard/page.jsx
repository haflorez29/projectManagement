import { getServerSession } from "next-auth/next"
import { redirect } from 'next/navigation'
import ProjectList from '../components/ProjectList'

export default async function DashboardPage() {
  const session = await getServerSession()

  if (!session) {
    redirect('/login')
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-emerald-100 h-svh">
      <h1 className="mb-6 text-3xl font-bold text-emerald-700">Dashboard</h1>
      <ProjectList />
    </div>
  )
}