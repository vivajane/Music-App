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
    <div>
      <div>
        <div className="pt-4 text-center font-extrabold text-[25px] text-black">
          <h2>MOST POPULAR IN YOUR AREA</h2>
        </div>
        <div className="flex justify-center gap-5 p-5 overflow-auto">
          {error && <p>{error}</p>}

          {Albums &&
            Albums.map((item, id) => (
              <Items
                key={id}
                name={item.name}
                desc={item.desc}
                image={item.image}
              />
            ))}
        </div>
      </div>
      <div>
        <div className="py-4 text-center">
          <h2>MOST POPULAR IN YOUR AREA</h2>
        </div>
        <div className="flex justify-center gap-5 overflow-auto">
          {error && <p>{error}</p>}

          {PopularItems &&
            PopularItems.map((item, id) => (
              <Items
                key={id}
                name={item.name}
                desc={item.desc}
                image={item.image}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
export default GalleryItem;
