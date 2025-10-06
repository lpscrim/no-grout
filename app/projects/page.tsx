import { client } from "@/sanity/lib/client";
import ProjectsClient from "../../components/Projects/ProjectsClient"; // new client wrapper

export default async function ProjectsPage() {
  const projects = await client.fetch(
    `*[_type == "post"] | order(date desc){
      title,
      date,
      body,
      "images": imageGallery[]{..., "src": asset->url, "alt": alt}
    }`
  );

  return <ProjectsClient projects={projects} />;
}
