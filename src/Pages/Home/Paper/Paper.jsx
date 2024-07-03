import paper1 from "../../../assets/Paper/paper1.webp";
import paper2 from "../../../assets/Paper/paper2.webp";
import def from "../../../assets/News/Default.png";


const paper1leftNews = [
  {
    id: 1,
    title: "বাসার ভাই ১৩৮৫ ন্যাড়া হতে সেলুনে যাওয়ার পর যা হলো",
    content:
      "সেটাই। বাংলাদেশ হারলে তোমার ন্যাড়া হওয়ার কথা। এখন তো না মানলে চলবে না।",
    imageUrl: def,
    time: 10,
  },
];

const Paper1RightNews = [
  {
    id: 1,
    title: "রিপলি’স বিলিভ ইট অর নট! কটন বল কী দিয়ে তৈরি হয়, জানেন?",
    imageUrl: def,
  },
  {
    id: 2,
    title: "পিনাটস ১০০৮ অন্যের সামনে দড়িলাফের সময় যা করতে হয়",
    imageUrl: def,
  },
  {
    id: 3,
    title:
      "বাসার ভাই ১৩৮৪ ‘এই দেশে চিল থাকার সুযোগ আছে নাকি? চিল তো করে দুর্নীতিবাজ কর্মকর্তারা’",
    imageUrl: def,
  },
];
const paper2leftNews = [
  {
    id: 1,
    title: "দেশীদশ-এ বর্ষার বিশেষ ছাড়",
    content:
      "আজ থেকে ‘বর্ষার বিশেষ ছাড়’ শুরু হয়েছে ঢাকার বসুন্ধরা সিটির লেভেল চার, সিলেটের কুমারপাড়া আর চট্টগ্রামের আফমি প্লাজার লেভেল ৫–এ অবস্থিত দেশীদশ আউটলেটগুলোয়।",
    imageUrl: def,
    time: 10,
  },
];

const Paper2RightNews = [
  {
    id: 1,
    title: "ঝুম বৃষ্টির দিনে চা-শিঙাড়া পৌঁছে দেবে অনলাইন চায়ের উদ্যোগ 'ওপেন-টি-বায়োস্কোপ'",
    imageUrl: def,
  },
  {
    id: 2,
    title: "৫০ পেরিয়েও আকর্ষণ ছড়াচ্ছেন বাহুবলী-র রাজমাতা",
    imageUrl: def,
  },
  {
    id: 3,
    title:
      "সোজা নয়, বরং রোজ কিছুক্ষণ উল্টো দিকে হাঁটলে পাবেন অবাক করা সব উপকার",
    imageUrl: def,
  },
];
const Paper = () => {
  return (
    <div className="bg-white w-full text-black py-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 gap-4">
            {/* left paper */}
          <div className="bg-[#ECEFF1]">
            <img src={paper1} alt="" className="w-full" />
            <div className="flex">
                {/* left-left */}
              <div className=" w-2/4 my-2">
                {paper1leftNews.map((news) => (
                  <div
                    key={news.id}
                    className="border-r border-gray-400 h-full  p-4 "
                  >
                    <img
                      src={news.imageUrl}
                      alt=""
                      className=" object-cover mb-2"
                    />
                    <h3 className="text-lg font-semibold hover:text-blue-500 mb-2">
                      {news.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{news.content}</p>
                    <p className="text-xs text-gray-400">
                      {news.time} ঘণ্টা আগে
                    </p>
                  </div>
                ))}
              </div>
              {/* left-right */}
              <div className="w-2/4  px-2">
                {Paper1RightNews.map((item) => (
                  <div key={item.id} className="mt-2 border-b border-gray-400 px-2 py-5">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-bold hover:text-blue-400 text-md">
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
          {/* Right paper */}
          <div className="bg-[#FFF3E0] ">
            <img src={paper2} alt="Paper 2" className="w-full h-auto" />
            <div className="flex">
                {/* Right-Left */}
              <div className=" w-2/4 my-2">
                {paper2leftNews.map((news) => (
                  <div
                    key={news.id}
                    className="border-r border-gray-400 h-full  p-4 "
                  >
                    <img
                      src={news.imageUrl}
                      alt=""
                      className=" object-cover mb-2"
                    />
                    <h3 className="text-lg font-semibold hover:text-blue-500 mb-2">
                      {news.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{news.content}</p>
                    <p className="text-xs text-gray-400">
                      {news.time} ঘণ্টা আগে
                    </p>
                  </div>
                ))}
              </div>
              {/* Right-Right */}
              <div className="w-2/4 px-4">
                {Paper2RightNews.map((item) => (
                  <div key={item.id} className="mt-2 border-b border-gray-400 px-2 py-5">
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
      </div>
    </div>
  );
};

export default Paper;
