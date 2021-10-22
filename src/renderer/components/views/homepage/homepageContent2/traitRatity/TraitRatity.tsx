import React from 'react';
import "./index.scss";
import { useRef, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export default function Apeintosh(): JSX.Element {

  const apeintoshImg = useRef<HTMLImageElement>(null);
  const [size, setSize] = useState<{ width: string; height: string }>({
    width: "0px",
    height: "0px",
  });

  const handleResize = () => {
    if (apeintoshImg && apeintoshImg.current) {
      setSize({
        height: `${apeintoshImg.current.clientHeight}px`,
        width: `${apeintoshImg.current.clientWidth}px`,
      });
    }
  };

  const isMobile = useMediaQuery({
    query: "(max-width:992px)",
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return (
    <div
      className="apeintosh"
    >
      <div className="homepages" style={{ display: "flex" }}>
        <div className="home-image">
          <div className="child-home-image" >
            <div className="sub-home-image" >
              <div className="carousel-border"></div>
              <div style={{ width: "50%", height: "400px", margin: "0 auto" }} className="parent-carousel">
              </div>
              <div
                style={{
                  margin: "0 auto",
                  marginTop: "2rem",
                }}
              >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
