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
    <div className="text-black">
      <div>
        <div className="text-center text-xl text-black font-extrabold">
          <h2>BEST OF THE WEEK</h2>
        </div>
        <div className="flex gap-5 overflow-auto">
        {error && <p>{error}</p>}

        {Albums &&
          Albums?.map((item, id) => (
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
        <div className="text-center text-xl text-black font-extrabold">
          <h2 >POPULAR IN YOUR AREA</h2>
        </div>
        <div className="flex gap-5 overflow-auto">
          {error && <p>{error}</p>}

          {PopularItems &&
            PopularItems?.map((item, id) => (
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
