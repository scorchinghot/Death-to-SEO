import React from 'react'
import Link from 'next/link'

const bg = () => {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 text-white">
      <header className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Learn All the Basics of Computer Science in 3 Phases
        </h1>
        <p className="text-xl text-gray-300">
          Navigate your way from beginner to advanced with this comprehensive roadmap
        </p>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">Phase 1: If You're an Absolute Beginner, Start Here</h2>
        <p className="mb-6 text-gray-300">
          In this phase, you'll get familiar with the core concepts of computer science and programming. 
          These resources are ideal for absolute beginners with little to no prior knowledge.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-medium mb-3 text-blue-400">Option 1: Crash Course Computer Science</h3>
            <p className="mb-4 text-gray-300">
              In 40 engaging episodes, Carrie Anne Philbin teaches you the basics of computer science! 
              This course is based on introductory college-level material and also follows the AP Computer Science Principles guidelines.
            </p>
            <h4 className="text-xl mb-2 text-gray-200">By the end of this course, you will be able to:</h4>
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-300">
              <li>Outline the history of computers and the design decisions that led to modern computing</li>
              <li>Describe the basic elements of programming and software</li>
              <li>Identify the components of computer hardware and their functions</li>
              <li>Understand how computers have evolved and their impact on society</li>
              <li>Appreciate how far computers have come and imagine where they could take us next</li>
            </ul>
            <Link href="https://youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo&si=QO8vD5rboP7aCR5E" target='_blank' className="text-blue-400 hover:underline">
              Start the Crash Course →
            </Link>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-3 text-blue-400">Option 2: AP®︎/College Computer Science Principles (Khan Academy)</h3>
            <p className="mb-4 text-gray-300">
              If you're looking for a more structured learning path with plenty of practice, this free course from Khan Academy 
              covers digital information, the Internet, cybersecurity, programming, algorithms, simulations, and data analysis. 
              You'll also have access to 800+ practice questions and instructional articles and videos.
            </p>
            <Link href="https://www.khanacademy.org/computing/ap-computer-science-principles" target='_blank' className="text-blue-400 hover:underline">
              Explore Khan Academy CS →
            </Link>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-3 text-blue-400">Optional Path: If You Already Know Some CS</h3>
            <p className="mb-4 text-gray-300">
              If you're comfortable with basic programming concepts, or you want to jump into a more challenging course, 
              try CS50 from Harvard University. This course teaches you how to solve problems both with and without code, 
              and focuses on computational thinking, algorithms, data structures, and how computers work under the hood.
            </p>
            <Link href="https://cs50.harvard.edu/x/" target='_blank' className="text-blue-400 hover:underline">
              Dive into CS50 →
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">Phase 2: Math Time!</h2>
        <p className="mb-6 text-gray-300">
          Computer science relies heavily on mathematics, especially in areas like algorithms, cryptography, and data analysis. 
          Here's where you'll build the necessary mathematical foundation.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-medium mb-3 text-blue-400">Option 1: Book Approach - Mathematics for Computer Science</h3>
            <p className="mb-4 text-gray-300">
              This textbook covers elementary discrete mathematics for computer science and engineering, including formal logic, 
              proof methods, graph theory, counting principles, probability, and more. It's a great resource if you prefer a 
              structured, book-based learning style.
            </p>
            <p className="italic text-gray-400">
              Book: Mathematics for Computer Science by Albert R. Meyer, Eric Lehman, and Frank Thomson Leighton
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-3 text-blue-400">Option 2: Video Approach - freeCodeCamp Math Playlist</h3>
            <p className="mb-4 text-gray-300">
              For those who prefer video lessons, freeCodeCamp offers a comprehensive math playlist that covers foundational 
              topics like algebra, calculus, and discrete math—just enough to feel confident and continue your CS journey 
              without being overwhelmed by complex math concepts.
            </p>
            <Link href="https://www.youtube.com/playlist?list=PLWKjhJtqVAbl5SlE6aBHzUVZ1e6q1Wz0v" target='_blank' className="text-blue-400 hover:underline">
              Watch Math Playlist →
            </Link>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">Phase 3: Time to Dive Deeper</h2>
        <p className="mb-6 text-gray-300">
          Once you've covered the basics, you're ready to specialize in a topic that interests you most, 
          or take a more structured, degree-like approach.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-medium mb-3 text-blue-400">Option 1: Dive into a CS Topic of Your Choice</h3>
            <p className="mb-4 text-gray-300">
              At this point, you can dive into any area of computer science that interests you. Whether you're into 
              artificial intelligence, web development, machine learning, or cybersecurity, the next logical step is 
              to explore these topics in more depth. There are countless free resources and online courses across 
              platforms like Coursera, edX, and Udacity to help you specialize.
            </p>
            <Link href="/resources" target='_blank' className="text-blue-400 hover:underline">
              Explore Resources →
            </Link>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-3 text-blue-400">Option 2: Open Source Society University (OSSU) Curriculum</h3>
            <p className="mb-4 text-gray-300">
              If you prefer a formal structure, the OSSU Computer Science curriculum is a comprehensive, self-paced 
              curriculum designed to provide a complete education in computer science. It's based on undergraduate 
              computer science degree requirements and uses high-quality, free online resources. This option is perfect 
              for those who want a deep, well-rounded understanding of CS principles and who are ready to study 
              independently with support from a community of learners.
            </p>
            <Link href="https://github.com/ossu/computer-science" target='_blank' className="text-blue-400 hover:underline">
              Explore OSSU Curriculum →
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}

export default bg