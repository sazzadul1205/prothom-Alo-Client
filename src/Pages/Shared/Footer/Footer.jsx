import icon from "../../../assets/Footer/com.png";

import IconsAndPlay from "./IconsAndPlay";
import FMore from "./FMore";
import End from "./End";

const Footer = () => {
  return (
    <div className="bg-white border-b w-full text-black">
      <div className="max-w-screen-xl mx-auto">
        {/* Main Content */}
        <div className="py-5 border-t border-b">
          <div className="flex items-center justify-center">
            <img src={icon} alt="icon" className="py-5" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 py-5 font-light">
            <div className="col-span-2 md:col-auto">নাগরিক সংবাদ</div>
            <div className="col-span-2 md:col-auto">কিশোর আলো</div>
            <div className="col-span-2 md:col-auto">বিজ্ঞানচিন্তা</div>
            <div className="col-span-2 md:col-auto">প্রথম আলো ট্রাস্ট</div>
            <div className="col-span-2 md:col-auto">বন্ধুসভা</div>
            <div className="col-span-2 md:col-auto">চিরন্তন ১৯৭১</div>
            <div className="col-span-2 md:col-auto">ইপেপার</div>
            <div className="col-span-2 md:col-auto">প্রথমা</div>
            <div className="col-span-2 md:col-auto">মোবাইল ভ্যাস</div>
          </div>
        </div>

        {/* Icons and Play */}
        <IconsAndPlay />

        {/* Footer More Links */}
        <FMore />

        {/* Footer End */}
        <End />
      </div>
    </div>
  );
};
export default Footer;
