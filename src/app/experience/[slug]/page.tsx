import { notFound } from "next/navigation";
import { experiences } from "@/data/experienceData";
import ExperienceDetailPage from "./client-page";
export const dynamic = "force-static";

export async function generateStaticParams() {
  return experiences.map((exp) => ({
    slug: exp.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  console.log(" params:", params);

  const experience = experiences.find((exp) => exp.slug === params.slug);

  if (!experience) {
    console.error("Experience not found for slug:", params.slug);
    return notFound();
  }

  return <ExperienceDetailPage experience={experience} />;
}
