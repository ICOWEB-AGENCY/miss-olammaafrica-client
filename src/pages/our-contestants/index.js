import React, { useEffect, useState } from "react";
import { Contestants, Footer } from "../../components";
import { useRouter } from "next/router";

import { Header } from "../../components";

export default function RoadToCrown() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(router.query.tab || 0);

  useEffect(() => {
    // router.push("road-to-crown?tab=" + activeTab, undefined, { shallow: true });

    setActiveTab(router.query.tab || 0);
  }, [activeTab, router]);
  return (
    <div>
      <Header title="Our Contestants" subTitle="And their Beautiful Smiles" />
      <Contestants />
      <Footer />
    </div>
  );
}
