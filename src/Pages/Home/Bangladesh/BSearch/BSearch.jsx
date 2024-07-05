import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";

// Mock data for divisions, districts, and upazilas
const data = {
  "ঢাকা বিভাগ": {
    districts: [
      "ঢাকা",
      "গাজীপুর",
      "নারায়ণগঞ্জ",
      "টাঙ্গাইল",
      "কিশোরগঞ্জ",
      "মানিকগঞ্জ",
      "মুন্সীগঞ্জ",
      "নরসিংদী",
      "রাজবাড়ী",
      "গোপালগঞ্জ",
      "মাদারীপুর",
      "ফরিদপুর",
      "শরীয়তপুর",
    ],
    upazilas: {
      ঢাকা: ["উত্তরা", "মিরপুর", "ধানমন্ডি", "গুলশান", "বাড্ডা"],
      গাজীপুর: ["টঙ্গী", "কাপাসিয়া", "কালীগঞ্জ", "শ্রীপুর", "কালিয়াকৈর"],
      নারায়ণগঞ্জ: ["ফতুল্লা", "সিদ্ধিরগঞ্জ", "বন্দর", "আড়াইহাজার", "রূপগঞ্জ"],
      টাঙ্গাইল: ["টাঙ্গাইল সদর", "ঘাটাইল", "মধুপুর", "গোপালপুর", "দেলদুয়ার"],
      কিশোরগঞ্জ: ["কিশোরগঞ্জ সদর", "ভৈরব", "হোসেনপুর", "কুলিয়ারচর", "ইটনা"],
      মানিকগঞ্জ: ["মানিকগঞ্জ সদর", "সাটুরিয়া", "শিবালয়", "ঘিওর", "দৌলতপুর"],
      মুন্সীগঞ্জ: [
        "মুন্সীগঞ্জ সদর",
        "গজারিয়া",
        "শ্রীনগর",
        "লৌহজং",
        "টঙ্গিবাড়ি",
      ],
      নরসিংদী: ["নরসিংদী সদর", "রায়পুরা", "বেলাবো", "মনোহরদী", "পলাশ"],
      রাজবাড়ী: ["রাজবাড়ী সদর", "গোয়ালন্দ", "পাংশা", "বালিয়াকান্দি", "কালুখালী"],
      গোপালগঞ্জ: [
        "গোপালগঞ্জ সদর",
        "কাশিয়ানী",
        "মুকসুদপুর",
        "কোটালীপাড়া",
        "টুঙ্গিপাড়া",
      ],
      মাদারীপুর: ["মাদারীপুর সদর", "শিবচর", "কালকিনি", "রাজৈর"],
      ফরিদপুর: ["ফরিদপুর সদর", "নগরকান্দা", "সদরপুর", "ভাঙ্গা", "চরভদ্রাসন"],
      শরীয়তপুর: [
        "শরীয়তপুর সদর",
        "নড়িয়া",
        "জাজিরা",
        "গোসাইরহাট",
        "ভেদরগঞ্জ",
      ],
    },
  },
  "চট্টগ্রাম বিভাগ": {
    districts: [
      "চট্টগ্রাম",
      "কক্সবাজার",
      "বান্দরবান",
      "রাঙ্গামাটি",
      "খাগড়াছড়ি",
      "নোয়াখালী",
      "লক্ষ্মীপুর",
      "ফেনী",
      "ব্রাহ্মণবাড়িয়া",
      "কুমিল্লা",
      "চাঁদপুর",
    ],
    upazilas: {
      চট্টগ্রাম: ["হালিশহর", "পতেঙ্গা", "কর্ণফুলী", "বাকলিয়া", "সীতাকুণ্ড"],
      কক্সবাজার: ["উখিয়া", "টেকনাফ", "চকরিয়া", "মহেশখালী", "রামু"],
      বান্দরবান: ["থানচি", "রুমা", "রোয়াংছড়ি", "লামা", "নাইক্ষ্যংছড়ি"],
      রাঙ্গামাটি: ["কাপ্তাই", "বিলাইছড়ি", "লংগদু", "বরকল", "জুরাইছড়ি"],
      খাগড়াছড়ি: [
        "দীঘিনালা",
        "মাটিরাঙ্গা",
        "লক্ষীছড়ি",
        "মানিকছড়ি",
        "পানছড়ি",
      ],
      নোয়াখালী: ["সদর", "বেগমগঞ্জ", "চাটখিল", "সোনাইমুড়ি", "কোম্পানীগঞ্জ"],
      লক্ষ্মীপুর: ["সদর", "রামগঞ্জ", "কমলনগর", "রায়পুর", "রামগতি"],
      ফেনী: ["ফেনী সদর", "ছাগলনাইয়া", "ফুলগাজী", "পরশুরাম", "দাগনভূঞা"],
      ব্রাহ্মণবাড়িয়া: [
        "ব্রাহ্মণবাড়িয়া সদর",
        "সরাইল",
        "আশুগঞ্জ",
        "নাসিরনগর",
        "বিজয়নগর",
      ],
      কুমিল্লা: [
        "কুমিল্লা সদর",
        "দাউদকান্দি",
        "বরুড়া",
        "চৌদ্দগ্রাম",
        "ব্রাহ্মণপাড়া",
      ],
      চাঁদপুর: [
        "চাঁদপুর সদর",
        "মতলব উত্তর",
        "মতলব দক্ষিণ",
        "হাজীগঞ্জ",
        "শাহরাস্তি",
      ],
    },
  },
  "রাজশাহী বিভাগ": {
    districts: [
      "রাজশাহী",
      "নাটোর",
      "চাঁপাইনবাবগঞ্জ",
      "পাবনা",
      "সিরাজগঞ্জ",
      "বগুড়া",
      "জয়পুরহাট",
      "নওগাঁ",
    ],
    upazilas: {
      রাজশাহী: ["পবা", "মোহনপুর", "চারঘাট", "বাঘা", "তানোর"],
      নাটোর: ["নাটোর সদর", "বাগাতিপাড়া", "লালপুর", "গুরুদাসপুর", "সিংড়া"],
      চাঁপাইনবাবগঞ্জ: ["সদর", "শিবগঞ্জ", "ভোলাহাট", "গোমস্তাপুর", "নাচোল"],
      পাবনা: ["সদর", "বেড়া", "সুজানগর", "ভাঙ্গুড়া", "চাটমোহর"],
      সিরাজগঞ্জ: [
        "সিরাজগঞ্জ সদর",
        "কামারখন্দ",
        "রায়গঞ্জ",
        "উল্লাপাড়া",
        "চৌহালী",
      ],
      বগুড়া: ["সদর", "শাজাহানপুর", "গাবতলী", "ধুনট", "শেরপুর"],
      জয়পুরহাট: ["সদর", "কালাই", "আক্কেলপুর", "ক্ষেতলাল", "পাঁচবিবি"],
      নওগাঁ: ["সদর", "মান্দা", "নিয়ামতপুর", "পোরশা", "রাণীনগর"],
    },
  },
  "খুলনা বিভাগ": {
    districts: [
      "খুলনা",
      "যশোর",
      "কুষ্টিয়া",
      "মেহেরপুর",
      "নড়াইল",
      "চুয়াডাঙ্গা",
      "বাগেরহাট",
      "ঝিনাইদহ",
      "মাগুরা",
      "সাতক্ষীরা",
    ],
    upazilas: {
      খুলনা: ["সদর", "ডুমুরিয়া", "ফুলতলা", "রূপসা", "তেরখাদা"],
      যশোর: ["সদর", "মণিরামপুর", "অভয়নগর", "ঝিকরগাছা", "কেশবপুর"],
      কুষ্টিয়া: ["সদর", "ভেড়ামারা", "দৌলতপুর", "কুমারখালী", "মিরপুর"],
      মেহেরপুর: ["সদর", "মুজিবনগর", "গাংনী"],
      নড়াইল: ["সদর", "লোহাগড়া", "কালিয়া"],
      চুয়াডাঙ্গা: ["সদর", "আলমডাঙ্গা", "জীবননগর", "দামুড়হুদা"],
      বাগেরহাট: ["সদর", "মোংলা", "মোল্লাহাট", "কচুয়া", "রামপাল"],
      ঝিনাইদহ: ["সদর", "শৈলকূপা", "কালীগঞ্জ", "হরিণাকুন্ডু", "কোটচাঁদপুর"],
      মাগুরা: ["সদর", "শালিখা", "মহম্মদপুর", "শ্রীপুর"],
      সাতক্ষীরা: ["সদর", "শ্যামনগর", "কলারোয়া", "আশাশুনি", "তালা"],
    },
  },
  "বরিশাল বিভাগ": {
    districts: [
      "বরিশাল",
      "পটুয়াখালী",
      "ভোলা",
      "বরগুনা",
      "ঝালকাঠি",
      "পিরোজপুর",
    ],
    upazilas: {
      বরিশাল: ["সদর", "বাকেরগঞ্জ", "বাবুগঞ্জ", "মুলাদী", "উজিরপুর"],
      পটুয়াখালী: ["সদর", "কলাপাড়া", "গলাচিপা", "রাঙ্গাবালী", "বাউফল"],
      ভোলা: ["সদর", "বোরহানউদ্দিন", "লালমোহন", "তজুমদ্দিন", "দৌলতখান"],
      বরগুনা: ["সদর", "পাথরঘাটা", "বেতাগী", "বামনা", "আমতলী"],
      ঝালকাঠি: ["সদর", "কাঁঠালিয়া", "রাজাপুর", "নলছিটি"],
      পিরোজপুর: ["সদর", "মঠবাড়িয়া", "ভান্ডারিয়া", "নাজিরপুর", "কাউখালী"],
    },
  },
  "সিলেট বিভাগ": {
    districts: ["সিলেট", "মৌলভীবাজার", "হবিগঞ্জ", "সুনামগঞ্জ"],
    upazilas: {
      সিলেট: ["সদর", "বালাগঞ্জ", "বিয়ানীবাজার", "গোলাপগঞ্জ", "কোম্পানীগঞ্জ"],
      মৌলভীবাজার: ["সদর", "শ্রীমঙ্গল", "কমলগঞ্জ", "কুলাউড়া", "রাজনগর"],
      হবিগঞ্জ: ["সদর", "বাহুবল", "নবীগঞ্জ", "লাখাই", "মাধবপুর"],
      সুনামগঞ্জ: ["সদর", "দিরাই", "শাল্লা", "জগন্নাথপুর", "তাহিরপুর"],
    },
  },
  "রংপুর বিভাগ": {
    districts: [
      "রংপুর",
      "দিনাজপুর",
      "পঞ্চগড়",
      "ঠাকুরগাঁও",
      "নীলফামারী",
      "লালমনিরহাট",
      "কুড়িগ্রাম",
      "গাইবান্ধা",
    ],
    upazilas: {
      রংপুর: ["সদর", "গঙ্গাচড়া", "তারাগঞ্জ", "পীরগঞ্জ", "বদরগঞ্জ"],
      দিনাজপুর: ["সদর", "বিরল", "বোচাগঞ্জ", "পার্বতীপুর", "ফুলবাড়ি"],
      পঞ্চগড়: ["সদর", "তেতুলিয়া", "বোদা", "আটোয়ারী", "দেবীগঞ্জ"],
      ঠাকুরগাঁও: ["সদর", "বালিয়াডাঙ্গী", "রাণীশংকৈল", "পীরগঞ্জ", "হরিপুর"],
      নীলফামারী: ["সদর", "ডোমার", "ডিমলা", "জলঢাকা", "কিশোরগঞ্জ"],
      লালমনিরহাট: ["সদর", "পাটগ্রাম", "হাতিবান্ধা", "কালীগঞ্জ", "আদিতমারী"],
      কুড়িগ্রাম: ["সদর", "রাজারহাট", "উলিপুর", "চিলমারী", "ভূরুঙ্গামারী"],
      গাইবান্ধা: ["সদর", "পলাশবাড়ী", "গোবিন্দগঞ্জ", "সাদুল্লাপুর", "ফুলছড়ি"],
    },
  },
  "ময়মনসিংহ বিভাগ": {
    districts: ["ময়মনসিংহ", "জামালপুর", "শেরপুর", "নেত্রকোনা"],
    upazilas: {
      ময়মনসিংহ: ["সদর", "গৌরীপুর", "ত্রিশাল", "ফুলপুর", "হালুয়াঘাট"],
      জামালপুর: ["সদর", "মেলান্দহ", "ইসলামপুর", "দেওয়ানগঞ্জ", "বকশীগঞ্জ"],
      শেরপুর: ["সদর", "নকলা", "নালিতাবাড়ী", "শ্রীবরদী", "ঝিনাইগাতী"],
      নেত্রকোনা: ["সদর", "মদন", "খালিয়াজুড়ি", "দুর্গাপুর", "কলমাকান্দা"],
    },
  },
};

const BSearch = () => {
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);

  const handleDivisionChange = (e) => {
    const division = e.target.value;
    setSelectedDivision(division);
    setSelectedDistrict("");
    setUpazilas([]);

    if (division && data[division]) {
      setDistricts(data[division].districts);
    } else {
      setDistricts([]);
    }
  };

  const handleDistrictChange = (e) => {
    const district = e.target.value;
    setSelectedDistrict(district);

    if (
      district &&
      selectedDivision &&
      data[selectedDivision].upazilas[district]
    ) {
      setUpazilas(data[selectedDivision].upazilas[district]);
    } else {
      setUpazilas([]);
    }
  };

  return (
    <div className="bg-[#F3F2FD] grid grid-cols-1 md:grid-cols-5 gap-5 h-auto md:h-20 p-5 md:p-0">
      <div className="flex justify-center items-center">
        <FaLocationCrosshairs className="text-red-500 mr-5" />
        <h1>আমার এলাকার খবর</h1>
      </div>
      <div>
        <select
          className="select select-bordered w-full max-w-xs bg-blue-200 mt-5 md:mt-4"
          value={selectedDivision}
          onChange={handleDivisionChange}
        >
          <option value="">বিভাগ</option>
          {Object.keys(data).map((division) => (
            <option key={division} value={division}>
              {division}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          className="select select-bordered w-full max-w-xs bg-blue-200 mt-5 md:mt-4"
          value={selectedDistrict}
          onChange={handleDistrictChange}
          disabled={!selectedDivision}
        >
          <option value="">জেলা</option>
          {districts.map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          className="select select-bordered w-full max-w-xs bg-blue-200 mt-5 md:mt-4"
          disabled={!selectedDistrict}
        >
          <option value="">উপজেলা</option>
          {upazilas.map((upazila) => (
            <option key={upazila} value={upazila}>
              {upazila}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button className="btn btn-active btn-primary mt-5 md:mt-0 text-white px-10 w-full">
          <FaSearch /> খুঁজুন
        </button>
      </div>
    </div>
  );
};

export default BSearch;
