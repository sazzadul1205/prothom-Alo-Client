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
    <header className="bg-white border-b w-full h-28 py-2 text-black">
      <div className="max-w-screen-xl mx-auto py-2 px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src={icon} alt="Logo" className="h-16 w-64" />
          </div>

          <div className="flex space-x-4">
            {articles.map((article, index) => (
              <div key={index} className="flex items-start relative">
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
