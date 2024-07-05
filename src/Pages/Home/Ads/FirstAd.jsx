import add from "../../../assets/TopAds/Add.webp";

const FirstAd = () => {
  return (
    <div className="bg-white border-b w-full h-auto text-black">
      <div className="max-w-screen-xl mx-auto">
        <img
          src={add}
          alt="Advertisement"
          className="mx-auto py-2 w-full md:w-auto"
        />
      </div>
    </div>
  );
};

export default FirstAd;
