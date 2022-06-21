import { useEffect, useState } from "react";
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
import styles from "./Index.module.css";

export default function RoadToCrown() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(router.query.tab || 0);

  return (
    <div>
      <Header title="Road to the crown" subTitle="Rules & Prizes" />

      <ContestAndContestant />
      <RolesAndPrizes />
      <Footer />
    </div>
  );
}
