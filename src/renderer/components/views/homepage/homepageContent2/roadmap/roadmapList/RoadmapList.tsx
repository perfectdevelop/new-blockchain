import React from 'react';
import "./index.scss";
import HomeAcordion from "../../homeAcordion/HomeAcordion";
import { useState } from "react";
export default function RoadmapList(): JSX.Element {
  const [current, setCurrent] = useState(6);

  const handleExpanding = (index: number) => {
    if (current === index) {
      setCurrent(6);
    } else {
      setCurrent(index);
    }
  };
  return (
    <div className="hp-roadmap-list">
      <HomeAcordion
        header="Degenerate Ape Gallery"
        text="Want a way to view the entire student directory? Yeah, so do we. The first thing we will be working on after our launch is a way for you to not only see all 10,000 apes, but a way of filtering them by trait; the ultimate way to stalk other degenerate apes."
        expanded={current === 0}
        onChange={() => handleExpanding(0)}
      />
      <HomeAcordion
        header="Website 2.0"
        text="This is where the magic happens. The next version of our site is where we plan to focus our attention, to bring utility to our degenerate students. We will be reinvesting a chunk of our enrolment fees into a professional level user experience & user interface design. After all, the website will be the hub for our utility so we’d expect nothing less than a seamless and fun experience for our students. A couple of the bigger ticket items for the website are detailed further down."
        expanded={current === 1}
        onChange={() => handleExpanding(1)}
      />
      <HomeAcordion
        header="Interactive 3D Academy"
        text="Yea, that's right. We are going to build the academy in 3D and allow our students to interact with it on the website. You will be able to see what's inside and use the academy as a way of navigating through our different internal experiences. The first one we will be adding is the ‘Crayon Corner,’ where our students can create works of art and submit them to the community for voting, along with other budding artists, to try to win prizes. This is an example of just one of the many experiences we will be introducing. We are not just building this for you, but with you. The academy will be community driven and we will include all students in the process of future expansion."
        expanded={current === 2}
        onChange={() => handleExpanding(2)}
      />
      <HomeAcordion
        header="Charity"
        text="One of the most positive aspects that has come out of NFT projects has been the selfless donations to beautiful causes tied to the theme of that project. The Degenerate Ape Academy will be no different. However, rather than just doing a one off donation and moving on, we are looking to establish a way of building regular donations into the mechanic of the academy. Like others, we are planning multiple charity auction colab of 1/1 Apes, but we are also looking to add things such as an ‘altruistic lottery’ to our regular operations."
        expanded={current === 3}
        onChange={() => handleExpanding(3)}
      />
      <HomeAcordion
        header="Marketplace"
        text="We are still very much in the early days of Solana. So much so that a ‘go-to’ marketplace for multiple NFT projects still hasn’t been established. While there are a few options that look to be good contenders, we feel as though a degen academy marketplace could provide another excellent option for the community. A chunk of our enrollment fees will be spent working with a dedicated web design/development team to create a marketplace hub that provides a seamless, hassle-free and enjoyable way of browsing, buying and listing NFT’s on Solana. The Marketplace will be an academy venture so a certain percentage of overall sales will be fed back into our community vault for future academy/project expansion."
        expanded={current === 4}
        onChange={() => handleExpanding(4)}
      />
      <HomeAcordion
        header="Roadmap 2.0"
        text="We are here for the long haul. The founders of the Academy and the team we are building all believe in the future of NFTs. The space is young, exciting and still has so much room to grow. That is why when our key roadmap items above are complete, we will detail our next set of plans to grow the academy. While a lot of this roadmap will be built in conjunction with you, the students of these prestigious halls, one long term venture we will be setting our focus on is a video game. The game will have every single ape as a playable driver in a student only kart racing game. The karts you build and race will be NFTs and unlocking parts to pimp them out with will be won in the game and be given out as rewards in the community. We are very excited about this one and will share more info in the near future. But let's not get too ahead of ourselves!"
        expanded={current === 5}
        onChange={() => handleExpanding(5)}
      />
    </div>
  );
}
