export default function Navbar() {
  return (
    <nav className="sticky top-4 z-10 flex justify-center p-4 md:justify-between">
      <div className="relative flex space-x-3 rounded-lg border border-neutral-800 bg-black/70 p-2 shadow-[0_4px_15px_rgba(255,255,255,0.1)] backdrop-blur-md">
        <div className="text-lightWhite font-medium">Emery</div>
        <div className="text-lightGray">Projects</div>
        <div className="text-lightGray">Writing</div>
        <div className="text-lightGray">Reading</div>
        <div className="text-lightGray">Hobbies</div>
      </div>
      <div
        className="hidden space-x-2 transition-opacity md:flex"
        style={{ opacity: 1 }}
      >
        <div className="text-lightGray">Github</div>
        <div className="text-lightGray">Linkedin</div>
        <div className="text-lightGray">Resume</div>
      </div>
    </nav>
  )
}
