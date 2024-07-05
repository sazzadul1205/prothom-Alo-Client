import News1 from "../../../assets/imgNews/News5.png";
import News2 from "../../../assets/imgNews/News6.png";

const KnowMore = () => {
  return (
    <div className="bg-white py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="#" className="block">
            <img src={News1} alt="News 1" className="w-full object-cover rounded-lg" />
          </a>
          <a href="#" className="block">
            <img src={News2} alt="News 2" className="w-full object-cover rounded-lg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default KnowMore;
