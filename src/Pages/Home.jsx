import React from "react";
import CtaCard from "../components/CtaCard";
import "primereact/resources/themes/saga-blue/theme.css"; // theme
import "primereact/resources/primereact.min.css"; // core styles
import "primeicons/primeicons.css"; // icons
import FirstAccordion from "../components/FirstAccordion";
import GetStartedCard from "../components/GetStartedCard";
import Pagination from "../components/Pagination";
import FAQ from "../components/FAQ";
import Newsletter from "../components/Newsletter";
import FeaturedPublishers from "../components/FeaturedPublishers";
import ActiveAuthors from "../components/ActiveAuthors";
import News from "../components/News";

function Home() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[3fr_1fr] gap-4 ">
      <div className="grid gap-3">
        <CtaCard />
        <FirstAccordion />
        <GetStartedCard />
        <Pagination />
        <FAQ />
      </div>
      <div className="flex flex-col gap-3">
        <Newsletter />
        <FeaturedPublishers />
        <ActiveAuthors />
        <News />
      </div>
    </div>
  );
}

export default Home;
