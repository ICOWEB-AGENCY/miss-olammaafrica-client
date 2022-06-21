import { useEffect, useState } from "react";
import {
  CompanySection,
  ContestAndContestant,
  Contestants,
  Footer,
  GallerySection,
  GrandFinalHostCity,
  PageHeader,
  RolesAndPrizes,
  TopContestants,
  VisionAndMission,
  VotingAndTickets,
} from "../../components";
import { useRouter } from "next/router";
import Link from "next/link";
import io from "socket.io-client";
import { Header } from "../../components";
import { Prizes } from "../../components/Prizes";

export default function RoadToCrown() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(router.query.tab || 0);

  return (
    <div>
      <Header
        title="What we've done"
        subTitle="with our amazing contributors"
      />

      <GallerySection />

      <Footer />
    </div>
  );
}
