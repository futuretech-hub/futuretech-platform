export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-[#287CFF]/20 bg-[#101A35] pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:p-4">
          Welcome to&nbsp;
          <code className="font-bold text-[#32DDF5]">FutureTech Platform</code>
        </p>
      </div>

      <div className="flex flex-col items-center text-center my-12">
        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-4">
          Build the Future with <span className="text-[#32DDF5]">Technology</span>
        </h1>
        <p className="max-w-2xl text-lg text-[#F3F6FC]/80 mb-8">
          A tailored technology society platform for students to learn practical skills, build projects, join events, and collaborate.
        </p>
        <div className="flex gap-4">
          <a
            href="/auth/sign-up"
            className="px-6 py-3 rounded-lg bg-[#287CFF] hover:bg-[#287CFF]/80 text-white font-semibold transition-all shadow-lg shadow-[#287CFF]/30"
          >
            Get Started
          </a>
          <a
            href="/courses"
            className="px-6 py-3 rounded-lg bg-[#101A35] hover:bg-[#101A35]/80 border border-[#32DDF5]/30 text-[#32DDF5] font-semibold transition-all"
          >
            Browse Courses
          </a>
        </div>
      </div>
    </main>
  );
}
