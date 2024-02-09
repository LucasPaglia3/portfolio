import Projects from "./projects";
import Skills from "./skills";

function App() {
  return (
    <main className="w-full min-h-screen bg-slate-950 tracking-wide">
      <div className="max-w-xl mx-auto">
        <div className="flex flex-col items-center gap-8 antialiased">
          <header className="relative mt-10 p-5 flex justify-between w-full gap-4">
            <h2 className="text-md text-white">lp</h2>
            <div className="sticky top-0 flex justify-between gap-4">
              <a href="#projects" className="text-md text-white">
                projects
              </a>
              <a href="#contact" className="text-md text-white">
                contact
              </a>
            </div>
          </header>
          <section className="flex flex-col self-baseline p-5 gap-1 w-full">
            <h1 className="text-4xl font-semibold text-white">
              Hi! I&apos;m Lucas.
            </h1>
            <h1 className="text-4xl font-semibold text-gray-400">
              I&apos;m a full stack developer based in Córdoba, Argentina.
            </h1>
            <span className="text-lg font-semibold text-gray-400/90 mt-3">
              My name is Lucas Paglia, i like finding solutions to problems
              through web applications by delivering top-notch results. I
              specialize in Javascript, but am also learning C#.
            </span>
          </section>
          <section
            id="projects"
            className="flex flex-col self-baseline p-5 gap-5 w-full"
          >
            <h1 className="text-xl text-white">Skills</h1>
            <Skills />
          </section>
          <section className="flex flex-col self-baseline p-5 gap-5 w-full">
            <h1 className="text-xl text-white">Projects</h1>
            <Projects />
          </section>
          <section
            id="contact"
            className="flex flex-col self-baseline p-5 gap-5 w-full"
          >
            <h1 className="text-xl text-white">Contact</h1>
            <div className="grid grid-cols-2">
              <div className="col-span-1 flex flex-col gap-2">
                <span className=" text-gray-400 ">Linked In</span>
                <span className=" text-gray-400 ">GitHub</span>
                <span className=" text-gray-400 ">Email</span>
              </div>
              <div className="col-span-1 flex flex-col gap-2">
                <a
                  href="https://www.linkedin.com/in/lucas-paglia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-gray-400 "
                >
                  in/lucas-paglia
                </a>
                <a
                  href="https://github.com/LucasPaglia3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-gray-400 "
                >
                  git/lucaspaglia3
                </a>
                <a
                  href="mailto:lucaspaglia3@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-gray-400 "
                >
                  lucaspaglia3@gmail.com
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
