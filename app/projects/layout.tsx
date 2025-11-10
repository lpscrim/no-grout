import HeaderProjects from "@/components/Projects/HeaderProjects";
import Footer from "@/components/UI/Footer";

export default function ProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <HeaderProjects />
      
      {children}
      <Footer mode="light"/>
    </>
  );
}