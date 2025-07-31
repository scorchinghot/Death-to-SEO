import React from 'react'
import Link from 'next/link'

const qc = () => {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 text-white">
      <header className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          The Quickest Way to Learn Quantum Computing
        </h1>
        <p className="text-xl text-gray-300">
            Let's clear something up right from the start: Quantum computing isn’t some mysterious or impossible-to-understand field. It’s an evolution of the same principles you’ve learned in classical computing, but with a twist—quantum mechanics. In classical computing, we work with bits that can either be 1 or 0, and the operations on these bits are pretty intuitive. But in quantum computing, we leverage quantum mechanics to manipulate data using quantum bits (qubits), which can exist in a superposition of both 1 and 0 simultaneously. This allows quantum computers to process more data at once and solve certain problems exponentially faster than classical computers.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">Phase 1: Get Your Prerequisites in Order</h2>
        <p className="mb-6 text-gray-300">
          Before diving into quantum algorithms and programming, it's essential to build a strong foundation in a few key areas.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-medium mb-3 text-blue-400">1. Linear Algebra</h3>
            <p className="mb-4 text-gray-300">
              Quantum computing relies heavily on linear algebra to describe quantum states and operations. Concepts like vectors, matrices, and eigenvalues are fundamental to quantum mechanics.
            </p>
            <h4 className="text-xl mb-2 text-gray-200">Recommended Resources:</h4>
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-300">
              <li><Link href="https://youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" target='_blank' className="text-blue-400 hover:underline">Essence of Linear Algebra by 3Blue1Brown</Link></li>
              <li><Link href="https://youtube.com/playlist?list=PLE7DDD91010BC51F8" target='_blank' className="text-blue-400 hover:underline">MIT 18.06 Linear Algebra, Spring 2005</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-3 text-blue-400">2. Probability Theory</h3>
            <p className="mb-4 text-gray-300">
              Quantum computing is inherently probabilistic. Understanding probability theory is essential to grasp how quantum algorithms work.
            </p>
            <h4 className="text-xl mb-2 text-gray-200">Recommended Resources:</h4>
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-300">
              <li><Link href="https://youtube.com/playlist?list=PLoROMvodv4rOpr_A7B9SriE_iZmkanvUg" target='_blank' className="text-blue-400 hover:underline">Stanford CS109: Probability for Computer Scientists</Link></li>
              <li><Link href="https://youtube.com/playlist?list=PLUl4u3cNGP60hI9ATjSFgLZpbNJ7myAg6" target='_blank' className="text-blue-400 hover:underline">MIT RES.6-012: Introduction to Probability, Spring 2018</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-3 text-blue-400">3. Introduction to Quantum Mechanics</h3>
            <p className="mb-4 text-gray-300">
              Understanding the basics of quantum mechanics—including superposition, entanglement, and wave-particle duality—is essential to understanding quantum computing.
            </p>
            <h4 className="text-xl mb-2 text-gray-200">Recommended Resources:</h4>
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-300">
              <li><Link href="https://youtu.be/JhHMJCUmq28" target='_blank' className="text-blue-400 hover:underline">Quantum Computers Explained by Kurzgesagt, Veritasium, and others</Link></li>
              <li><Link href="https://youtu.be/MzRCDLre1b4" target='_blank' className="text-blue-400 hover:underline">Quantum Computers Explained by Kurzgesagt, Veritasium, and others</Link></li>
              <li><Link href="https://youtu.be/Usu9xZfabPM" target='_blank' className="text-blue-400 hover:underline">Quantum Computers Explained by Kurzgesagt, Veritasium, and others</Link></li>
              <li><Link href="https://youtu.be/-UrdExQW0cs" target='_blank' className="text-blue-400 hover:underline">Quantum Computers Explained by Kurzgesagt, Veritasium, and others</Link></li>
              <li><Link href="https://youtu.be/g_IaVepNDT4" target='_blank' className="text-blue-400 hover:underline">Quantum Computers Explained by Kurzgesagt, Veritasium, and others</Link></li>
              <li><Link href="https://youtu.be/WIyTZDHuarQ" target='_blank' className="text-blue-400 hover:underline">Quantum Computers Explained by Kurzgesagt, Veritasium, and others</Link></li>
              <li><Link href="https://youtu.be/zNzzGgr2mhk" target='_blank' className="text-blue-400 hover:underline">Quantum Computers Explained by Kurzgesagt, Veritasium, and others</Link></li>
              <li><Link href="https://youtu.be/a8FTr2qMutA" target='_blank' className="text-blue-400 hover:underline">Quantum Computers Explained by Kurzgesagt, Veritasium, and others</Link></li>
              <li><Link href="https://youtu.be/ZuvK-od647c" target='_blank' className="text-blue-400 hover:underline">Quantum Computers Explained by Kurzgesagt, Veritasium, and others</Link></li>
              <li><Link href="https://youtu.be/ZuvK-od647c" target='_blank' className="text-blue-400 hover:underline">Quantum Computers Explained by Kurzgesagt, Veritasium, and others</Link></li>
              <li><Link href="https://youtube.com/playlist?list=PLUl4u3cNGP61-9PEhRognw5vryrSEVLPr" target='_blank' className="text-blue-400 hover:underline">MIT 8.04 Quantum Physics I</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">Phase 2: Dive Into Quantum Computing</h2>
        <p className="mb-6 text-gray-300">
          Now that you've built your foundational knowledge, it's time to dive into the actual quantum computing material.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-medium mb-3 text-blue-400">1. Quantum Computing Theory Textbooks</h3>
            <p className="mb-4 text-gray-300">
              A solid textbook can provide a comprehensive guide to quantum computing theory and algorithms.
            </p>
            <h4 className="text-xl mb-2 text-gray-200">Recommended Resources:</h4>
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-300">
              <li><Link href="https://en.wikipedia.org/wiki/Quantum_Computation_and_Quantum_Information" target='_blank' className="text-blue-400 hover:underline">Quantum Computation and Quantum Information by Nielsen and Chuang</Link></li>
              <li><Link href="https://youtube.com/playlist?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR" target='_blank' className="text-blue-400 hover:underline">Introduction to Quantum Computing by Qiskit (IBM)</Link></li>
              <li><Link href="https://youtube.com/playlist?list=PLOFEBzvs-VvqKKMXX4vbi4EB1uaErFMSO&si=w0dlRL__a2UaTnHw" target='_blank' className="text-blue-400 hover:underline">Understanding Quantum Information & Computation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-3 text-blue-400">2. Practical Quantum Programming</h3>
            <p className="mb-4 text-gray-300">
              Learn hands-on programming with tools like Qiskit and Google Cirq to simulate quantum algorithms.
            </p>
            <h4 className="text-xl mb-2 text-gray-200">Recommended Resources:</h4>
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-300">
              <li><Link href="https://learning.quantum.ibm.com/" target='_blank' className="text-blue-400 hover:underline">IBM Qiskit Learning Portal</Link></li>
              <li><Link href="https://github.com/quantumlib/Cirq" target='_blank' className="text-blue-400 hover:underline">Google Cirq GitHub</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">Phase 3: Explore Advanced Topics and Research</h2>
        <p className="mb-6 text-gray-300">
          Once you’ve covered the basics, it’s time to dive into advanced topics like quantum error correction, quantum cryptography, and quantum machine learning.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-medium mb-3 text-blue-400">1. Explore Quantum Research</h3>
            <p className="mb-4 text-gray-300">
              Quantum computing is an evolving field, and staying up-to-date with ongoing research is key.
            </p>
            <h4 className="text-xl mb-2 text-gray-200">Recommended Resources:</h4>
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-300">
              <li><Link href="https://www.cs.umd.edu/~xwu/mini_lib.html" target='_blank' className="text-blue-400 hover:underline">Mini-Library on Quantum Information and Computation</Link></li>
              <li><Link href="https://scholar.google.com" target='_blank' className="text-blue-400 hover:underline">Google Scholar - Research Papers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-3 text-blue-400">2. Join the Quantum Community</h3>
            <p className="mb-4 text-gray-300">
                Get involved in the quantum computing community through forums, hackathons, and research collaborations. This will help you stay motivated and learn from others in the field.
            </p>
            <h4 className="text-xl mb-2 text-gray-200">Recommended Resources:</h4>
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-300">
              <li><Link href="https://github.com/desireevl/awesome-quantum-computing" target='_blank' className="text-blue-400 hover:underline">Quantum Computing GitHub Repositories</Link></li>
              <li><Link href="https://www.reddit.com/r/QuantumComputing/" target='_blank' className="text-blue-400 hover:underline">Reddit - Quantum Computing</Link></li>
              <li><Link href="https://quantum.country/" target='_blank' className="text-blue-400 hover:underline">Interactive Learning Platforms</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-3 text-blue-400">3. Additional Resources</h3>
            <p className="mb-4 text-gray-300">
            (Optional) Probability: “Introduction to Probability” by Blitzstein & Hwang or Khan Academy. | Classical Algorithms: "Introduction to Algorithms" by Cormen, Leiserson, Rivest, and Stein (CLRS) or MIT
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-300">
              <li><Link href="https://youtu.be/-UlxHPIEVqA" target='_blank' className="text-blue-400 hover:underline">Map of Quantum Computing</Link></li>
              <li><Link href="https://youtube.com/playlist?list=PL84C10A9CB1D13841&si=orORz00NSaKEFGCW" target='_blank' className="text-blue-400 hover:underline">Modern Physics: Quantum Mechanics (Stanford)</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  )
}

export default qc

