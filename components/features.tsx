import Image from "next/image"
import google from "../public/google.png"
import data from "../public/data.png"
import ai from "../public/ai.png"
import basics from "../public/basics.png"
import science from "../public/science.png"

export default function Features() {
  return (
    <div className="mx-auto mb-24 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative mb-32 grid gap-12 lg:grid-cols-2">
        <div className="relative h-[500px]">
          <svg
            viewBox="0 0 600 600"
            className="absolute h-full w-full"
            style={{ filter: "blur(25px)" }}
          >
            <g transform="translate(300,300)">
              <path
                d="M145.1,-157.3C183.6,-134.2,207.8,-81.6,209.9,-29.5C212,22.6,191.9,74.2,157.8,108.9C123.7,143.6,75.5,161.3,23.6,172.5C-28.3,183.7,-83.9,188.3,-129.2,164.9C-174.5,141.5,-209.5,90.1,-216.9,34.1C-224.3,-21.9,-204.1,-82.5,-165.9,-108.9C-127.7,-135.3,-71.6,-127.5,-19.2,-134.6C33.2,-141.7,106.6,-180.4,145.1,-157.3Z"
                fill="rgba(147, 197, 253, 0.5)"
              />
              <path
                d="M137.1,-122.9C174.4,-82.5,198.4,-21.8,186.6,31.1C174.8,84,127.2,129.2,71.6,156.8C16,184.4,-47.6,194.4,-98.6,169.7C-149.6,145,-188,85.5,-190.8,24.9C-193.6,-35.7,-160.8,-97.4,-116.8,-138.8C-72.8,-180.2,-17.6,-201.3,25.9,-190.1C69.4,-178.9,99.8,-163.3,137.1,-122.9Z"
                fill="rgba(196, 181, 253, 0.5)"
              />
            </g>
          </svg>
          <div className="text-sm font-medium uppercase tracking-wider text-gray-500">
            "Computer science is no more about computers than astronomy is about telescopes."
          </div>
          <div className="mt-6 flex items-center gap-4">
            <span className="font-medium text-gray-900">— Donald Knuth</span>
          </div>
          <Image
            src={google}
            alt="How Google Search works"
            width={700}
            height={500}
            className="rounded-lg mt-10 object-contain shadow-2xl"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Take "X" for Example
          </h2>
          <p className="mt-4 text-gray-500">
            Like search engines. Ever wonder how Google knows what you want in a split second? It’s all about algorithms—those fancy rules that tell computers how to organize and rank information. But here’s the cool part: Google’s search algorithm isn’t just a list of steps. It’s a constantly evolving system that gets better over time by learning from users. And that’s how computer scientists learn to approach problems: by understanding the steps and the logic behind the process. The key is not just knowing what happens, but how we can make it better.
          </p>
        </div>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <div className="mb-6">
            <svg
              viewBox="0 0 100 100"
              className="h-12 w-12"
              style={{ filter: "blur(8px)" }}
            >
              <g transform="translate(50,50)">
                <path
                  d="M20,-23.9C25.9,-16.9,30.6,-8.5,30.7,0.1C30.8,8.7,26.3,17.3,20.4,24.4C14.5,31.5,7.2,37,-0.4,37.4C-8,37.8,-16.1,33,-22.9,26.2C-29.7,19.4,-35.3,9.7,-35.4,-0.1C-35.5,-9.9,-30.1,-19.8,-23.2,-26.8C-16.3,-33.8,-8.1,-37.9,0.1,-38C8.4,-38.1,16.7,-34.2,20,-23.9Z"
                  fill="rgba(147, 197, 253, 0.5)"
                />
                <path
                  d="M18.3,-22.1C23.3,-15.1,26.7,-7.6,26.8,0.1C26.9,7.8,23.7,15.6,18.6,21.9C13.5,28.2,6.7,33,-0.3,33.3C-7.3,33.6,-14.7,29.4,-20.8,23.5C-26.9,17.6,-31.7,8.8,-31.8,-0.1C-31.9,-9,-27.2,-17.9,-20.8,-24C-14.4,-30.1,-7.2,-33.4,0.1,-33.5C7.4,-33.6,14.8,-31.4,18.3,-22.1Z"
                  fill="rgba(196, 181, 253, 0.5)"
                />
              </g>
            </svg>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How to Get Started in Computer Science
          </h2>
          <p className="mt-4 text-gray-500">
            So, you want to dive into computer science? Awesome! The trick is to start with the logic behind it all. Ask yourself: What are we trying to do? Why does this work? Once you understand that, you’ll see how everything else falls into place. From there, you’ll have a solid foundation to start tackling more complicated stuff like coding, algorithms, or even quantum computing. This site is all about explaining CS topics from the ground up. Imagine trying to sort a bunch of toys by color—first, you need a plan for how to do it. Once you understand the logic behind it, the rest is easy!
          </p>
          <ul className="mt-8 grid gap-3 text-gray-500 sm:grid-cols-2">
            <li className="flex items-center gap-2">
              <svg
                className="h-1.5 w-1.5 fill-current text-blue-500"
                viewBox="0 0 6 6"
              >
                <circle cx="3" cy="3" r="3" />
              </svg>
                Understand the Basics of Logic: Start by getting comfortable with the core principles of logic. This will be your foundation for all future learning in computer science.
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="h-1.5 w-1.5 fill-current text-blue-500"
                viewBox="0 0 6 6"
              >
                <circle cx="3" cy="3" r="3" />
              </svg>
                Learn How to Think Algorithmically: Try breaking down everyday problems into smaller steps. Practice thinking about how you can organize data or tasks to solve problems efficiently.
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="h-1.5 w-1.5 fill-current text-blue-500"
                viewBox="0 0 6 6"
              >
                <circle cx="3" cy="3" r="3" />
              </svg>
                Understand the Role of Data: At the heart of computer science is the manipulation of data. Learn how data is stored, retrieved, and processed.
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="h-1.5 w-1.5 fill-current text-blue-500"
                viewBox="0 0 6 6"
              >
                <circle cx="3" cy="3" r="3" />
              </svg>
                Dive into Specialized Topics: Once you're comfortable with the basics, explore areas like artificial intelligence (AI), web development, or cybersecurity.
            </li>
          </ul>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 mt-24">
          <Image
            src={basics}
            alt="Logic gates"
            width={400}
            height={300}
            className="rounded-lg object-contain"
          />
          <Image
            src={science}
            alt="How algorithm works"
            width={400}
            height={300}
            className="rounded-lg object-contain"
          />
          <Image
            src={data}
            alt="How data structures work"
            width={400}
            height={300}
            className="rounded-lg object-contain"
          />
          <Image
            src={ai}
            alt="Advance topics"
            width={400}
            height={300}
            className="rounded-lg object-contain"
          />
        </div>
      </div>
    </div>
  )
}