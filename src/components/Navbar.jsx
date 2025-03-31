export default function Navbar() {
  return (
    <nav className="sticky top-0 isolate z-10 flex justify-center px-1 py-4 md:justify-between">
      <div className="pointer-events-auto relative flex rounded-lg border border-neutral-800 bg-black/70 p-1 shadow-[0_4px_15px_rgba(255,255,255,0.1)] backdrop-blur-md">
        <div className="absolute left-0 -z-10 h-7 w-[65.5px] translate-x-[4.67px] rounded bg-neutral-200 opacity-0 backdrop-blur transition-[width,transform,opacity] duration-150"></div>
        <a
          className="rounded px-2 py-1 text-sm tracking-tight text-white transition-colors hover:text-green-400 focus:text-white focus-visible:ring-4 focus-visible:ring-blue-200"
          href="/"
        >
          Chester
        </a>
        <a
          className="rounded px-2 py-1 text-sm tracking-tight text-neutral-400 transition-colors hover:text-green-400 focus:text-white focus-visible:ring-4 focus-visible:ring-blue-200"
          href="/projects"
        >
          Projects
        </a>
        <a
          className="rounded px-2 py-1 text-sm tracking-tight text-neutral-400 transition-colors hover:text-green-400 focus:text-white focus-visible:ring-4 focus-visible:ring-blue-200"
          href="/writing"
        >
          Writing
        </a>
        <a
          className="rounded px-2 py-1 text-sm tracking-tight text-neutral-400 transition-colors hover:text-green-400 focus:text-white focus-visible:ring-4 focus-visible:ring-blue-200"
          href="/reading"
        >
          Reading
        </a>
        <a
          className="rounded px-2 py-1 text-sm tracking-tight text-neutral-400 transition-colors hover:text-green-400 focus:text-white focus-visible:ring-4 focus-visible:ring-blue-200"
          href="/hobbies"
        >
          Hobbies
        </a>
      </div>
      <div className="pointer-events-auto hidden opacity-100 transition-opacity md:flex">
        <a
          href="https://github.com/codemerything"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-alias rounded px-2 py-1 text-sm tracking-tight text-neutral-400 decoration-wavy underline-offset-4 transition-colors hover:text-green-400 hover:underline focus:text-green-400 focus-visible:ring-4 focus-visible:ring-blue-200"
        >
          GitHub
        </a>
        <a
          href="https://twitter.com/itsnotchester"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-alias rounded px-2 py-1 text-sm tracking-tight text-neutral-400 decoration-wavy underline-offset-4 transition-colors hover:text-green-400 hover:underline focus:text-green-400 focus-visible:ring-4 focus-visible:ring-blue-200"
        >
          Twitter
        </a>
        <a
          href="https://read.cv/chesterhow"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-alias rounded px-2 py-1 text-sm tracking-tight text-neutral-400 decoration-wavy underline-offset-4 transition-colors hover:text-green-400 hover:underline focus:text-green-400 focus-visible:ring-4 focus-visible:ring-blue-200"
        >
          CV
        </a>
      </div>
    </nav>
  )
}
