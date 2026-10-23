export default function AboutPage() {
  return (
    <main className="min-h-screen p-8 lg:p-24 max-w-5xl mx-auto">
      <div className="mb-12">
        <a href="/" className="text-[#32DDF5] hover:underline text-sm font-mono">
          &larr; Back to Home
        </a>
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mt-4 mb-6">
          About <span className="text-[#32DDF5]">FutureTech</span>
        </h1>
        <p className="text-lg text-[#F3F6FC]/80 leading-relaxed">
          FutureTech is a tailored technology society platform designed for students to learn practical skills, build real-world projects, join interactive events, and collaborate.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-[#101A35] p-6 rounded-xl border border-[#287CFF]/20 shadow-lg">
          <h2 className="text-2xl font-bold text-[#32DDF5] mb-3">Our Mission</h2>
          <p className="text-[#F3F6FC]/80">
            Empowering the next generation of student technologists through hands-on learning, mentorship, and collaborative community building.
          </p>
        </div>

        <div className="bg-[#101A35] p-6 rounded-xl border border-[#287CFF]/20 shadow-lg">
          <h2 className="text-2xl font-bold text-[#32DDF5] mb-3">Our Vision</h2>
          <p className="text-[#F3F6FC]/80">
            To bridge the gap between academic theory and practical industry skills, creating a vibrant ecosystem of builders and innovators.
          </p>
        </div>
      </div>

      <div className="bg-[#101A35] p-8 rounded-xl border border-[#32DDF5]/30">
        <h2 className="text-2xl font-bold mb-4">What We Do</h2>
        <ul className="list-disc list-inside space-y-2 text-[#F3F6FC]/80">
          <li>Interactive technical courses and learning paths</li>
          <li>Real-world project building and showcases</li>
          <li>Workshops, hackathons, and tech events</li>
          <li>Peer collaboration and expert mentorship</li>
        </ul>
      </div>
    </main>
  );
}
