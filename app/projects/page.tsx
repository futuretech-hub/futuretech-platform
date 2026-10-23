export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Campus Study Buddy AI",
      slug: "campus-study-buddy-ai",
      summary: "An AI-powered peer matching app for university study groups.",
      submitter: "Alex Rivera",
      status: "Approved",
    },
    {
      id: 2,
      title: "EcoTrack Carbon Footprint Analyzer",
      slug: "ecotrack-carbon-analyzer",
      summary: "A student initiative tool tracking daily campus energy consumption.",
      submitter: "Sarah Chen",
      status: "Approved",
    },
  ];

  return (
    <main className="min-h-screen p-8 lg:p-24 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <div>
          <a href="/" className="text-[#32DDF5] hover:underline text-sm font-mono">
            &larr; Back to Home
          </a>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mt-4 mb-4">
            Projects <span className="text-[#32DDF5]">Gallery</span>
          </h1>
          <p className="text-lg text-[#F3F6FC]/80">
            Discover real-world projects built by student technologists.
          </p>
        </div>
        <a
          href="/projects/submit"
          className="mt-4 md:mt-0 px-6 py-3 rounded-lg bg-[#287CFF] hover:bg-[#287CFF]/80 text-white font-semibold text-sm transition-all shadow-lg shadow-[#287CFF]/30"
        >
          Submit Project
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-[#101A35] p-6 rounded-xl border border-[#287CFF]/20 flex flex-col justify-between shadow-lg hover:border-[#32DDF5]/50 transition-all"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#32DDF5]/20 text-[#32DDF5]">
                  {project.status}
                </span>
                <span className="text-xs text-[#F3F6FC]/60 font-mono">By {project.submitter}</span>
              </div>
              <h2 className="text-xl font-bold mb-2 text-[#F3F6FC]">{project.title}</h2>
              <p className="text-[#F3F6FC]/70 text-sm mb-6">{project.summary}</p>
            </div>
            <a
              href={`/projects/${project.slug}`}
              className="w-full text-center px-4 py-2 rounded-lg bg-[#070B1B] hover:bg-[#070B1B]/80 border border-[#287CFF]/40 text-[#32DDF5] font-semibold text-sm transition-all"
            >
              View Project Details
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
