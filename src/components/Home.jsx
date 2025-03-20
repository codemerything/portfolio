export default function Home() {
  return (
    <section className="text-lightGray mx-10 mt-5 flex space-x-3.5">
      <div className="flex w-[50%] flex-col space-y-5">
        <AboutMe />
        <div className="bg-darkMode h-fit rounded-2xl p-5">
          <p className="text-lightWhite text-md mb-3">Projects</p>
          <Projects
            year="2023"
            projectName="Overwatch"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, consequuntur."
          />
          <Projects
            year="2024"
            projectName="Stunnerrave"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, consequuntur."
          />
        </div>
      </div>
      <div className="flex w-[50%] flex-col">
        <div className="bg-darkMode h-fit rounded-2xl p-5">
          <p className="text-lightWhite text-md mb-3">Experience</p>
          <Experience
            year="Present"
            role="Frontend Engineer"
            company="Overwatch"
            location="Abuja, Nigeria"
            highlight="inline-flex rounded-2xl bg-green-500 px-3 text-[12px] text-black"
          />
          <Experience
            year="2024"
            role="Technical Head"
            company="Uncos Naija"
            location="Abuja, Nigeria"
          />
          <Experience
            year="2023"
            role="IT Intern"
            company="NDDC "
            location="Cross River, Nigeria"
          />
        </div>
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
