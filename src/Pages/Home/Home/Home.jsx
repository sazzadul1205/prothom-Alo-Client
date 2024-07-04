import News from "../News/News";
import ForMe from "../ForMe/ForMe";
import Sports from "../Sports/Sports";
import Bangladesh from "../Bangladesh/Bangladesh";
import World from "../World/World";
import Entertainment from "../Entertainment/Entertainment";
import Living from "../Living/Living";
import Opinions from "../Opinions/Opinions";
import Business from "../Business/Business";
import Paper from "../Paper/Paper";
import Images from "../Images/Images";
import Videos from "../Videos/Videos";
import More from "../More/More";
import FirstAd from "../Ads/FirstAd";
import SecondAd from "../Ads/SecondAd";
import ThirdAd from "../Ads/ThirdAd";
import Optional from "../Optional/Optional";
import KnowMore from "../KnowMore/KnowMore";
import TimedNews from "../TimedNews/TimedNews";
import Others from "../Others/Others";

const Home = () => {
  return (
    <div>
      <FirstAd></FirstAd> {/* Adds */}
      <News></News>
      <SecondAd></SecondAd> {/* Adds */}
      <Optional></Optional>
      <KnowMore></KnowMore>
      <ForMe></ForMe>
      <Sports></Sports>
      <Bangladesh></Bangladesh>
      <World></World>
      <Entertainment></Entertainment>
      <Living></Living>
      <Opinions></Opinions>
      <Business></Business>
      <ThirdAd></ThirdAd> {/* Adds */}
      <Paper></Paper>
      <Images></Images>
      <Videos></Videos>
      <TimedNews></TimedNews>
      <More></More>
      <Others></Others>
    </div>
  );
};

export default Home;
