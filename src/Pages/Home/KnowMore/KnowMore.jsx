import News1 from "../../../assets/imgNews/News5.png";
import News2 from "../../../assets/imgNews/News6.png";

const KnowMore = () => {
  return (
    <div className="bg-white  flex justify-center ">
      <div className="w-[1311px] py-10 border-b-4 border-gray-300">
        <div className="grid grid-cols-2 gap-2 mx-auto">
          <a href="">
            <img src={News1} alt="" />
          </a>
          <a href="">
            <img src={News2} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default KnowMore;
