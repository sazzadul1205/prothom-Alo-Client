import { FaGreaterThan } from "react-icons/fa";
import def from "../../../assets/News/Default.png";

const moreData = [
  {
    id: 1,
    title: "শিক্ষা",
    image: def,
    mainHeadline:
      "বদলে যাওয়া নিয়মে স্কুলে মূল্যায়ন, প্রথম দিনে প্রশ্ন ফাঁসের অভিযোগ",
    subHeadlines: [
      "বিদেশে পড়াশোনার সঙ্গে কাজের সুযোগ, এই পাঁচ দেশ হতে পারে গন্তব্য",
      "ষষ্ঠ থেকে নবমে ষাণ্মাসিক মূল্যায়ন আজ শুরু, শেষ পাঁচ ঘণ্টার মধ্যে",
    ],
  },
  {
    id: 2,
    title: "চাকরি",
    image: def,
    mainHeadline:
      "বিসিএস ভাইভা অভিজ্ঞতা-১০ আপনাদের চট্টগ্রাম বিশ্ববিদ্যালয়ে এত মারামারি কেন হয়?",
    subHeadlines: [
      "এনবিআরে চাকরির সুযোগ, পদ ৪৩",
      " খাতা দেখতে গাফিলতি করা পরীক্ষকদের চিহ্নিত করে যে ব্যবস্থা নিল পিএসসি",
    ],
  },
  {
    id: 3,
    title: "প্রযুক্তি",
    image: def,
    mainHeadline:
      "কৃত্রিম বুদ্ধিমত্তা ব্যবহার করে কী কী প্রতারণা করছে সাইবার অপরাধীরা",
    subHeadlines: [
      "ল্যাপটপ বেশি কিনছেন ক্রেতারা",
      "একটি বুগাটি গাড়ি, একজন ফার্স্ট লেডি ও মার্কিন নির্বাচন ঘিরে সত্যের মতো ভুয়া তথ্য",
    ],
  },
];

const More2 = () => {
  return (
    <div className="bg-white w-full text-black py-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center mb-4 border-t-4 border-gray-400">
          <h1 className="text-black text-xl font-bold hover:text-blue-400 flex mt-4">
            অন্যান্য
            <FaGreaterThan className="text-red-500 text-xl ml-4 mt-1" />
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-10">
          {moreData.map((item) => (
            <div key={item.id} className="w-[382px]">
              <div className="border rounded-md p-4 h-full flex flex-col justify-between">
                <div>
                  <img
                    src={item.image}
                    alt=""
                    className="w-[350px] h-[233px]"
                  />
                  <h1 className="py-3 font-semibold border-b">
                    {item.mainHeadline}
                  </h1>
                  {item.subHeadlines.map((sub, index) => (
                    <p key={index} className="border-b py-5">
                      {sub}
                    </p>
                  ))}
                </div>
                <div className="flex justify-center p-4">
                  <button className="btn btn-active bg-[#0573E6] btn-primary px-5 text-white">
                    আরও
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default More2;
