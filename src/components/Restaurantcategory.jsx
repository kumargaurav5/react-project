import IteamList from "./IteamList";

const RestaurantCategory = ({ data }) => {
  return (
    <div>
      {/* Title  */}
      <div className="w-4/6 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between">
        <span className="font-bold text-lg">
          {data.title}({data.itemCards.length})
        </span>
        <span>⬇</span>
        </div>
        
      {/* List of Iteam of accordian  */}
      <IteamList iteams={data.itemCards} />


      </div>

    </div>
  );
};

export default RestaurantCategory;
