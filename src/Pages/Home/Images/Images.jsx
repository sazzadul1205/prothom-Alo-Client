import { FaGreaterThan } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import def from "../../../assets/News/Default.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SliderImage = [
  {
    id: 1,
    title: " বৃষ্টিতে বেড়েছে ছাতা বিক্রি",
    imageUrl: def,
  },
  {
    id: 2,
    title: " পাহাড়ে ভারী বৃষ্টি ঝুঁকি নিয়ে বসবাস",
    imageUrl: def,
  },
  {
    id: 3,
    title: "  একঝলক (৩ জুলাই ২০২৪)",
    imageUrl: def,
  },
  {
    id: 4,
    title: "  একঝলক (২ জুলাই ২০২৪)",
    imageUrl: def,
  },
];
const ImagesNews = [
  {
    id: 1,
    title: " বৃষ্টিতে বেড়েছে ছাতা বিক্রি",
    imageUrl: def,
  },
  {
    id: 2,
    title: " পাহাড়ে ভারী বৃষ্টি ঝুঁকি নিয়ে বসবাস",
    imageUrl: def,
  },
  {
    id: 3,
    title: "  একঝলক (৩ জুলাই ২০২৪)",
    imageUrl: def,
  },
  {
    id: 4,
    title: "  একঝলক (২ জুলাই ২০২৪)",
    imageUrl: def,
  },
];

const Images = () => {
  return (
    <div className="bg-white w-full text-black py-5 pb-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center mb-4 border-t-4 border-gray-400">
          <h1 className="text-black text-xl font-bold hover:text-blue-400 flex mt-4">
            ছবি
            <FaGreaterThan className="text-red-500 text-xl ml-4 mt-1" />
          </h1>
        </div>
        <div className="flex">
          <div>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper w-[760px] h-[506px]"
            >
              {SliderImage.map((news) => (
                <SwiperSlide key={news.id}>
                  <div className="relative w-full h-full">
                    <img src={news.imageUrl} alt="" className="w-full h-full" />
                    <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-2 text-lg font-bold">
                      {news.title}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <h1 className="mt-2 text-xl font-semibold">তিন জেলায় কৃতী শিক্ষার্থী সংবর্ধনা</h1>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-5">
              {ImagesNews.map((news) => (
                <div key={news.id}>
                  <img
                    src={news.imageUrl}
                    alt=""
                    className="w-[212px] h-[212px]"
                  />
                  <h3 className="text-lg font-semibold hover:text-blue-500 mb-2">
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

export default Images;
