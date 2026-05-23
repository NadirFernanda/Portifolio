import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectDetailClient } from "./ProjectDetailClient";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portifolio-nine-azure-22.vercel.app";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};

  const ogImage = project.images.thumbnail
    ? `${SITE_URL}${project.images.thumbnail}`
    : `${SITE_URL}/images/og-image.jpg`;

  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: `${project.name} | Fernanda Gonçalves`,
      description: project.description,
      url: `${SITE_URL}/projects/${project.id}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: project.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | Fernanda Gonçalves`,
      description: project.description,
      images: [ogImage],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();
  return <ProjectDetailClient project={project} />;
}
