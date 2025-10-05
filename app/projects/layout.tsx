import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header forceMode="dark" />
      
      {children}
      <Footer mode="dark"/>
    </>
  );
}