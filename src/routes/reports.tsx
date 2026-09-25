import { createFileRoute } from "@tanstack/react-router";
import { Reports } from "@/components/adili";
export const Route=createFileRoute("/reports")({head:()=>({meta:[{title:"Reports — Adili Online"},{name:"description",content:"Review integrity oversight statistics and report previews."},{property:"og:title",content:"Reports — Adili Online"},{property:"og:description",content:"Review integrity oversight statistics and report previews."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Reports});
