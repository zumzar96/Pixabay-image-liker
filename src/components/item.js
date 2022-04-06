import React from "react";
import { useDispatch } from "react-redux";
import { toggleFav } from "../store/actions/images";

const Item = (props) => {
  const dispatch = useDispatch();
  const toggleFavHandler = () => {
    dispatch(toggleFav(props.id));
  };

  const tags = props.tags.split(",");

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={props.url} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {props.user}
        </div>
        <ul>
          <li>
            <strong>isFavorite </strong>
          </li>
          <li>
            <strong>Views: </strong>
            {props.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {props.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
          </li>

          <button
            onClick={toggleFavHandler}
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            like
          </button>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Item;
