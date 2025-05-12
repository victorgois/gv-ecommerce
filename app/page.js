import Layout from "@/components/layout/Layout";
import HomeContent from "../components/sections/HomeContent";

export const metadata = {
  title: "GV Distribuidora",
  description: "GV Distribuidora - Ecommerce de produtos de tabacaria",
};

export default function Home() {
  return (
    <Layout headerStyle={1} footerStyle={1}>
      <HomeContent />
    </Layout>
  );
}
