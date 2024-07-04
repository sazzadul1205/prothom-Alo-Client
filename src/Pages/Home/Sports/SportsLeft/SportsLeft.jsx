import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const article = [
  {
    title: "পঠিত",
    articles: [
      { id: 1, title: "সালমান মুক্তাদিরের কী হয়েছে", No: "১" },
      { id: 2, title: "তাসকিনের ঘুম থেকে না ওঠা নিয়ে যা বললেন সাকিব", No: "২" },
      { id: 3, title: "সাকিবের পরিকল্পনা তিন ও ছয় মাসের", No: "৩" },
      {
        id: 4,
        title:
          "আমার নাম শুনে একজন কন্ট্রাক্ট কিলিং থেকে সরে আসে: ব্যারিস্টার সুমন",
        No: "৪",
      },
      { id: 5, title: "ভারতে পদদলিত হয়ে মৃত্যু বেড়ে ১০৭", No: "৫" },
    ],
  },
  {
    title: "আলোচিত",
    articles: [
      { id: 1, title: "তাসকিনের ঘুম থেকে না ওঠা নিয়ে যা বললেন সাকিব", No: "১" },
      {
        id: 2,
        title:
          "কোটা বাতিলের পরিপত্র পুনর্বহালের দাবিতে শাহবাগে অবরোধ, যান চলাচল বন্ধ",
        No: "২",
      },
      {
        id: 3,
        title:
          "জব্দ করা ব্রাহমা গরু কৌশলে সাদিক অ্যাগ্রোকে দিল প্রাণিসম্পদ অধিদপ্তর",
        No: "৩",
      },
      {
        id: 4,
        title: "অর্থমন্ত্রী বললেন, শিক্ষকদের আন্দোলন অযৌক্তিক",
        No: "৪",
      },
      { id: 5, title: "সাকিবের পরিকল্পনা তিন ও ছয় মাসের", No: "৫" },
    ],
  },
  {
    title: "সুখবর",
    articles: [
      {
        id: 1,
        title: "ভারতের জিতিনের গিনেস ওয়ার্ল্ড রেকর্ডস ভাঙলেন বাংলাদেশের আশিক",
        No: "১",
      },
      {
        id: 2,
        title: "ঢাকা বিশ্ববিদ্যালয় যেভাবে র‍্যাঙ্কিংয়ে এগিয়েছে",
        No: "২",
      },
      { id: 3, title: "বাগেরহাটের কাঠের ঘর যাচ্ছে ইউরোপে", No: "৩" },
      { id: 4, title: "‘ভবিষ্যৎ অন্ধকার’ ছেলেটিই এখন বিজ্ঞানী", No: "৪" },
      {
        id: 5,
        title: "সন্দ্বীপে ‘ধাবানি’ পশুপালনে আগ্রহ বাড়ছে, যাচ্ছে কোরবানির হাটেও",
        No: "৫",
      },
    ],
  },
];

const SportsLeft = () => {
  return (
    <div className="w-1/4">
      <Tabs className="border-t-4 border-gray-400 py-5">
        <TabList className="border-black grid grid-cols-3">
          {article.map((tab, index) => (
            <Tab
              key={index}
              className={`border-b-4 border-black px-5 pb-3 ${
                tab.isSelected
                  ? "border-red-500"
                  : "hover:border-red-500 hover:border-b-4 focus:border-red-500 focus:border-b-4"
              }`}
            >
              <h1 className="mx-auto">{tab.title}</h1>
            </Tab>
          ))}
        </TabList>

        {article.map((tab, index) => (
          <TabPanel key={index}>
            {tab.articles.map((article) => (
              <div key={article.id} className="h-[153px] border-b py-5">
                <h2 className="text-4xl pt-4 pb-2">{article.No}</h2>
                <p>{article.title}</p>
              </div>
            ))}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default SportsLeft;
