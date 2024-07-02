import React from "react";
import def from "../../../../assets/News/Default.png";

const MiddleTopNews = [
  {
    id: 1,
    title:
      "পেনশন নিয়ে সরকারি ব্যাখ্যা ভুল দাবি করে শিক্ষকেরা বলছেন, আন্দোলনচলবে",
    content:
      "শিক্ষকদের কর্মবিরতির দ্বিতীয় দিনে মঙ্গলবার অর্থমন্ত্রী আবুল হাসানমাহমুদ আলী সচিবালয়ে সাংবাদিকদের প্রশ্নের জবাবে বলেন, এই আন্দোলন অযৌক্তিক।",
    description:
      "কর্মবিরতির অংশ হিসেবে কলা ভবনের মূল ফটকে ঢাকা বিশ্ববিদ্যালয়ের শিক্ষকদের অবস্থান কর্মসূচি। আজ মঙ্গলবার",
    imageUrl: def,
    time: "3",
  },
];

const MiddleMiddleTopNews = [
  {
    id: 1,
    title: "সাকিবের পরিকল্পনা তিন ও ছয় মাসের",
    content:
      "সাকিব বলেছেন, বড় পরিকল্পনায় যাওয়ার আগে তাঁর নিজের অবস্থাটা বোঝার দরকার আছে।",
    imageUrl: def,
    time: "2",
  },
  {
    id: 2,
    title:
      " ঘুষের মামলায় আদালতে দোষী সাব্যস্তের সিদ্ধান্ত পাল্টানোর আবেদন ট্রাম্পের",
    content:
      "গত মে মাসে ব্যাবসায়িক নথিতে ভুয়া তথ্যের জন্য তাঁর বিরুদ্ধে গঠিত ৩৪টি অভিযোগে দোষী সাব্যস্ত হন ট্রাম্প। ১১ জুলাই তাঁর সাজা ঘোষণার দিন ধার্য করা",
    imageUrl: def,
    time: "3",
  },
];

const MiddleMiddleBottomNews = [
  {
    id: 1,
    title: "সালমান মুক্তাদিরের কী হয়েছে",
    imageUrl: def,
  },
  {
    id: 2,
    title:
      " আমার নাম শুনে একজন কন্ট্রাক্ট কিলিং থেকে সরে আসে: ব্যারিস্টার সুমন",
    imageUrl: def,
  },
  {
    id: 3,
    title: "  কোটা বাতিল: দাবি আদায় না হওয়া পর্যন্ত রাজপথ ছাড়ব না",
    imageUrl: def,
  },
];
const MiddleBottomNews = [
  {
    id: 1,
    title:
      "পালিয়ে গেছেন জঙ্গি সদস্যরা, সাড়ে তিন ঘণ্টার অভিযানে তিনটি বোমা উদ্ধার",
    content:
      "পুলিশের ধারণা, ওই বাড়িটিতেই বোমাগুলো তৈরি করা হয়েছে। বাড়িটিতে বোমা তৈরির নানা সরঞ্জাম রয়েছে। সেগুলো উদ্ধার করা হবে। জঙ্গি সদস্যদের পরিচয় প্রকাশ করেনি পুলিশ।",
    time: 3,
  },
  {
    id: 2,
    title: "এটা গ্রহনযোগ্য নয়—আফগানিস্তান ম্যাচ নিয়ে বিসিবি সভাপতি",
    content:
      "বিসিবির কার্যালয়ে সাধারণ সভার পর এক সংবাদ সম্মেলনে বিসিবি সভাপতি ওক্রীড়ামন্ত্রী নাজমুল বলেন, এ ব্যাপারে টিম ম্যানেজমেন্টের কাছেবিস্তারিত জানতে চাইবেন তিনি।",
    time: 4,
  },
  {
    id: 3,
    title: "বেনজীর ও মতিউর পরিবারের সম্পদ বিবরণী চেয়ে দুদকের নোটিশ",
    content:
      "প্রাথমিক অনুসন্ধানে বেনজীর পরিবারের জ্ঞাত আয়বহির্ভূত সম্পদ অর্জনের প্রাথমিক তথ্য পাওয়া গেছে। আর কোনো সম্পদ আছে কি না, তা জানতে এই নোটিশ।",
    time: 1,
  },
];

const MiddleNews = () => {
  return (
    <div className="w-2/4">
      {/* Top News */}
      {MiddleTopNews.map((news) => (
        <div key={news.id} className="flex border-b border-black pb-3">
          <div>
            <img src={news.imageUrl} alt="" />
            <p className="text-sm">{news.description}</p>
          </div>
          <div className="mt-3">
            <h1 className="text-xl font-semibold">{news.title}</h1>
            <p className="text-sm mt-1">{news.content}</p>
            <p className="mt-2">{news.time} ঘণ্টা আগে</p>
          </div>
        </div>
      ))}
      {/* Middle Top News */}
      <div className="border-b py-4">
        <div className="grid grid-cols-2">
          {MiddleMiddleTopNews.map((news) => (
            <div key={news.id} className="border-r px-2">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-bold hover:text-blue-400">{news.title}</h3>
                </div>
                <img src={news.imageUrl} className="w-28 ml-4" />
              </div>
              <p className="font-light">{news.content}</p>
              <p className="text-sm">{news.time} ঘণ্টা আগে</p>
            </div>
          ))}
        </div>
      </div>
      {/* Middle bottom News */}
      <div className="border-b py-3">
        <div className="grid grid-cols-3">
          {MiddleMiddleBottomNews.map((news) => (
            <div key={news.id} className="border-r pl-2">
              <img src={news.imageUrl} alt="" />
              <h3 className="font-bold hover:text-blue-400 ">{news.title}</h3>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom News */}
      <div className="">
        <div className="grid grid-cols-3 py-4">
          {MiddleBottomNews.map((news) => (
            <div key={news.id} className="border-r pl-2">
              <h3 className="font-bold hover:text-blue-400 mb-2">{news.title}</h3>
              <p className="font-light">{news.content}</p>
              <p className="text-sm">{news.time} ঘণ্টা আগে</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiddleNews;
