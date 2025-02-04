import LeftNews from "./LeftNews/LeftNews";
import MiddleNews from "./MiddleNews/MiddleNews";
import RightNews from "./RightNews/RightNews";

const News = () => {
  return (
    <div className="bg-white border-b w-full text-black py-4">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between gap-4">
        <LeftNews />
        <div className="hidden lg:block border border-black"></div>
        <MiddleNews />
        <div className="hidden lg:block border border-black"></div>
        <RightNews />
      </div>
    </div>
  );
};

export default News;
