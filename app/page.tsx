import Image from "next/image";
import Hero from "../components/hero"
import Intro from "../components/intro"
import Features from "../components/features"
import Categories from "@/components/categories";
import Test from "../components/test"
import Newsletter from "@/components/newsletter";
import FAQ from "@/components/faq";
import Upcoming from "@/components/upcoming";
import Component from "../components/experiment";
import LogicGatesSimulator from "@/components/logic";
import DataStructureVisualizer from "@/components/data";
import AlgorithmVisualizer from "@/components/algo";
import CybersecurityChallenge from "@/components/cybersecurity";
import MLModelTrainer from "@/components/ml";
import CodeExecutionPlayground from "@/components/code";

export default function Home() {
  return (
    <>
      <Component />
      <Intro />
      <Features />
      <LogicGatesSimulator />
      <DataStructureVisualizer />
      <AlgorithmVisualizer />
      <CodeExecutionPlayground />
      <CybersecurityChallenge />
      <Categories />
      <Test />
      <FAQ />
      <Upcoming />
      <Newsletter />
    </>
  );
}
