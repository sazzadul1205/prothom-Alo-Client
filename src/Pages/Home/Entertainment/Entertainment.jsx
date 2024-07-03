import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import def from "../../../assets/News/Default.png";

const EntLeftNews = [
  {
    id: 1,
    title: "চলে গেলেন ‘চায়নাটাউন’-এর চিত্রনাট্যকার রবার্ট টাউন",
    imageUrl: def,
  },
  {
    id: 2,
    title: "অনন্ত-রাধিকার বিয়েতে গাইবেন কারা",
    imageUrl: def,
  },
  {
    id: 2,
    title: "উড়ছেন শর্বরী, কারণ...",
    imageUrl: def,
  },
];

const EntMiddleNews = [
  {
    id: 1,
    title: "সেদিন শাহরুখকে দেখেই বিরক্ত হয়েছিলেন জুহি",
    content:
      "‘রাজু বন গ্যায়া জেন্টেলম্যান’, ‘ডর’, ‘ইয়েস বস’, ‘কাভি হা কাভি না’সহ অনেক ছবিতে কাজ করেছেন দুজনে। তবে শুনলে অবাক হবেন, প্রথম দিকে শাহরুখ খানকে দেখেই",
    imageUrl: def,
    time: 1,
  },
];

const EntRightNews = [
  {
    id: 1,
    title: "‘কুইন অব টিয়ারস’ জুটির প্রেমের গুঞ্জন",
    imageUrl: def,
  },
  {
    id: 2,
    title: "ঘুরেফিরে সেই ঈদনির্ভরতা",
    imageUrl: def,
  },
  {
    id: 2,
    title: "২১ পেরিয়ে ২২ বছরে এনটিভি",
    imageUrl: def,
  },
];

const Entertainment = () => {
  return (
    <div className="bg-white w-full text-black py-4 ">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center mb-4 border-t-4 border-gray-400">
          <h1 className="text-black text-xl font-bold hover:text-blue-400 flex mt-4 ">
            বিনোদন
            <FaGreaterThan className="text-red-500 text-xl ml-4 mt-1" />
          </h1>
        </div>
        <div className="grid grid-cols-3">
          {/* Left Section */}
          <div className="border-r border-black py-2">
            {EntLeftNews.map((item, index) => (
              <div key={item.id} className="mt-2 border-b px-2 py-5">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-bold hover:text-blue-400">
                      {item.title}
                    </h3>
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
          {/* Middle Section */}
          <div className="border-r border-black">
            {EntMiddleNews.map((news) => (
              <div
                key={news.id}
                className="border-r border-gray-200 rounded p-4"
              >
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
          <div className=" border-l-3 border-black py-2">
            {EntRightNews.map((item, index) => (
              <div key={item.id} className="mt-2 border-b px-2 py-5">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-bold hover:text-blue-400">
                      {item.title}
                    </h3>
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
      </div>
    </div>
  );
};

export default Entertainment;
