import React from 'react'
import '../../css/tailwind.css'

export default function Home() {
  return (
    <div className="text-center">
      <header className="bg-purple-900 m-6 p-6 rounded shadow-lg">
        <h1 className="text-white text-3xl mb-6">Ini Tampilan Home!</h1>
        <a href="/#/about" class="bg-purple hover:bg-white text-white font-semibold hover:text-purple-900 py-2 px-4 border border-white-500 hover:border-transparent rounded">
          About
        </a>
      </header>
      <p className="text-base">
        Ubah kode pada <code>src/pages/home/Home.js</code> untuk melihat perubahan.
      </p>
    </div>
  )
}
