const Items = ({ name, desc, image }) => {
  return (
    <div className="group flex flex-col gap-5 w-96 p-6 hover:bg-slate-500 transition-all">
      <h1 className="group-hover:text-4xl text-3xl font-bold text-center mb-1 transition-all">
        {name}
      </h1>

      <img
        src={image}
        alt="Playlist art"
        className="rounded-xl shadow-xl cursor-pointer"
      />

      <p className="text-center text-gray-200">{desc}</p>
    </div>
  );
};
export default Items;
