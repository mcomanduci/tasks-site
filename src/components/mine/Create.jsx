function Create({selected}) {
  return (
    <section className={`justify-center w-2/3 ${selected ? 'flex' : 'hidden'}`}>
      <div className="container flex flex-col mt-20 mr-20 ml-4">
        <div className="text-right space-x-1">
          <button className="text-xl font-semibold py-3 px-7 hover:text-stone-600">Cancel</button>
          <button className="text-xl font-semibold bg-stone-800 text-white py-3 px-7 rounded-md hover:bg-stone-600">Save</button>
        </div>
        <div className="w-full space-y-5">
          <div>
            <label htmlFor="title" className="font-bold text-stone-700">
              TITLE
            </label>
            <input
              id="title"
              type="text"
              className="w-full bg-stone-200 border-b-2 border-stone-600 px-2 py-2 rounded text-stone-700 font-semibold focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="description" className="font-bold text-stone-700">
              DESCRIPTION
            </label>
            <textarea
              id="description"
              className="w-full bg-stone-200 border-b-2 border-stone-600 px-2 py-2 rounded text-stone-700 font-semibold focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="date" className="font-bold text-stone-700">
              DUE DATE
            </label>
            <input
              id="date"
              type="date"
              className="w-full bg-stone-200 border-b-2 border-stone-600 px-2 py-2 rounded text-stone-700 font-semibold focus:outline-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Create;
