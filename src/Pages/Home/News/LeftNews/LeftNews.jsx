import def from "../../../../assets/News/Default.png";

const LeftNews = () => {
  // Dummy news data for demonstration
  const newsItems = [
    {
      id: 1,
      title: "ভারতে পদদলিত হয়ে মৃত্যু বেড়ে ১০৭",
      content:
        "তবে এ দুর্ঘটনায় প্রাণহানি নিয়ে ভারতীয় সংবাদমাধ্যমগুলো নানা রকম হিসাব দিচ্ছে। এনডিটিভি জানিয়েছে, অন্তত ৮৭ জন নিহত হয়েছে। আর ইন্ডিয়ান এক্সপ্রেসের হিসাবে মারা গেছে অর্ধশতাধিক।",
      imageUrl: def,
      time: "1",
    },
    {
      id: 2,
      title: "সাকিবের পরিকল্পনা তিন ও ছয় মাসের",
      content:
        "সাকিব বলেছেন, বড় পরিকল্পনায় যাওয়ার আগে তাঁর নিজের অবস্থাটা বোঝার দরকার আছে।",
      imageUrl: def,
      time: "2",
    },
    {
      id: 3,
      title: "সাকিবের পরিকল্পনা তিন ও ছয় মাসের",
      content: "",
      imageUrl: def,
      time: "4",
    },
    {
      id: 4,
      title: "",
      content: "খালেদা জিয়া হাসপাতাল থেকে বাসায় ফিরেছেন",
      imageUrl: "",
      time: "6",
    },
    {
      id: 5,
      title: "",
      content:
        "‘...হাড্ডি ভেঙে ফেলব আমি’, আওয়ামী লীগ নেতার উদ্দেশে সাবেক সংসদ সদস্য",
      imageUrl: "",
      time: "7",
    },
    {
      id: 6,
      title: "",
      content: "ইউরো রোনালদো: ছুঁয়ে কান্নার রঙ, ছুঁয়ে মানুষের ছায়া",
      imageUrl: "",
      time: "1",
    },
    {
      id: 7,
      title: "",
      content:
        "কোটা বাতিলের পরিপত্র পুনর্বহালের দাবি শাহবাগ মোড় থেকে সরে গেলেন আন্দোলনকারীরা",
      imageUrl: "",
      time: "2",
    },
    {
      id: 8,
      title: "",
      content:
        "সরকারি কর্মচারীদের সম্পদের ঘোষণাসহ হিসাব দাখিলের বিধি কঠোরভাবে মানতে নির্দেশ",
      imageUrl: "",
      time: "2",
    },
  ];

  return (
    <div className="w-1/4">
      {newsItems.map((item, index) => (
        <div
          key={item.id}
          style={{
            borderBottom:
              index === newsItems.length - 1 ? "none" : "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            paddingBottom: index === newsItems.length - 1 ? "0" : "10px",
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="font-bold hover:text-blue-400">{item.title}</h3>
            </div>
            {item.imageUrl && (
              <img src={item.imageUrl} alt={item.title} className="w-28 ml-4" />
            )}
          </div>
          <p className="font-light ">{item.content}</p>
          {item.time && (
            <p className="text-md pt-4 font-light">{item.time} ঘণ্টা আগে</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default LeftNews;
