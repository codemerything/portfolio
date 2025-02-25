export default function Home() {
  return (
    <>
      <nav>
        <ul className="font-phudu flex justify-evenly pt-2 text-center text-sm">
          <li>
            Software<br></br>Engineer
          </li>
          <li>
            Technical<br></br> Writer
          </li>
          <li>
            Creative <br></br>Director
          </li>
          <li>
            Film <br></br>Enthusiast
          </li>
        </ul>
      </nav>

      <section className="mt-10 flex justify-center">
        <a href="/zima" className="top-5">
          zima
        </a>
        <img src="/layer.png" alt="main photo" className="w-xs" />
        <a href="/emery">emery</a>
      </section>

      <section className="relative">
        <p className="font-satoshi absolute top-3 left-1/2 -translate-x-1/2 transform text-center text-xs uppercase">
          an edem production
        </p>
        <p className="font-satoshi absolute top-8 left-1/2 -translate-x-1/2 transform text-center text-7xl font-bold uppercase">
          emerything
        </p>
        <p className="font-satoshi absolute top-28 left-1/2 -translate-x-1/2 transform text-center tracking-wide uppercase">
          into the mind of a generalist
        </p>
      </section>

      <></>
    </>
  )
}
