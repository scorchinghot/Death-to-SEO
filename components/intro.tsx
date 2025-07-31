import Image from "next/image";
import logic from "../public/logic.png"

export default function Intro() {
    return (
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              What IS{" "}
              <span className="font-light">Computer Science?</span>
            </h2>
            <div className="mt-12 space-y-6 text-lg leading-relaxed text-gray-500">
              <p>
                Okay, so what exactly is computer science? At the most basic level, you can think of it as the study of logic and how we use it to get things done. You might already do this naturally when you’re organizing things or solving problems, but CS takes that intuition and adds a solid math and physics foundation to make things more intuitive. Once you get how it works, you’ll see that it’s all about manipulating information to create solutions—whether it’s building apps, analyzing data, or even understanding how computers make decisions. The tricky part? Mastering the rigor of the process—learning how to break things down step-by-step. But once you get that, the rest clicks into place.
              </p>
              <p>
                So, It’s all about understanding how things work! But not just how—it’s also about why they work that way. From the apps we use to the games we play, computer science is the magic behind it all. Here, we’re going to dig into how computers think, why they think that way, and how we can use that logic to make awesome things happen. Ready to see the world of tech in a new way?
              </p>
            </div>
          </div>
          <div className="relative flex items-center">
            <div className="relative overflow-hidden rounded-lg">
              <div className="aspect-[4/3] w-full">
                <Image 
                  src={logic}
                  height={600}
                  width={800}
                  className="rounded-lg shadow-md object-contain"
                  alt={"How logic guides action"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }