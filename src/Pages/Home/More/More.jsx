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
  {
    id: 4,
    title: "গ্যাজেটস",
    image: def,
    mainHeadline: " শক্তিশালী ব্যাটারির এই ফোন দ্রুত চার্জ করা যায়",
    subHeadlines: [
      "৫২ মিনিটের চার্জে টানা ২ দিন চলবে এই ফোন",
      "রোবট না মানবী, ভ্রম হবে প্রথম দেখায়",
    ],
  },
  {
    id: 5,
    title: "অন্য আলো",
    image: def,
    mainHeadline: "বলকানের তুর্কি হামামের সন্ধানে",
    subHeadlines: ["সেপ্টেম্বরে আসছে হিলারি ক্লিনটনের নতুন বই", "গল্প অবরোহণ"],
  },
  {
    id: 6,
    title: "দূর পরবাস",
    image: def,
    mainHeadline: "মরক্কো ভ্রমণের গল্প: পর্ব-৪",
    subHeadlines: ["ভালোবাসার গল্প কুড়াই", "আমেরিকা ও কালচারাল শক"],
  },
  {
    id: 7,
    title: "নাগরিক সংবাদ",
    image: def,
    mainHeadline: "জিমির পুতুলের সংসার",
    subHeadlines: [
      "'গায়ক রবীন্দ্রনাথ’ নিয়ে ঢাকায় পীতম সেনগুপ্ত",
      "বৃষ্টিভেজা ভালোবাসায়",
    ],
  },
  {
    id: 8,
    title: "ধর্ম",
    image: def,
    mainHeadline: "নামাজে দাঁড়িয়ে নানা চিন্তার আনাগোনা",
    subHeadlines: [
      "জামাতে নামাজ যে ভুল অনেকে করে থাকেন",
      "গোপনে নফল আদায় করা উত্তম",
    ],
  },
];

const More = () => {
  return (
    <div className="bg-white w-full text-black py-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-col-1 lg:grid-cols-4 gap-10 mt-10">
          {moreData.map((item) => (
            <div key={item.id} >
              <div className="flex justify-between items-center mb-4 border-t-4 border-gray-400">
                <h1 className="text-black text-xl font-bold hover:text-blue-400 flex mt-4">
                  {item.title}
                  <FaGreaterThan className="text-red-500 text-xl ml-4 mt-1" />
                </h1>
              </div>
              <div className="pl-2 lg:pl-0">
                <img src={item.image} alt="" className="lg:w-[288px] lg:h-[192px]" />
                <h1 className="py-3 font-semibold">{item.mainHeadline}</h1>
                {item.subHeadlines.map((sub, index) => (
                  <p key={index} className="border-t py-5">
                    {sub}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default More;
