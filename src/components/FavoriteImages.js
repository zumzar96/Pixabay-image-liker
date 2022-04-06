import React from "react";
import Item from "./Item";
import { useSelector } from "react-redux";

const FavoriteItem = (props) => {
  const favoriteImages = useSelector((state) =>
    state.shop.images.filter((p) => p.isFavorite)
  );

  return (
    <div className="container mx-auto">
      <h1 className="text-6xl text-center mx-auto mt-32"></h1>
      <div className="grid grid-cols-3 gap-4">
        {favoriteImages.map((img) => (
          <Item
            tags={img.tags}
            key={img.id}
            url={img.webformatURL}
            id={img.id}
            views={img.views}
            downloads={img.downloads}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoriteItem;
