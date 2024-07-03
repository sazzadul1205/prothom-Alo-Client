import { FaGreaterThan } from "react-icons/fa";

const EntLeftNews = [
  {
    id: 1,
    title: "মতামত মোদি আছেন মোদিতেই",
    imageUrl:
      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    name: "নিশাত সুলতানা",
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
    name: "",
  },
  {
    id: 4,
    title: "ডুবছে বাগেরহাট যথাসময়ে ও যথাযথভাবে প্রকল্প শেষ হোক",
    imageUrl:
      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    name: "",
  },
];

const Opinions = () => {
  return (
    <div className="bg-white w-full text-black py-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center mb-4 border-t-4 border-gray-400">
          <h1 className="text-black text-xl font-bold hover:text-blue-400 flex mt-4">
            মতামত
            <FaGreaterThan className="text-red-500 text-xl ml-4 mt-1" />
          </h1>
        </div>
        <div className="flex">
          <div className="w-2/5">
            <div className="border mx-20 border-black h-[384px] relative p-4">
              <h1 className="absolute top-6 left-[-50px] bg-[#001246] text-white text-2xl p-2">
                মতামত মোদি আছেন
              </h1>
              <h1 className="absolute top-16 left-[-50px] bg-[#001246] text-white text-2xl p-2">
                মোদিতেই
              </h1>
              <p className="mt-32 mx-6">
                আত্মম্ভরিতা ও অহংবোধের যে সমালোচনা মোহন ভাগবত করেছেন, মোদি
                বুঝেছেন, আপাতত তাতে রাশ টানা না গেলে বিপদ বাড়তে পারে।
              </p>
              <div className="absolute bottom-4 left-4  w-full">
                <div className="w-full  mb-2"></div>
                <div className="flex items-center px-5">
                  <div className="avatar mr-2">
                    <div className="w-16 rounded-full">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="border-2 w-10 border-gray-400 mb-1"></div>
                    <h1 className="text-center">সৌম্য বন্দ্যোপাধ্যায়</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/5">
            <div className="">
              {EntLeftNews.map((item) => (
                <div key={item.id} className="mt-2 border-b px-2 py-3">
                  <div className="flex items-center justify-between">
                    {item.imageUrl && (
                      <div className="avatar mr-2">
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
                          <div className="border-2 w-10 border-gray-400 mt-5"></div>
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
