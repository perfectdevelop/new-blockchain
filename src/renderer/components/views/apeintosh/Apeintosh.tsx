import React from 'react';
import "./index.scss";
import ApeintoshContent from "./apeintoshContent/ApeintoshContent";
import { useRef, useState, useEffect } from "react";
import useDidUpdateEffect from "../../../hooks/useDidUpdateEffect";
import useReduxState from "../../../hooks/useReduxState";
import { useMediaQuery } from "react-responsive";
import ApesRemaining from "./apesRemaining/ApesRemaining";
import Carousel from "react-spring-3d-carousel-2";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
/*eslint-disable react-hooks/exhaustive-deps */

import ApeintoshImg from "../../../../assets/images/pictures/backgrounds/pc-off.png";

import { ReactComponent as ScrollWeb } from "../../../../assets/images/pictures/icons/scroll-web.svg";
import { ReactComponent as ScrollMobile } from "../../../../assets/images/pictures/icons/scroll-mobile.svg";
import Homeback from '../../../../assets/images/pictures/backgrounds/home-back.png';
import Discord from '../../../../assets/images/pictures/social/discord.png';
import Twitter from '../../../../assets/images/pictures/social/twitter.png';

import Image1 from '../../../../assets/images/tokens/1.jpg'
import Image2 from '../../../../assets/images/tokens/2.jpg'
import Image3 from '../../../../assets/images/tokens/3.jpg'
import Image4 from '../../../../assets/images/tokens/4.jpg'
import Image5 from '../../../../assets/images/tokens/5.jpg'
import Image6 from '../../../../assets/images/tokens/6.jpg'
import { AddShoppingCart, SettingsInputComponentSharp } from '@material-ui/icons';
import { useAppSelector } from 'src/renderer/redux/stores/store';


export default function Apeintosh(): JSX.Element {

  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(2);
  
  const [showArrows, setShowArrows] = useState(false);
  const [showNavigation, setShowNavigation] = useState(true);
  

  const [status, setStatus] = useState('start');

  
  // const [config, setConfig] = useState(config.gentle);
  const configs = config.gentle;

  const slides = [
    {
      key: uuidv4(),
      content: <img src={Image1} alt="1" />
    },
    {
      key: uuidv4(),
      content: <img src={Image2} alt="2" />
    },
    {
      key: uuidv4(),
      content: <img src={Image3} alt="3" />
    },
    {
      key: uuidv4(),
      content: <img src={Image4} alt="4" />
    },
    {
      key: uuidv4(),
      content: <img src={Image5} alt="5" />
    },
    {
      key: uuidv4(),
      content: <img src={Image6} alt="6" />
    }
  ]

  // const apeintoshImg = useRef<HTMLImageElement>(null);
  // const [size, setSize] = useState<{ width: string; height: string }>({
  //   width: "0px",
  //   height: "0px",
  // });

  // const [{ wallet, screenLoading: loading }, setGlobalData] = useReduxState(
  //   (state) => state.globalData
  // );
  // const handleResize = () => {
  //   if (apeintoshImg && apeintoshImg.current) {
  //     setSize({
  //       height: `${apeintoshImg.current.clientHeight}px`,
  //       width: `${apeintoshImg.current.clientWidth}px`,
  //     });
  //   }
  // };

  // const isMobile = useMediaQuery({
  //   query: "(max-width:992px)",
  // });

  // useEffect(() => {
  //   // setInterval(function() {console.log("object")}, 3000);
  //   window.addEventListener("resize", handleResize);
  //   handleResize();
  // }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setGoToSlide(goToSlide + 1);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  // useDidUpdateEffect(() => {
  //   if (wallet) {
  //     wallet!.on("connect", () => {
  //       setGlobalData({
  //         type: "SET_GLOBAL_DATA",
  //         arg: {
  //           connected: true,
  //         },
  //       });
  //     });
  //     wallet!.on("disconnect", () => {
  //       setGlobalData({
  //         type: "SET_GLOBAL_DATA",
  //         arg: {
  //           connected: false,
  //         },
  //       });
  //     });

  //     wallet!.connect();
  //     return () => {
  //       wallet!.disconnect();
  //     };
  //   }
  // }, [wallet]);

  // useDidUpdateEffect(() => {
  //   handleResize();
  // }, [loading]);

  // const current = () => {
  //   let now = new Date();
 
  //   var dateString = moment(now).format('YYYY-MM-DD');
  //   console.log(dateString) // Output: 2020-07-21
    
  //   var dateStringWithTime = moment(now).format('YYYY-MM-DD HH:MM:SS');
  //   console.log(dateStringWithTime)
  //   return (
  //     <p>{dateStringWithTime}</p>
  //   )
  // }
  
  const [date, setDate] = useState(new Date().getHours());
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [day, setDay] = useState(new Date().getDate());

  useEffect(() => {
    var timerID = setInterval( () => tick(), 1000 );
    return function cleanup() {
        clearInterval(timerID);
      };
   });

  useEffect(() => {
    var timerID = setInterval( () => plus(), 2000 );
    return function cleanup() {
        clearInterval(timerID);
      };
   });

   function tick() {
    setDate(new Date().getHours());
    setYear(new Date().getFullYear());
    setMonth(new Date().getMonth());
    setDay(new Date().getDate());
   }

   function plus() {
    setGoToSlide(goToSlide + 1);
   }

   const monthNames = ["January", "February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December"
    ];

  const converter = (hours:number) => {
    if(hours > 12){
      return hours - 12 + " P.M. EST Time";
    }else if(hours < 12){
      return hours + " A.M. EST Time";
    }
  }
  return (
    <div
      className="apeintosh"
    >
      {/* {setInterval(function() {console.log("object")}, 3000)} */}
      {/* {console.log("Hello")} */}
      <div className="homepages" style={{ display: "flex" }}>
        <div className="home-image">
          {/* <div className="child-home-image" >
            <div className="sub-home-image" >
              <div className="carousel-border"></div>
              <div style={{ width: "50%", height: "400px", margin: "0 auto" }} className="parent-carousel">
                {slides.length > 0 ? (
                  <Carousel
                    slides={slides}
                    goToSlide={goToSlide}
                    showNavigation={showArrows}
                    offsetRadius={offsetRadius}
                    animationConfig={configs}
                  />
                ) : null}

              </div>
              <div
                style={{
                  margin: "0 auto",
                  marginTop: "2rem",
                }}
              >
                <div className="pagination">
                  <div
                    onClick={() => {
                      setGoToSlide(goToSlide - 1);
                    }}
                  >
                    ←
                  </div>
                  <p>Mutant Ether Babies Collection</p>
                  <div
                    onClick={() => {
                      setGoToSlide(goToSlide + 1);
                    }}
                  >
                    →
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="home-titles">
          <div className="children-home-title">
            <div className="firstline">Mutant Ether Babies</div>
            {/* <div>{timer}</div> */}
            <div className="description">10,000 Out Mutant Ether Babies are on the run on Ethereum Chain.. </div>
           
            <div className="timewrap" style={{color:'white'}}>
              <p>{monthNames[month]} {day} date {converter(date)}</p>
              {/* <div className="count-down">
                <ul>
                  <li className="first">
                    <span className="days">00</span><br /><span className="date-time">DAYS</span>
                  </li>
                  <li className="second">
                    <span className="hours">00</span><br /><span className="date-time">HOURS</span>
                  </li>
                  <li className="third">
                    <span className="minutes">00</span><br /><span className="date-time">MINUTES</span>
                  </li>
                  <li className="forth">
                    <span className="seconds">00</span><br /><span className="date-time">SECONDS</span>
                  </li>
                </ul>
              </div> */}
              <div className="current-time">{}</div>
            </div>
            <p className="forthline">NFT collection Game - Metaverse</p>
            {/* <button className="get-llamanow btn-custom-button">Mint Your Mebs</button> */}
            <div className="stages">
             <p className="">Minted Mebs : <span>0</span></p>
             <p className="">Available Mebs : <span>10,000</span></p>
            </div>
          </div>
        </div>
      </div>
      {/* {isMobile ? <ScrollMobile /> : <ScrollWeb />} */}
    </div>
  );
}
