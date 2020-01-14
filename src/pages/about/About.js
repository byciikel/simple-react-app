import React from 'react'
import '../../css/tailwind.css'

export default function About() {
  return (
    <div className="text-center">
      <header className="bg-green-900 m-6 p-6 rounded shadow-lg">
        <h1 className="text-white text-3xl mb-6">Ini Tampilan About!</h1>
        <a href="/#/" class="bg-green hover:bg-white text-white font-semibold hover:text-green-900 py-2 px-4 border border-white-500 hover:border-transparent rounded">
          Home
        </a>
      </header>
      <p className="text-base">
        Ubah kode pada <code>src/pages/about/About.js</code> untuk melihat perubahan.
      </p>
    </div>
  )
}
