import React, { useEffect, useState } from "react";
import {
  CompanySection,
  ContestAndContestant,
  Contestants,
  Footer,
  PageHeader,
  RolesAndPrizes,
  TopContestants,
} from "../../components";
import { useRouter } from "next/router";
import Link from "next/link";
import io from "socket.io-client";
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
