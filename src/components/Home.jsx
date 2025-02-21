export default function Home() {
  return (
    <>
      <nav>
        <ul className="flex justify-evenly font-phudu underline text-sm text-center pt-2">
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

      <section className="flex justify-center mt-10">
        <img src="/layer.png" alt="main photo" className="w-xs" />
      </section>

      <section className="relative">
        <p className="text-center absolute left-1/2 transform -translate-x-1/2 top-1">
          an edem production
        </p>
        <p className="text-center text-7xl absolute left-1/2 transform -translate-x-1/2 top-2">
          emerything
        </p>
        <p className="text-center absolute left-1/2 transform -translate-x-1/2 top-24">
          an absolute display of creativity and innovation
        </p>
      </section>

      <></>
    </>
  );
}
