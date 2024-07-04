import add from "../../../assets/TopAds/Add2.webp";

const ThirdAd = () => {
  return (
    <div className=" h-[300px] flex justify-center items-center bg-white  ">
      <div className="my-10 ">
        <div className="w-[970px] h-[250px] my-5">
          <img
            src={add}
            alt="Advertisement"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdAd;
