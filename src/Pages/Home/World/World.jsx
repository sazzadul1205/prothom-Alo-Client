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
    time: 1,
  },
  {
    id: 2,
    title: "গাজার শিশুদের মধ্যে ছড়াচ্ছে মারাত্মক চর্মরোগ",
    imageUrl: def,
    time: 4,
  },
];

const WorldBottomNews = [
  {
    id: 1,
    title: "ট্রাম্পের সঙ্গে বিতর্কে ‘প্রায় ঘুমিয়ে পড়েছিলেন’ বাইডেন",
    imageUrl: def,
    time: 2,
  },
  {
    id: 2,
    title: "অস্ট্রেলিয়ার নিখোঁজ শিশুটি কুমিরের আক্রমণের শিকার, ধারণা পুলিশের",
    imageUrl: def,
    time: 9,
  },
];

const World = () => {
  return (
    <div className="bg-white w-full text-black py-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center mb-4 border-t-4 border-gray-400 mt-5">
          <h1 className="text-black text-xl font-bold hover:text-blue-400 flex mt-4">
            বিশ্ব
            <FaGreaterThan className="text-red-500 text-xl ml-4 mt-1" />
          </h1>
        </div>
        <div className="flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="md:border-r md:border-black w-full md:w-2/5 pr-0 md:pr-4 mb-4 md:mb-0">
            {WorldLeftNews.map((news) => (
              <div key={news.id} className="border-gray-200 rounded p-4">
                <img
                  src={news.imageUrl}
                  alt=""
                  className="w-full h-64 md:w-[442px] md:h-[352px] object-cover mb-2"
                />
                <h3 className="text-xl font-semibold hover:text-blue-500 mb-2 mt-5">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2 mt-6">
                  {news.content}
                </p>
                <p className="text-xs text-gray-400">{news.time} ঘণ্টা আগে</p>
              </div>
            ))}
          </div>
          {/* Right Section */}
          <div className="w-full md:w-3/5 pl-0 md:pl-4">
            {/* Top */}
            <div className="flex flex-col md:flex-row mb-4">
              {WorldTopNews.map((news, index) => (
                <div
                  key={news.id}
                  className={`rounded p-2 w-full md:w-1/2 ${
                    index === 0 ? "md:pr-2" : "md:pl-2"
                  }`}
                >
                  <img
                    src={news.imageUrl}
                    alt=""
                    className="w-full h-48 md:w-[349px] md:h-[233px] object-cover mb-2"
                  />
                  <h3 className="text-lg font-semibold hover:text-blue-500 mb-2">
                    {news.title}
                  </h3>
                  <p className="text-xs text-gray-400">{news.time} ঘণ্টা আগে</p>
                </div>
              ))}
            </div>

            <div className="border-b border-black mb-4"></div>

            {/* Bottom */}
            <div className="flex flex-col md:flex-row">
              {WorldBottomNews.map((news, index) => (
                <div
                  key={news.id}
                  className={`rounded p-2 w-full md:w-1/2 ${
                    index === 0 ? "md:pr-2" : "md:pl-2"
                  }`}
                >
                  <img
                    src={news.imageUrl}
                    alt=""
                    className="w-full h-48 md:w-[349px] md:h-[233px] object-cover mb-2"
                  />
                  <h3 className="text-lg font-semibold hover:text-blue-500 mb-2">
                    {news.title}
                  </h3>
                  <p className="text-xs text-gray-400">{news.time} ঘণ্টা আগে</p>
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
