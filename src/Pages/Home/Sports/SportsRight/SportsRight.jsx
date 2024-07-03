import React from "react";

const SportsRight = () => {
  return (
    <div className="w-1/4">
      <div>
        {" "}
        <img src={def} className="w-{300px} h-{250px}" />
      </div>
      {newsItems.map((item, index) => (
        <div
          key={item.id}
          style={{
            borderBottom: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            paddingBottom: index === newsItems.length - 1 ? "10px" : "10px", // Adding extra padding at the last item
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="font-bold hover:text-blue-400">{item.title}</h3>
            </div>
            {item.imageUrl && (
              <img src={item.imageUrl} alt={item.title} className="w-28 ml-4" />
            )}
          </div>
          <p className="font-light">{item.content}</p>
          {item.time && <p className="text-sm">{item.time} Hours ago</p>}
        </div>
      ))}
      <div>
        {" "}
        <img src={def} className="w-{300px} h-{250px}" />
      </div>
    </div>
  );
};

export default SportsRight;
