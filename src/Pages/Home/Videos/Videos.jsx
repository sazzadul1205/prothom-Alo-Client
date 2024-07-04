import { FaGreaterThan } from "react-icons/fa";
import vid1 from "../../../assets/videos/vid1.webp";
import vid2 from "../../../assets/videos/vid2.webp";
import vid3 from "../../../assets/videos/vid3.webp";
import vid4 from "../../../assets/videos/vid4.webp";
import vid5 from "../../../assets/videos/vid5.webp";

const VideoLeftNews = [
  {
    id: 1,
    title: "ইন্টারনেটে ভয়াবহ ও বিকৃত কন্টেন্ট বাছাই হয় যেভাবে",
    imageUrl: vid1,
  },
];

const VideoRightNews = [
  {
    id: 1,
    title: " 'আমি একজন গর্বিত বাঙাল'",
    imageUrl: vid2,
  },
  {
    id: 2,
    title: " জার্মান ফুটবল দলের দুই তরুণ তারকার যেমন বন্ধুত্ব",
    imageUrl: vid3,
  },
  {
    id: 3,
    title: " গুগলের গুনগুন বিদ্যা সিনহা মিমের বিয়ে কয়টা",
    imageUrl: vid4,
  },
  {
    id: 4,
    title: "জোরপূর্বক জন্মনিয়ন্ত্রণের ক্ষতিপূরণ দিতে হবে জাপান সরকারকে",
    imageUrl: vid5,
  },
];

const Videos = () => {
  return (
    // <div className=" w-full text-black py-4">
    //   <div className="max-w-screen-xl mx-auto">
    //     <div className="flex justify-between items-center mb-4 border-t-4 border-gray-400">
    //       <h1 className="text-black text-xl font-bold hover:text-blue-400 flex mt-4">
    //         ভিডিও
    //         <FaGreaterThan className="text-yellow-500 text-xl ml-4 mt-1" />
    //       </h1>
    //     </div>
    //     <div className="flex">
    //       {/* Left */}
    //       <div className="border-r border-black w-2/5 pr-4">
    //         {VideoLeftNews.map((news) => (
    //           <div
    //             key={news.id}
    //             className="bg-[#121212] rounded p-4 w-[608px] h-[505px]"
    //           >
    //             <img
    //               src={news.imageUrl}
    //               alt=""
    //               className="w-[608px] h-[342px] object-cover mb-2"
    //             />
    //             <h3 className="text-lg font-semibold hover:text-blue-500 mb-2">
    //               {news.title}
    //             </h3>
    //           </div>
    //         ))}
    //       </div>
    //       {/* Right */}
    //       <div className="grid grid-cols-2 gap-5">
    //         {VideoRightNews.map((news) => (
    //           <div key={news.id}>
    //             <img
    //               src={news.imageUrl}
    //               alt=""
    //               className="w-[212px] h-[212px]"
    //             />
    //             <h3 className="text-lg font-semibold hover:text-blue-500 mb-2">
    //               {news.title}
    //             </h3>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-[#323232] w-full text-black py-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center mb-4 border-t-4 border-gray-400">
          <h1 className="text-white text-xl font-bold hover:text-blue-400 flex mt-4">
            ভিডিও
            <FaGreaterThan className="text-yellow-500 text-xl ml-4 mt-1" />
          </h1>
        </div>
        <div className="flex">
          <div>
            {/* Left */}
            <div className="border-r border-black w-2/5 pr-4">
              {VideoLeftNews.map((news) => (
                <div
                  key={news.id}
                  className="bg-[#121212] rounded w-[608px] h-[505px]"
                >
                  <img
                    src={news.imageUrl}
                    alt=""
                    className="w-[608px] h-[342px] object-cover mb-2"
                  />
                  <h3 className="text-white font-semibold hover:text-yellow-500 p-2 text-xl">
                    {news.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
          <div>
            {/* Right */}
            <div className="grid grid-cols-2 gap-8">
              {VideoRightNews.map((news) => (
                <div key={news.id} className="w-[288px] h-[236px] bg-[#121212]">
                  <img
                    src={news.imageUrl}
                    alt=""
                    className="w-[288px] h-[162px]"
                  />
                  <h3 className="text-md font-semibold text-white hover:text-yellow-500 p-2">
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

export default Videos;
