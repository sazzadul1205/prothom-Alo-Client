import def from "../../../../assets/News/Default.png";

const RightNews = () => {
  const newsItems = [
    {
      id: 1,
      title: "মতামত ‘প্রত্যয়’ পেনশন স্কিম উচ্চশিক্ষার জন্য আশীর্বাদ নাকি হুমকি",
      content:
        "সর্বজনীন ‘প্রত্যয়’ পেনশন স্কিম চালু করায় বিশ্ববিদ্যালয়ের শিক্ষকেরা ধর্মঘট কর্মসূচি পালন করছেন। এ পেনশন স্কিম কেন মানতে চাইছেন না শিক্ষকেরা?",
      imageUrl: def,
      time: "3",
    },
    {
      id: 2,
      title: "বিশ্লেষণ এই যুদ্ধ গাজার ভয়াবহতাকেও ছাড়িয়ে যেতে পারে",
      content: "",
      imageUrl: def,
      time: "2",
    },
    {
      id: 3,
      title: "তাসকিনের ঘুম থেকে না ওঠা নিয়ে যা বললেন সাকিব",
      content: "",
      imageUrl: def,
      time: "",
    },
  ];

  return (
    <div className="w-full lg:w-1/4">
      <div className="pb-2 border-b">
        <img src={def} className="w-full lg:w-72 lg:h-56" />
      </div>
      {newsItems.map((item, index) => (
        <div
          key={item.id}
          style={{
            borderBottom: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            paddingBottom: index === newsItems.length - 1 ? "10px" : "10px",
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
        <img src={def} className="w-full lg:w-72 lg:h-56" />
      </div>
    </div>
  );
};

export default RightNews;
