import sport from "../../../../assets/Sports/sport1.jfif";
import { FaCamera } from "react-icons/fa";
import def from "../../../../assets/News/Default.png";

const middleTopNews = [
  {
    id: 1,
    imageUrl: sport,
    title: "ফটো ফিচার রঙিন কোপায় বাতাসে ভাসলেন গোলকিপার",
    time: "2 ঘণ্টা আগে",
  },
];

const middleBottomNews = [
  {
    id: 1,
    title: "জার্মানিজুড়ে তুরস্কের সমর্থকদের বিজয়োল্লাস",
    imageUrl: def,
  },
  {
    id: 2,
    title: "ফটো ফিচার রঙিন কোপায় বাতাসে ভাসলেন গোলকিপার",
    imageUrl: def,
  },
];

const newsItems = [
  {
    id: 1,
    title: "মতামত ‘প্রত্যয়’ পেনশন স্কিম উচ্চশিক্ষার জন্য আশীর্বাদ নাকি হুমকি",
    imageUrl: def,
  },
  {
    id: 2,
    title: "বিশ্লেষণ এই যুদ্ধ গাজার ভয়াবহতাকেও ছাড়িয়ে যেতে পারে",
    imageUrl: def,
  },
  {
    id: 3,
    title: "তাসকিনের ঘুম থেকে না ওঠা নিয়ে যা বললেন সাকিব",
    imageUrl: def,
  },
];

const SportsMiddle = () => {
  // Assuming middleTopNews has only one item for simplicity
  const middleTop = middleTopNews[0];

  return (
    <div className="w-3/4 relative border-t-4 border-gray-400 flex">
      <div className="">
        {/* Top */}
        <div className="flex items-center mt-2">
          <div className="badge badge-primary badge-md h-6 w-6 bg-[#0573E6]"></div>
          <h1 className="text-2xl font-semibold ml-2">খেলা</h1>
        </div>

        {/* Middle Top */}
        <div className="w-[605px] relative mt-2">
          <img
            src={middleTop.imageUrl}
            alt=""
            className="w-[600px] h-[387px] bg-opacity-50"
          />

          {/* Camera icon */}
          <div className="absolute top-4 left-4">
            <FaCamera className="text-red-500 text-4xl" />
          </div>

          {/* Text at bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white py-4 px-6 w-[600px]">
            <h1 className="text-2xl font-bold hover:text-yellow-400">
              {middleTop.title}
            </h1>
            <p className="text-md ">{middleTop.time}</p>
          </div>
        </div>
        <hr className="border-b mt-5 border-black" />
        {/* Middle Bottom */}
        <div className="w-[600px]">
          <div className="grid grid-cols-2 mt-5">
            {middleBottomNews.map((news, index) => (
              <div
                key={news.id}
                className={`border-r ${
                  index === middleBottomNews.length - 1
                    ? "border-transparent"
                    : "border-gray-200"
                } rounded p-4`}
              >
                <img
                  src={news.imageUrl}
                  alt=""
                  className="w-full h-40 object-cover mb-2"
                />
                <h3 className="text-lg font-semibold hover:text-blue-500 mb-2">
                  {news.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border border-black ml-2"></div>

      {/* Middle Right */}
      <div className="w-[300px] border-l-3 border-black py-2 ml-2">
        <div>
          <img src={def} className="w-{300px} h-{250px} my-5" />
        </div>
        {newsItems.map((item) => (
          <div key={item.id} className="mt-2 border-t px-2 py-5">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-bold hover:text-blue-400">{item.title}</h3>
              </div>
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-28 ml-4"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsMiddle;
