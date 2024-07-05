import img1 from "../../../assets/imgNews/News1.jfif";
import img2 from "../../../assets/imgNews/News2.jfif";

const News = [
  {
    id: 1,
    title: "সকালের খবর",
    content: "সকালেই পড়ুন আলোচিত ৫ খবর",
    backgroundImg: img1,
  },
  {
    id: 2,
    title: "সন্ধ্যার খবর",
    content: "সন্ধ্যায় সারা দিনের খবর",
    backgroundImg: img2,
  },
];

const TimedNews = () => {
  return (
    <div className="bg-[#E3F2FD80] py-4 mx-auto">
      <div className="max-w-[1311px] mx-auto flex justify-center">
        <div className="flex flex-wrap gap-4 justify-center">
          {News.map((newsItem) => (
            <div
              key={newsItem.id}
              className="relative w-full md:w-[288px] h-[105px]"
            >
              <img
                src={newsItem.backgroundImg}
                alt={newsItem.title}
                className="w-full h-[105px] object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center p-3">
                <h1 className="text-white mb-2 text-sm hover:text-yellow-400 relative group">
                  {newsItem.title}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-10"></span>
                </h1>
                <p className="text-white text-sm hover:text-yellow-400">
                  {newsItem.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimedNews;
