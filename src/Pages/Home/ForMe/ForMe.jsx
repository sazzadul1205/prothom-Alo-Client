import { FaGreaterThan } from "react-icons/fa";
import def from "../../../assets/News/Default.png";

const ForMeNews = [
  {
    id: 1,
    title: "ষষ্ঠ থেকে নবমে ষাণ্মাসিক মূল্যায়ন আজ শুরু, শেষ পাঁচ ঘণ্টার মধ্যে",
    content:
      "নতুন শিক্ষাক্রমের ষষ্ঠ থেকে নবম শ্রেণিতে ষাণ্মাসিক সামষ্টিক মূল্যায়ন শুরু ৩ জুলাই থেকে। সিলেবাস পাঠানো হয়েছে। দিনে সর্বোচ্চ পাঁচ ঘণ্টার মধ্যে শেষ করতে হবে মূল্যায়ন।",
    imageUrl: def,
    time: 6,
  },
  {
    id: 2,
    title: "আমার নাম শুনে একজন কন্ট্রাক্ট কিলিং থেকে সরে আসে: ব্যারিস্টার সুমন",
    content:
      "‘হত্যার পরিকল্পনা ফাঁসের’ চার দিনেও রহস্যের জট খোলেনি। রহস্য উদ্‌ঘাটন করা এখন পুলিশের দায়িত্ব বলে মন্তব্য সংসদ সদস্য সায়েদুল হকের।",
    imageUrl: def,
    time: 3,
  },
  {
    id: 3,
    title: "লোকসভায় রাহুলের ভাষণের অংশ বাদ, তাঁকে ‘বালকবুদ্ধি’ বললেন মোদি",
    content:
      "বক্তব্য বাদ দেওয়ায় স্পিকারকে চিঠি লেখেন কংগ্রেস নেতা রাহুল। তিনি বলেন, তাঁর ভাষণের যেসব অংশ বাদ দেওয়া হয়েছে, তা আদৌ নিয়মবিধি ভঙ্গ করেনি।",
    imageUrl: def,
    time: 2,
  },
  {
    id: 4,
    title: "এটা গ্রহনযোগ্য নয়—আফগানিস্তান ম্যাচ নিয়ে বিসিবি সভাপতি",
    content:
      "বিসিবির কার্যালয়ে সাধারণ সভার পর এক সংবাদ সম্মেলনে বিসিবি সভাপতি ও ক্রীড়ামন্ত্রী নাজমুল বলেন, এ ব্যাপারে টিম ম্যানেজমেন্টের কাছে বিস্তারিত জানতে চাইবেন তিনি।",
    imageUrl: def,
    time: 5,
  },
];

const ForMe = () => {
  return (
    <div className="bg-white w-full text-black py-4">
      <div className="max-w-screen-xl mx-auto ">
        <div className="flex justify-between items-center mb-4 border-t-4 border-gray-400 mt-5">
          <h1 className="text-black text-xl font-bold hover:text-blue-400 flex mt-4">
            আপনার জন্য
            <FaGreaterThan className="text-red-500 text-xl ml-4 mt-1" />
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 pb-5">
          {ForMeNews.map((news, index) => (
            <div
              key={news.id}
              className={`rounded p-4 ${
                index !== ForMeNews.length - 1 ? "border-b lg:border-r border-gray-200" : ""
              }`}
            >
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

export default ForMe;
