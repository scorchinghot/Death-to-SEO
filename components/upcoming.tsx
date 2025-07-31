export default function Upcoming() {
  return (
    <section className="relative mb-36 max-w-6xl rounded-3xl mx-auto py-20 bg-[#F0F9FF]">
      <div className="absolute rounded-3xl inset-0 bg-gradient-to-r from-[#00B5D8] via-[#0EA5E9] to-[#FB923C] opacity-20 animate-pulse"></div>

      <div className="relative z-10 text-center mb-12 px-4">
        <h2 className="text-5xl font-extrabold text-[#adb0b8] mb-6">Upcoming!</h2>
        <p className="text-xl text-[#4B5563]">Get excited for cutting-edge insights into computer science topics!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        <div className="group relative flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9] to-[#3B82F6] opacity-20 transition-all duration-300 ease-in-out"></div>
          <h3 className="text-2xl font-semibold text-[#1E3A8A] z-10">Mastering Algorithms</h3>
          <p className="text-md text-[#6B7280] z-10">Dive deep into algorithmic problem-solving techniques for optimal solutions.</p>
          <button className="mt-4 px-6 py-2 bg-[#1E3A8A] text-white rounded-full font-semibold transition-transform transform hover:scale-105 hover:bg-[#2563EB] z-10">
            Explore
          </button>
        </div>

        <div className="group relative flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FB923C] to-[#F97316] opacity-20 transition-all duration-300 ease-in-out"></div>
          <h3 className="text-2xl font-semibold text-[#F97316] z-10">Introduction to AI</h3>
          <p className="text-md text-[#6B7280] z-10">Start your AI journey with a hands-on approach to neural networks and learning algorithms.</p>
          <button className="mt-4 px-6 py-2 bg-[#F97316] text-white rounded-full font-semibold transition-transform transform hover:scale-105 hover:bg-[#FB923C] z-10">
            Learn More
          </button>
        </div>

        <div className="group relative flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#9333EA] to-[#8B5CF6] opacity-20 transition-all duration-300 ease-in-out"></div>
          <h3 className="text-2xl font-semibold text-[#9333EA] z-10">Blockchain Basics</h3>
          <p className="text-md text-[#6B7280] z-10">Learn the principles behind blockchain technology and its revolutionary impact.</p>
          <button className="mt-4 px-6 py-2 bg-[#9333EA] text-white rounded-full font-semibold transition-transform transform hover:scale-105 hover:bg-[#7C3AED] z-10">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
