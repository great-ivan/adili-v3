import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/dashboard" });
  },
  head: () => ({
    meta: [
      { title: "Adili Online V2 — EACC Operations" },
      { name: "description", content: "Open the Adili Online integrity operations dashboard." },
      { property: "og:title", content: "Adili Online V2 — EACC Operations" },
      { property: "og:description", content: "Open the Adili Online integrity operations dashboard." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return null;
}
