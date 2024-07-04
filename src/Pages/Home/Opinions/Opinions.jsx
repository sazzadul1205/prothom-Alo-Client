import { FaGreaterThan } from "react-icons/fa";

const EntLeftNews = [
  {
    id: 1,
    title: "মতামত মোদি আছেন মোদিতেই",
    imageUrl:
      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    name: "নিশাত সুলতানা",
    mainComment: {
      title1: "মতামত মোদি আছেন",
      title2: "মোদিতেই",
      content:
        "আত্মম্ভরিতা ও অহংবোধের যে সমালোচনা মোহন ভাগবত করেছেন, মোদি বুঝেছেন, আপাতত তাতে রাশ টানা না গেলে বিপদ বাড়তে পারে।",
      author: "সৌম্য বন্দ্যোপাধ্যায়",
      authorImageUrl:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
  },
  {
    id: 2,
    title: "মাহা মির্জার বিশ্লেষণ খেলাপি ঋণ, বিশিল্পায়ন ও হকারের দেশ",
    imageUrl:
      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    name: "মাহা মির্জা",
  },
  {
    id: 3,
    title: "ইলিশ ধরার ওপর নিষেধাজ্ঞা সময় নির্ধারণে দুই দেশের সমন্বয় জরুরি",
    imageUrl:
      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
  },
  {
    id: 4,
    title: "ডুবছে বাগেরহাট যথাসময়ে ও যথাযথভাবে প্রকল্প শেষ হোক",
    imageUrl:
      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
  },
];

const Opinions = () => {
  const mainComment = EntLeftNews.find((item) => item.mainComment);

  return (
    <div className="bg-white w-full text-black py-4 mt-5">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center mb-4 border-t-4 border-gray-400">
          <h1 className="text-black text-xl font-bold hover:text-blue-400 flex mt-4">
            মতামত
            <FaGreaterThan className="text-red-500 text-xl ml-4 mt-1" />
          </h1>
        </div>
        <div className="flex">
          {/* Main comment */}
          <div className="w-2/5">
            {mainComment && (
              <div className="border mx-28 border-black h-[384px] relative p-4">
                <h1 className="absolute top-6 left-[-50px] bg-[#001246] text-white text-2xl p-2">
                  {mainComment.mainComment.title1}
                </h1>
                <h1 className="absolute top-16 left-[-50px] bg-[#001246] text-white text-2xl p-2 mt-3">
                  {mainComment.mainComment.title2}
                </h1>
                <p className="mt-32 mx-6">{mainComment.mainComment.content}</p>
                <div className="absolute bottom-4 left-4 w-full">
                  <div className="w-full mb-2"></div>
                  <div className="flex items-center px-5">
                    <div className="avatar mr-2">
                      <div className="w-16 rounded-full">
                        <img
                          src={mainComment.mainComment.authorImageUrl}
                          alt={mainComment.mainComment.author}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col ">
                      <div className="border-2 w-10 border-gray-400 mb-1"></div>
                      <h1 className="text-center">
                        {mainComment.mainComment.author}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* All comments */}
          <div className="w-3/5">
            <div className="">
              {EntLeftNews.map((item, index) => (
                <div
                  key={item.id}
                  className={`mt-2 ${
                    index === EntLeftNews.length - 1 ? "" : "border-b"
                  } px-2 py-3`}
                >
                  <div className="flex items-center justify-between">
                    {item.imageUrl && (
                      <div className="avatar mr-5">
                        <div className="w-16 rounded-full">
                          <img src={item.imageUrl} alt={item.title} />
                        </div>
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="font-bold hover:text-blue-400">
                        {item.title}
                      </h3>
                      {item.name && (
                        <>
                          <div className="border-2 w-10 border-gray-400 mt-5 mb-1"></div>
                          <p>{item.name}</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opinions;
