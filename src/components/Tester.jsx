export default function Home() {
  return (
    <section className="text-lightGray grid grid-cols-1 sm:grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="row-span-2 px-1 pb-2 sm:col-span-2 lg:aspect-square">
        <div className="h-full w-full p-4 sm:p-8">
          <p className="text-2xl tracking-tight sm:text-3xl lg:text-4xl">
            Hey there, I’m{" "}
            <a className="cursor-alias text-white hover:underline hover:decoration-wavy">
              Emery
            </a>{" "}
            👋 Welcome to my digital collection 🌱 I like building{" "}
            <span className="text-white">things</span>, and I’m currently
            helping to build <span className="text-white">Overwatch</span>.
          </p>
          <p className="mt-6 text-2xl sm:text-3xl lg:text-4xl">
            In my free time, I enjoy taking{" "}
            <span className="text-white">walks</span>, watching{" "}
            <span className="text-white">movies</span>, and{" "}
            <span className="text-white">dancing</span>.
          </p>{" "}
          <p className="mt-6 text-2xl sm:text-3xl lg:text-4xl">
            I do some reading and writing as well, albeit not as consistently,
            but I’m working on being better at that.
          </p>
        </div>
      </div>

      <div className="aspect-[2] px-1 pb-2 sm:col-span-2">
        <div className="group h-full w-full overflow-hidden rounded-lg bg-neutral-50 transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100">
          {/* image later */}

          <div className="flex items-center justify-between pt-2 pr-2 pl-4 text-sm tracking-tight text-neutral-400">
            <span className="py-1.5">
              <a
                className="transition-colors hover:text-neutral-500 hover:underline focus-visible:text-neutral-500 focus-visible:underline focus-visible:ring-4 focus-visible:ring-blue-200"
                data-state="closed"
                href="/projects"
              >
                Projects
              </a>
              &nbsp;·&nbsp;Design Spells
            </span>
            <a
              href="https://designspells.com?ref=chester"
              target="_blank"
              className="group-focus-within:shadow-skeuo group-hover:shadow-skeuo flex h-8 w-8 cursor-alias items-center justify-center rounded-full transition-colors group-focus-within:bg-white group-focus-within:text-neutral-900 group-hover:bg-white group-hover:text-neutral-900 focus-visible:ring-4 focus-visible:ring-blue-200"
              data-state="closed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="aspect-square px-1 pb-2">
        <div className="group h-full w-full overflow-hidden rounded-lg bg-neutral-50 transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100"></div>
      </div>
    </section>
  )
}
