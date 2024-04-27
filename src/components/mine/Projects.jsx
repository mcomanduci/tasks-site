import logo from "/logo.png";

function Projects({ selected }) {
  return (
    <section className={`justify-center w-2/3 ${selected ? 'flex' : 'hidden'}`}>
      <div className="flex flex-col items-center space-y-8 mt-32">
        <img src={logo} alt="No project image" className="h-28" />
        <h2 className="text-3xl font-bold text-stone-700">
          No Project Selected
        </h2>
        <p className="text-xl text-stone-500 font-medium">
          Select a project or get started with a new one
        </p>
        <button className="bg-stone-700 text-stone-400 text-xl font-medium py-4 px-5 rounded-lg hover:bg-stone-600">
          Create new project
        </button>
      </div>
    </section>
  );
}

export default Projects;
