import React from "react";
import def from "../../../assets/News/Default.png";
import { FaGreaterThan } from "react-icons/fa";

const LifeNews = [
  {
    id: 1,
    title: "৫০ দরিদ্র জুটির রাজকীয় গণবিবাহের আয়োজন করল আম্বানি পরিবার",
    content:
      "মঙ্গলবার রিলায়েন্স করপোরেট পার্কে ৫০ দরিদ্র জুটির বিয়ের সেই অনুষ্ঠানে উপস্থিত ছিলেন মুকেশ আম্বানি, নীতা আম্বানি, ইশা আম্বানি, আনন্দ পিরামল, আকাশ আম্বানি, শ্লোকা মেহতারা।",
    imageUrl: def,
    time: 6,
  },
  {
    id: 2,
    title: "এই বাড়িতেই প্রথম এসি লাগানো হয়",
    content:
      "‘এয়ার কন্ডিশনার’ নামটা কে প্রথম ব্যবহার করেছিলেন? গাড়িতে এসির প্রচলন কবে? কোন দেশের মানুষই-বা সবচেয়ে বেশি এসি ব্যবহার করেন—এমন নানা প্রশ্নের উত্তর মিলবে এখানে।",
    imageUrl: def,
    time: 3,
  },
  {
    id: 3,
    title: "ভালো থাকুন রাসেলস ভাইপার সত্যি কি আতঙ্কের",
    content:
      "রাসেলস ভাইপারসহ সব প্রজাতির সাপের কামড়ের বৈজ্ঞানিক চিকিৎসা রয়েছে। সাপের কামড়ের অন্যতম প্রধান চিকিৎসা হচ্ছে অ্যান্টিভেনম।",
    imageUrl: def,
    time: 2,
  },
  {
    id: 4,
    title: "আপনার এসি ভালো আছে তো?",
    content:
      "ঠান্ডা হাওয়াটা হয়তো আপনি উপভোগ করছেন, কিন্তু এসির পরিষ্কার-পরিচ্ছন্নতার দিকে খুব একটা খেয়াল রাখছেন না। যন্ত্রাংশে ময়লা জমে যাওয়ার কারণে হয়তো যন্ত্রটির কার্যক্ষমতা কমে যাচ্ছে।",
    imageUrl: def,
    time: 5,
  },
];
const Living = () => {
  return (
    <div className="bg-white w-full text-black py-4 ">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center mb-4 border-t-4 border-gray-400">
          <h1 className="text-black text-xl font-bold hover:text-blue-400 flex mt-4 ">
            জীবনযাপন
            <FaGreaterThan className="text-red-500 text-xl ml-4 mt-1" />
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {LifeNews.map((news) => (
            <div key={news.id} className="border-r border-gray-200 rounded p-4">
              <img
                src={news.imageUrl}
                alt=""
                className="w-full h-40 object-cover mb-2"
              />
              <h3 className="text-lg font-semibold hover:text-blue-500 mb-2">
                {news.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{news.content}</p>
              <p className="text-xs text-gray-400">{news.time} ঘণ্টা আগে</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Living;
