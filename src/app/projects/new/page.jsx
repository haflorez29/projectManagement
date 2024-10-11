'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function NewProjectPage() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description }),
    })

    if (res.ok) {
      router.push('/dashboard')
    } else {
      const data = await res.json()
      console.error('Failed to create project:', data.error)
    }
  }

  return (
    <div className="container px-4 py-8 bg-emerald-100 h-svh">
      <h1 className="mb-6 text-3xl font-bold text-emerald-700">Crear Nuevo Proyecto</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-bold text-gray-700">
            Nombre del Proyecto
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="mb-2 block text-sm font-bold text-gray-700">
            Descripción
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none focus:shadow-outline"
            rows={4}
          />
        </div>
        <button
          type="submit"
          className="rounded bg-emerald-500 px-4 py-2 font-bold text-white hover:bg-emerald-700 focus:outline-none focus:shadow-outline"
        >
          Crear nuevo proyecto
        </button>
      </form>
    </div>
  )
}