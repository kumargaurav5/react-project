const IteamList = ({ iteams }) => {
  return (
    <div>
      {iteams.map((iteam) => (
        <div
          className="p-2 m-2 border-gray-300 border-b-2 text-left"
          key={iteam?.card?.info?.id}
        >
          <div className="py-2">
            <span>{iteam?.card?.info?.name}</span>
            <span>
              {" "}
              - ₹{iteam?.card?.info?.price / 100 || iteam?.card?.info?.defaultprice / 100}
            </span>
          </div>
          <p>{iteam?.card?.info?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default IteamList;
