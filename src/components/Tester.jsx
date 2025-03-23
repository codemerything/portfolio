export default function Home() {
  return (
    <section className="text-lightGray mx-10 mt-5 grid grid-cols-1 space-x-3.5 sm:grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="row-span-2 px-1 pb-2 sm:col-span-2 lg:aspect-square">
        <p className="text-2xl sm:text-3xl lg:text-4xl">
          Hey there, I’m Emery 👋 Welcome to my digital garden 🌱 I like
          building things, and I’m currently helping to build Mobbin.
        </p>
        <p>
          In my free time, I enjoy brewing coffee, tending to my plants, and
          climbing (plastic) rocks.
        </p>{" "}
        <p>
          I do some reading and writing as well, albeit not as consistently, but
          I’m working on being better at that.
        </p>
      </div>

      <div className="flex w-[50%] flex-col">
        <div className="h-9 w-full bg-amber-200"></div>
      </div>
    </section>
  )
}

export function AboutMe() {
  return (
    <div className="bg-darkMode h-fit rounded-2xl p-5">
      <div className="mb-5 flex items-center space-x-5 leading-3">
        <img
          src="https://i.pravatar.cc/150"
          alt="image"
          className="w-[92px] rounded-full"
        />
        <div>
          <h1 className="text-lightWhite text-2xl font-medium">Emery</h1>
          <p>Software Engineer</p>
        </div>
      </div>
      <p className="text-lightWhite text-md mb-3">About</p>
      <p className="leading-5 tracking-tight">
        Hey I'm Josh, a UX designer currently crafting beautiful experiences for
        BBC. I'm seriously passionate about the intersection of art and design.
        I am dedicated to crafting human-centred design experiences that feel
        like magic when you use them. I have over ten years experience solving
        complex problems and building sustainable products.{" "}
      </p>
    </div>
  )
}

export function Experience({ year, company, role, location, highlight }) {
  return (
    <section className="relative mt-[25px] flex items-start">
      <div className="w-[100px]">
        <p className={highlight}>{year}</p>
      </div>
      <div className="text-lightWhite flex flex-col">
        <p className="font-medium">{role}</p>
        <p className="flex items-center">
          {company}
          <span className="ml-1">↗</span>
        </p>
        <p className="text-lightGray">{location}</p>
      </div>
    </section>
  )
}

export function Projects({ year, projectName, description }) {
  return (
    <section className="relative mt-[25px] flex items-start text-[15px]">
      <div className="w-[200px]">
        <p>{year}</p>
      </div>
      <div className="text-lightWhite flex flex-col">
        <div className="flex">
          <p className="flex items-center underline">{projectName}</p>
          <span className="ml-1">↗</span>
        </div>
        <p className="text-lightGray">{description}</p>
      </div>
    </section>
  )
}
