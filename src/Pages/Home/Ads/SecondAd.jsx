import add from "../../../assets/TopAds/Add2.webp";

const SecondAd = () => {
  return (
    <div className="bg-[#f7f7f7] lg:h-[314px] flex justify-center items-center">
      <div className="w-full max-w-[970px] lg:h-[250px]">
        <img
          src={add}
          alt="Advertisement"
          className="w-full h-full object-contain"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default SecondAd;
