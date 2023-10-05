import { CDN_URL } from "../utlis/contants";
const IteamList = ({ iteams}) => {
  return (
    <div>
      {iteams.map((iteam) => (
        <div
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
          key={iteam?.card?.info?.id}
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{iteam?.card?.info?.name}</span>
              <span>
                - ₹
                {iteam?.card?.info?.price / 100 ||
                  iteam?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p>{iteam?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-2  mx-14 rounded-lg bg-black text-white shadow-lg">
                Add+
              </button>
            </div>
            <img className="w-40 " src={CDN_URL + iteam.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default IteamList;
