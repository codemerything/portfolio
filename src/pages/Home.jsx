import Navbar from "../components/Navbar"
import Tester from "../components/Tester"

export default function Home() {
  return (
    <main className="text-lightGray mx-auto my-5 w-full max-w-screen-sm px-8 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl">
      <Navbar />
      <Tester />
    </main>
  )
}
