import def from "../../../../assets/News/Default.png";

const BanLeftNews = [
  {
    id: 1,
    title: "উখিয়ায় আশ্রয়শিবিরে পাহাড় ধসে আরও ২ রোহিঙ্গার মৃত্যু, আতঙ্ক",
    content:
      "মৃত ব্যক্তিরা হলেন বালুখালী আশ্রয়শিবিরের ক্যাম্প-১১-এর এফ-১ ব্লকের দিল মোহাম্মদের ছেলে আনোয়ার হোসেন ও টেকনাফের লেদা টাওয়ারের পাশের আশ্রয়শিবিরের মো. আলমের ছেলে সিফাত।",
    imageUrl: def,
    time: 6,
  },
];

const BanMiddleNews = [
  {
    id: 1,
    title: "বঙ্গোপসাগরে ট্রলারডুবির পর যেভাবে বেঁচে ফিরলেন ৭ জেলে",
    content:
      "রোববার রাত সোয়া ১১টার দিকে বঙ্গোপসাগরের নারকেলবাড়িয়া এলাকায় এফবি ভাই ভাই নামের মাছ ধরার ট্রলারটি ঢেউয়ের ধাক্কায় উল্টে যায়।।",
    imageUrl: def,
    time: 6,
  },
  {
    id: 2,
    title:
      "কোটা বাতিলের দাবিতে দ্বিতীয় দিনের মতো শাহবাগ মোড় অবরোধ, যান চলাচল বন্ধ",
    content:
      "ক্যাম্পাসের বিভিন্ন সড়ক ঘুরে শাহবাগে এসে মিছিলটি থামে বিকেল পৌনে চারটায়৷ এরপর থেকে শাহবাগ মোড়ে সড়কের ওপর অবস্থান নিয়েছেন চাকরিপ্রত্যাশী শিক্ষার্থীরা।",
    imageUrl: def,
    time: 2,
  },
  {
    id: 3,
    title: "জামালপুরে যমুনার পানি বিপৎসীমার ওপরে, নিম্নাঞ্চল প্লাবিত",
    content:
      "গতকাল মঙ্গলবার সকাল থেকে যমুনার পানি বাড়তে শুরু করে। রাত থেকে বিভিন্ন খাল, বিল ও যমুনার ছোট ছোট শাখা প্লাবিত হয়।।",
    imageUrl: def,
    time: 3,
  },
];

const BanRightNews = [
  {
    id: 1,
    title: "মাদারগঞ্জের নবনির্বাচিত চেয়ারম্যানের মুক্তির দাবিতে বিক্ষোভ",
    imageUrl: def,
  },
  {
    id: 2,
    title: "কোটা বাতিলের দাবিতে আজও বিক্ষোভে শিক্ষার্থীরা",
    imageUrl: def,
  },
];

const BanNews = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
      {/* Left */}
      <div className="md:border-r md:border-black p-2 md:p-0">
        {BanLeftNews.map((news) => (
          <div
            key={news.id}
            className=" md:border-gray-200 rounded p-4 mb-4"
          >
            <img
              src={news.imageUrl}
              alt=""
              className="w-full h-64 object-cover mb-2"
            />
            <h3 className="text-lg font-semibold hover:text-blue-500 mb-2">
              {news.title}
            </h3>
            <p className="text-sm text-gray-600 mb-2">{news.content}</p>
            <p className="text-xs text-gray-400">{news.time} ঘণ্টা আগে</p>
          </div>
        ))}
      </div>

      {/* Middle */}
      <div className="md:border-r md:border-black px-2 md:px-0">
        {BanMiddleNews.map((item, index) => (
          <div
            key={item.id}
            style={{
              borderBottom:
                index === BanMiddleNews.length - 1 ? "none" : "1px solid #ccc",
            }}
            className="p-2 mb-2"
          >
            <div className="flex flex-col md:flex-row items-start justify-between">
              <div className="flex flex-1">
                <h3 className="font-bold hover:text-blue-400 mt-3 md:mt-0">
                  {item.title}
                </h3>
              </div>
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full md:w-40 ml-0 md:ml-2 mt-2 md:mt-0"
                />
              )}
            </div>
            <p className="font-light">{item.content}</p>
            <p className="text-xs text-gray-400 mt-2">{item.time} ঘণ্টা আগে</p>
          </div>
        ))}
      </div>

      {/* Right */}
      <div>
        <div className="md:border-l-3 md:border-black px-2">
          {BanRightNews.map((item) => (
            <div key={item.id} className="mt-2 border-b px-2 pb-5 pt-2">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex">
                  <h3 className="font-bold hover:text-blue-400">
                    {item.title}
                  </h3>
                </div>
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full md:w-28 ml-0 md:ml-4 mt-2 md:mt-0"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
        <div>
          <img src={def} className="w-full md:w-[300px] h-64 my-5" />
        </div>
      </div>
    </div>
  );
};

export default BanNews;
