import React from "react";
import news from "../../../assets/Footer/news.png";
import google from "../../../assets/Footer/google.png";
import apple from "../../../assets/Footer/apple.png";

const IconsAndPlay = () => {
  return (
    <div className="grid grid-cols-2 justify-between py-5">
      <div>
        <h1 className="text-sm font-thin ml-16">অনুসরণ করুন</h1>
        <div className="mt-4 flex gap-2">
          {/* Facebook Icon */}
          <div className="w-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              width="28"
              viewBox="0 0 32 32"
              enable-background="new 0 0 32 32"
              xml:space="preserve"
            >
              <path
                fill="#1877F2"
                d="M16,0L16,0c8.837,0,16,7.163,16,16l0,0c0,8.837-7.163,16-16,16l0,0C7.163,32,0,24.837,0,16l0,0 C0,7.163,7.163,0,16,0z"
              ></path>
              <path
                fill="#FFFFFF"
                d="M18,17.5h2.5l1-4H18v-2c0-1.03,0-2,2-2h1.5V6.14C21.174,6.097,19.943,6,18.643,6C15.928,6,14,7.657,14,10.7 v2.8h-3v4h3V26h4V17.5z"
              ></path>
            </svg>
          </div>
          {/* X Icon */}
          <div className="w-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              enable-background="new 0 0 24 24"
              xml:space="preserve"
              height="28"
              width="28"
            >
              <circle fill="#0F1419" cx="12" cy="12" r="12"></circle>
              <path
                fill="#FFFFFF"
                d="M15.531,7h1.662l-3.63,4.236L17.833,17h-3.343l-2.62-3.495L8.876,17H7.212l3.882-4.531L7,7h3.427
l2.366,3.195L15.531,7z M14.947,15.986h0.92L9.926,7.962H8.937L14.947,15.986z"
              ></path>
            </svg>
          </div>
          {/* Insta Icon */}
          <div className="w-10">
            <svg
              height="28"
              width="28"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              enableBackground="new 0 0 32 32"
              xmlSpace="preserve"
            >
              <radialGradient
                id="SVGID_1_"
                cx="-246.536"
                cy="264.8975"
                r="1"
                gradientTransform="matrix(1.941947e-15 -31.7144 -29.4969 -1.806164e-15 7822.1538 -7784.2769)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "rgb(255, 221, 85)" }} />
                <stop offset="0.1" style={{ stopColor: "rgb(255, 221, 85)" }} />
                <stop offset="0.5" style={{ stopColor: "rgb(255, 84, 62)" }} />
                <stop offset="1" style={{ stopColor: "rgb(200, 55, 171)" }} />
              </radialGradient>
              <circle fill="url(#SVGID_1_)" cx="16" cy="16" r="16" />
              <radialGradient
                id="SVGID_2_"
                cx="-219.16"
                cy="276.2076"
                r="1"
                gradientTransform="matrix(2.7825 13.9007 57.2992 -11.4697 -15222.0215 6216.8076)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "rgb(55, 113, 200)" }} />
                <stop
                  offset="0.128"
                  style={{ stopColor: "rgb(55, 113, 200)" }}
                />
                <stop
                  offset="1"
                  style={{ stopColor: "rgb(102, 0, 255)", stopOpacity: 0 }}
                />
              </radialGradient>
              <circle
                id="circle2"
                fill="url(#SVGID_2_)"
                cx="16"
                cy="16"
                r="16"
              />
              <path
                fill="#FFFFFF"
                d="M16.001,6c-2.716,0-3.057,0.012-4.123,0.06c-1.065,0.049-1.791,0.217-2.427,0.465 C8.793,6.78,8.235,7.122,7.679,7.678C7.123,8.234,6.781,8.792,6.525,9.449c-0.248,0.636-0.417,1.363-0.465,2.427 C6.012,12.943,6,13.284,6,16s0.012,3.056,0.06,4.122c0.049,1.065,0.217,1.791,0.465,2.427c0.256,0.658,0.597,1.216,1.153,1.771 c0.556,0.556,1.114,0.899,1.771,1.154c0.636,0.247,1.363,0.416,2.428,0.465C12.943,25.988,13.284,26,16,26 c2.716,0,3.056-0.012,4.123-0.06c1.065-0.049,1.792-0.217,2.428-0.465c0.657-0.255,1.215-0.598,1.77-1.154 c0.556-0.556,0.898-1.114,1.154-1.771c0.246-0.636,0.415-1.363,0.465-2.427C25.987,19.056,26,18.716,26,16s-0.012-3.057-0.06-4.123 c-0.05-1.065-0.219-1.791-0.465-2.427c-0.256-0.658-0.598-1.216-1.154-1.771c-0.556-0.556-1.113-0.898-1.771-1.153 c-0.638-0.247-1.365-0.416-2.429-0.465C19.054,6.012,18.714,6,15.998,6H16.001z M15.104,7.802c0.266,0,0.563,0,0.897,0 c2.67,0,2.987,0.01,4.041,0.057c0.975,0.045,1.504,0.207,1.857,0.344c0.467,0.181,0.799,0.398,1.149,0.748 c0.35,0.35,0.567,0.683,0.748,1.15c0.137,0.352,0.3,0.881,0.344,1.856c0.048,1.054,0.058,1.371,0.058,4.04 c0,2.669-0.01,2.985-0.058,4.04c-0.045,0.975-0.208,1.504-0.344,1.856c-0.181,0.467-0.398,0.799-0.748,1.149 c-0.35,0.35-0.682,0.567-1.149,0.748c-0.352,0.138-0.882,0.3-1.857,0.345c-1.054,0.048-1.371,0.058-4.041,0.058 c-2.67,0-2.987-0.01-4.041-0.058c-0.975-0.045-1.504-0.208-1.857-0.345c-0.467-0.181-0.8-0.398-1.15-0.748 c-0.35-0.35-0.567-0.683-0.748-1.149c-0.137-0.352-0.3-0.881-0.344-1.856c-0.048-1.054-0.058-1.371-0.058-4.041 s0.01-2.985,0.058-4.04c0.045-0.975,0.207-1.504,0.344-1.857c0.181-0.467,0.398-0.8,0.748-1.15c0.35-0.35,0.683-0.567,1.15-0.748 c0.352-0.137,0.882-0.3,1.857-0.345c0.922-0.042,1.28-0.054,3.144-0.056V7.802z M21.339,9.462c-0.662,0-1.2,0.537-1.2,1.2 c0,0.663,0.538,1.2,1.2,1.2c0.663,0,1.2-0.537,1.2-1.2C22.539,10,22.001,9.462,21.339,9.462L21.339,9.462z M16.001,10.865 c-2.836,0-5.135,2.299-5.135,5.135s2.299,5.134,5.135,5.134c2.836,0,5.135-2.298,5.135-5.134S18.837,10.865,16.001,10.865 L16.001,10.865z M16.001,12.667c1.841,0,3.333,1.492,3.333,3.333c0,1.841-1.493,3.333-3.333,3.333c-1.841,0-3.333-1.493-3.333-3.333 C12.667,14.159,14.16,12.667,16.001,12.667L16.001,12.667z"
              ></path>
            </svg>
          </div>
          {/* Youtube Icon */}
          <div className="w-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              width="28"
              viewBox="0 0 32 32"
              enable-background="new 0 0 32 32"
              xml:space="preserve"
            >
              <path
                fill="#FF0000"
                d="M16,0L16,0c8.837,0,16,7.163,16,16l0,0c0,8.837-7.163,16-16,16l0,0C7.163,32,0,24.837,0,16l0,0 C0,7.163,7.163,0,16,0z"
              ></path>
              <path
                fill="#FFFFFF"
                d="M25.543,10.498C26,12.28,26,16,26,16s0,3.72-0.457,5.502c-0.254,0.985-0.997,1.76-1.938,2.022 C21.896,24,16,24,16,24s-5.893,0-7.605-0.476c-0.945-0.266-1.687-1.04-1.938-2.022C6,19.72,6,16,6,16s0-3.72,0.457-5.502 c0.254-0.985,0.997-1.76,1.938-2.022C10.107,8,16,8,16,8s5.896,0,7.605,0.476C24.55,8.742,25.292,9.516,25.543,10.498L25.543,10.498 z M14,19.5l6-3.5l-6-3.5V19.5z"
              ></path>
            </svg>
          </div>
          {/* News Icon */}
          <div className="w-10">
            <img src={news} alt="" />
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-end">
        <h1 className="text-sm font-thin mr-10">মোবাইল অ্যাপস ডাউনলোড করুন</h1>
        <div className="mt-4 flex gap-2">
          <div>
            <img src={google} alt="" className="w-32 h-10" />
          </div>
          <div>
            <img src={apple} alt="" className="w-32 h-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconsAndPlay;
