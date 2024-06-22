const Items = ({ name, desc, image }) => {
  return (
    <div className="group w-96 flex flex-col gap-5 p-6 hover:bg-slate-500/50 transition-all">
      <h1 className="font-extrabold text-center text-xl lg:text-3xl group-hover:text-2xl lg:group-hover:text-4xl transition-all lg:mb-3 tracking-wide">
        {name}
      </h1>

      <img
        src={image}
        alt="Playlist art Image"
        className="rounded-lg cursor-pointer shadow-xl"
      />

      <div className="flex flex-col gap-1 text-center">
        <h3 className="font-bold bg-blue-900 rounded-md p-2 cursor-pointer">
          About this Playlist
        </h3>
        <p className="text-gray-300 group-hover:text-gray-100">{desc}</p>
      </div>
    </div>
  );
};
export default Items;
