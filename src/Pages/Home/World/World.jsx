import { FaGreaterThan } from "react-icons/fa";
import def from "../../../assets/News/Default.png";

const WorldLeftNews = [
  {
    id: 1,
    title: "মালিতে সশস্ত্র হামলায় নিহত ৪০",
    content:
      "মেয়র মৌলে গুইন্দো বলেন, এটা খুবই ভয়ংকর হামলা ছিল। হামলাকারীরা পুরো গ্রাম ঘিরে রেখেছিল এবং লোকজনকে লক্ষ্য করে গুলি করেছিল।",
    imageUrl: def,
    time: 6,
  },
];

const WorldTopNews = [
  {
    id: 1,
    title: "সরে দাঁড়ানো নিয়ে নিজ দলেই চাপের মুখে বাইডেন",
    imageUrl: def,
  },
  {
    id: 2,
    title: "গাজার শিশুদের মধ্যে ছড়াচ্ছে মারাত্মক চর্মরোগ",
    imageUrl: def,
  },
];

const WorldBottomNews = [
  {
    id: 1,
    title: "ট্রাম্পের সঙ্গে বিতর্কে ‘প্রায় ঘুমিয়ে পড়েছিলেন’ বাইডেন",
    imageUrl: def,
  },
  {
    id: 2,
    title: "অস্ট্রেলিয়ার নিখোঁজ শিশুটি কুমিরের আক্রমণের শিকার, ধারণা পুলিশের",
    imageUrl: def,
  },
];

const World = () => {
  return (
    <div className="bg-white w-full text-black py-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center mb-4 border-t-4 border-gray-400">
          <h1 className="text-black text-xl font-bold hover:text-blue-400 flex mt-4">
            বিশ্ব
            <FaGreaterThan className="text-red-500 text-xl ml-4 mt-1" />
          </h1>
        </div>
        <div className="flex">
          {/* Left Section */}
          <div className="border-r border-black w-2/5 pr-4">
            {WorldLeftNews.map((news) => (
              <div key={news.id} className="border-gray-200 rounded p-4">
                <img
                  src={news.imageUrl}
                  alt=""
                  className="w-[442px] h-[352px] object-cover mb-2"
                />
                <h3 className="text-lg font-semibold hover:text-blue-500 mb-2">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{news.content}</p>
                <p className="text-xs text-gray-400">{news.time} ঘণ্টা আগে</p>
              </div>
            ))}
          </div>
          {/* Right Section */}
          <div className="w-3/5 pl-4">
            <div className="flex mb-4">
              {WorldTopNews.map((news) => (
                <div
                  key={news.id}
                  className="border-r rounded p-4 w-1/2 pr-2"
                >
                  <img
                    src={news.imageUrl}
                    alt=""
                    className="w-[349px] h-[233px] object-cover mb-2"
                  />
                  <h3 className="text-lg font-semibold hover:text-blue-500 mb-2">
                    {news.title}
                  </h3>
                </div>
              ))}
            </div>
            <div className="border-b border-black mb-4"></div>
            <div className="flex">
              {WorldBottomNews.map((news) => (
                <div
                  key={news.id}
                  className="border-r rounded p-4 w-1/2 pr-2"
                >
                  <img
                    src={news.imageUrl}
                    alt=""
                    className="w-[349px] h-[233px] object-cover mb-2"
                  />
                  <h3 className="text-lg font-semibold hover:text-blue-500 mb-2">
                    {news.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default World;
