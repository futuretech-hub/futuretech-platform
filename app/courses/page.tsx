export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "Full-Stack Web Development",
      slug: "full-stack-web-dev",
      description: "Master modern web development with Next.js, React, Tailwind CSS, and Supabase.",
      difficulty: "Intermediate",
    },
    {
      id: 2,
      title: "Introduction to Python Programming",
      slug: "intro-to-python",
      description: "Learn the fundamentals of programming, data structures, and automation with Python.",
      difficulty: "Beginner",
    },
    {
      id: 3,
      title: "Advanced AI & Machine Learning",
      slug: "advanced-ai-ml",
      description: "Explore neural networks, LLM integrations, and practical AI application building.",
      difficulty: "Advanced",
    },
  ];

  return (
    <main className="min-h-screen p-8 lg:p-24 max-w-6xl mx-auto">
      <div className="mb-12">
        <a href="/" className="text-[#32DDF5] hover:underline text-sm font-mono">
          &larr; Back to Home
        </a>
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mt-4 mb-4">
          Courses <span className="text-[#32DDF5]">Catalogue</span>
        </h1>
        <p className="text-lg text-[#F3F6FC]/80">
          Explore our practical technology courses and start building your skill set today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div 
            key={course.id} 
            className="bg-[#101A35] p-6 rounded-xl border border-[#287CFF]/20 flex flex-col justify-between shadow-lg hover:border-[#32DDF5]/50 transition-all"
          >
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#287CFF]/20 text-[#32DDF5] mb-4">
                {course.difficulty}
              </span>
              <h2 className="text-xl font-bold mb-2 text-[#F3F6FC]">{course.title}</h2>
              <p className="text-[#F3F6FC]/70 text-sm mb-6">{course.description}</p>
            </div>
            <a
              href={`/courses/${course.slug}`}
              className="w-full text-center px-4 py-2 rounded-lg bg-[#287CFF] hover:bg-[#287CFF]/80 text-white font-semibold text-sm transition-all shadow-md shadow-[#287CFF]/20"
            >
              View Course
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
