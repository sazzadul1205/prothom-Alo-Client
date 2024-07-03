import React from 'react';
import img1 from "../../../assets/imgNews/News1.jfif";
import img2 from "../../../assets/imgNews/News2.jfif";
import img3 from "../../../assets/imgNews/News3.jfif";
import img4 from "../../../assets/imgNews/News4.jfif";

const News = [
    {
        id: 1,
        title: "শিক্ষা",
        content: "ষষ্ঠ থেকে নবমে ষাণ্মাসিক মূল্যায়ন আজ শুরু, যে ১৩ নির্দেশনা মানতে হবে",
        backgroundImg: img1,
    },
    {
        id: 2,
        title: "প্রযুক্তি",
        content: "মরুভূমির শেওলা কি প্রাণ আনতে পারবে মঙ্গল গ্রহে",
        backgroundImg: img2,
    },
    {
        id: 3,
        title: "ধর্ম",
        content: "সুরা ওয়াকিয়ায় কেয়ামত সম্পর্কে জানা যায়",
        backgroundImg: img3,
    },
    {
        id: 4,
        title: "একটু থামুন",
        content: "কটন বল কী দিয়ে তৈরি হয়, জানেন?",
        backgroundImg: img4,
    },
];

const ImgNews = () => {
    return (
        <div className='bg-[#FFF3E080] py-4 flex justify-center'>
            <div className='w-[1311px]'>
                <div className='grid grid-cols-4 gap-2 mx-auto'>
                    {News.map((newsItem) => (
                        <div key={newsItem.id} className="relative h-[105px] w-[288px] ">
                            <img src={newsItem.backgroundImg} alt={newsItem.title} className="w-full h-[105px] object-cover" />
                            <div className="absolute inset-0  flex-col justify-center items-center p-2  mt-2">
                                <h1 className="text-white mb-2 text-sm hover:text-yellow-400">{newsItem.title}</h1>
                                <p className="text-white text-sm">{newsItem.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImgNews;
