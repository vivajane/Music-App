import { useState, useEffect } from "react";
import { allAssets } from "../apiRequest/ApiRequest";
import Items from "./Items";
import { Albums } from "../assets/asset";
import { PopularItems } from "../assets/popular";

const GalleryItem = () => {
  const [assets, setAssets] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const asset = async () => {
      try {
        const res = await allAssets();
        console.log(res, "this is the response");

        setAssets(res?.data);
      } catch (error) {
        setError(error.message);
        console.log(error, "this is from errror");
      }
    };

    asset();
  }, []);
  console.log(assets);

  return (
    // <div className="flex flex-wrap justify-center gap-5 p-5 overflow-auto h-full">
    <div className="flex flex-col gap-5 h-full overflow-scroll p-5">
      <div className="flex flex-col gap-5 py-10">
        <h2 className="text-center text-black text-xl md:text-3xl my font-bold bg-blue-">
          MOST POPULAR IN YOUR AREA
        </h2>
        {error && <p>{error}</p>}

        <ul className="flex flex-wrap justify-center gap-5">
          {Albums &&
            Albums.map((item, id) => (
              <Items
                key={id}
                name={item.name}
                desc={item.desc}
                image={item.image}
              />
            ))}
        </ul>
      </div>

      <div className="flex flex-col gap-5 py-10">
        <h2 className="text-center text-black text-xl md:text-3xl my font-bold bg-blue-">
          RECOMMENDED
        </h2>
        {error && <p>{error}</p>}

        <ul className="flex flex-wrap justify-center gap-5">
          {PopularItems &&
            PopularItems.map((item, id) => (
              <Items
                key={id}
                name={item.name}
                desc={item.desc}
                image={item.image}
              />
            ))}
        </ul>
      </div>

      {/* <div className="bg-green-700 p-5">
        <h2>MOST POPULAR IN YOUR AREA</h2>
        {error && <p>{error}</p>}

        <ul className="flex flex-wrap justify-center gap-5"></ul>
        {PopularItems &&
          PopularItems.map((item, id) => (
            <Items
              key={id}
              name={item.name}
              desc={item.desc}
              image={item.image}
            />
          ))}
      </div> */}
    </div>
  );
};
export default GalleryItem;
