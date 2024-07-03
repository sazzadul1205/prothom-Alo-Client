import { FaGreaterThan } from "react-icons/fa";
import def from "../../../assets/News/Default.png";

const BusinessLeftNews = [
  {
    id: 1,
    title: "নতুন একটি মেট্রোরেলে ঋণ দিতে আগ্রহী চীন",
    content:
      "মেট্রোরেল ছাড়াও ভাঙা থেকে পায়রা বন্দর পর্যন্ত রেলপথ নির্মাণের প্রকল্পেও চীনের আগ্রহী বেশি। জানা গেছে, এই প্রকল্পে ৪১ হাজার কোটি খরচ হবে।",
    imageUrl: def,
    time: 6,
  },
];

const BusinessTopNews = [
  {
    id: 1,
    title: "সর্বজনীন পেনশন সেবা দেবে ১১ ব্যাংক",
    imageUrl: def,
  },
  {
    id: 2,
    title:
      "প্রকাশিত সংবাদের বিষয়ে ইসলামী ব্যাংকের প্রতিবাদ ও প্রতিবেদকের বক্তব্য",
    imageUrl: def,
  },
];

const BusinessBottomNews = [
  {
    id: 1,
    title: "যে দুই কারণে বিশ্বে জাহাজভাড়া হঠাৎ বেড়েছে",
    imageUrl: def,
  },
  {
    id: 2,
    title: "বিশ্বে সরকারি ঋণ এখন ৯১ লাখ কোটি ডলার, রাজনীতিকেরা কী করছেন",
    imageUrl: def,
  },
];

const Business = () => {
  return (
    <div className="bg-white w-full text-black py-4 ">
      <div className="max-w-screen-xl mx-auto pb-5 border-b-4 border-gray-400 ">
        <div className="flex justify-between items-center mb-4 border-t-4 border-gray-400">
          <h1 className="text-black text-xl font-bold hover:text-blue-400 flex mt-4">
            বাণিজ্য
            <FaGreaterThan className="text-red-500 text-xl ml-4 mt-1" />
          </h1>
        </div>
        <div className="flex">
          {/* Left Section */}
          <div className="border-r border-black w-2/5 pr-4">
            {BusinessLeftNews.map((news) => (
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
              {BusinessTopNews.map((news) => (
                <div key={news.id} className="border-r rounded p-4 w-1/2 pr-2">
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
              {BusinessBottomNews.map((news) => (
                <div key={news.id} className="border-r rounded p-4 w-1/2 pr-2">
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

export default Business;
