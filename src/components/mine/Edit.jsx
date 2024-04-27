function Edit({ selected }) {
  return (
    <section
      className={`mt-12 ml-4 w-2/3 ${selected ? "flex" : "hidden"}`}
    >
      <div className="w-full mr-24">
        <div className="space-y-4 border-b-2 pb-4 mb-4 border-stone-300 text-stone-700 font-semibold">
          <div className="flex justify-between">
            <h3 className="text-5xl font-bold text-stone-700">
              Learning React
            </h3>
            <button className="text-xl font-semibold py-3 px-7 hover:text-stone-600">
              Delete
            </button>
          </div>
          <p className="text-stone-400">Dec 29, 2024</p>
          <p>Learn React from the group up.</p>
          <p>Start with the basics, finish with advanced knowledge.</p>
        </div>
        <div className="space-y-4 pb-4 mb-4 text-stone-700 font-semibold">
          <h3 className="text-4xl font-bold text-stone-700">Tasks</h3>
          <div className="flex gap-5">
            <input
              type="text"
              className="w-96 bg-stone-200 py-2 px-2 rounded outline-blue-700"
            />
            <button className="text-xl font-semibold hover:text-stone-600">
              Add Task
            </button>
          </div>
          <p>This project does not have any tasks yet.</p>
          <div className="flex flex-col min-h-28 bg-stone-200 justify-center px-5 rounded-lg space-y-3 py-6">
            <div className="flex justify-between w-full">
              <p>Learn the basics</p>
              <button>Clear</button>
            </div>
            <div className="flex justify-between w-full">
              <p>Learn the basics</p>
              <button>Clear</button>
            </div>
            <div className="flex justify-between w-full">
              <p>Learn the basics</p>
              <button>Clear</button>
            </div>
            <div className="flex justify-between w-full">
              <p>Learn the basics</p>
              <button>Clear</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Edit;
