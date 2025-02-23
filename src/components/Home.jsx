export default function Home() {
  return (
    <>
      <nav>
        <ul className="font-phudu flex justify-evenly pt-2 text-center text-sm underline">
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
        <img src="/layer.png" alt="main photo" className="w-xs" />
      </section>

      <section className="relative">
        <p className="absolute top-1 left-1/2 -translate-x-1/2 transform text-center">
          an edem production
        </p>
        <p className="font-satoshi absolute top-2 left-1/2 -translate-x-1/2 transform text-center text-7xl font-bold">
          emerything
        </p>
        <p className="absolute top-24 left-1/2 -translate-x-1/2 transform text-center">
          an absolute display of creativity and innovation
        </p>
      </section>

      <></>
    </>
  )
}
