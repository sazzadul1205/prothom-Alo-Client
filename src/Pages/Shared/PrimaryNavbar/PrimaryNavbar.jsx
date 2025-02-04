import icon from "../../../assets/Website-Icon.png";
import image1 from "../../../assets/TopNav/TN1.jfif";
import image2 from "../../../assets/TopNav/TN2.jfif";
import image3 from "../../../assets/TopNav/TN3.jfif";
import play from "../../../assets/TopNav/red-play.png";

const articles = [
  { image: image1, text: "বৃষ্টিতে বিপাকে পরীক্ষার্থীরা" },
  { image: image2, text: "যে কারণে স্বর্ণকারদের গড় আয়ু কম" },
  { image: image3, text: "কারাগারে অনিয়ম" },
];

const PrimaryNavbar = () => {
  return (
    <header className="bg-white lg:w-full h-28 lg:py-2 text-black">
      <div className="lg:max-w-screen-xl lg:mx-auto py-2 px-4">
        <div className="flex lg:justify-between lg:items-center ">
          <div className="lg:flex lg:items-center lg:space-x-4">
            <img src={icon} alt="Logo" className="lg:h-16 lg:w-64" />
          </div>

          <div className="hidden space-x-4 lg:flex">
            {articles.map((article, index) => (
              <div key={index} className="flex lg:items-start relative">
                <img
                  src={article.image}
                  alt={`News ${index + 1}`}
                  className="h-16 w-16 object-cover rounded"
                />
                <div className="ml-2">
                  <span className="text-xs flex items-center">
                    <img src={play} className="w-3 mr-1" /> {article.text}
                  </span>
                </div>
                {index < articles.length - 1 && (
                  <div className="h-full border-l border-gray-300 top-0 ml-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default PrimaryNavbar;
