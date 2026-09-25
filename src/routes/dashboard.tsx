import { createFileRoute } from "@tanstack/react-router";
import { Dashboard } from "@/components/adili";
export const Route=createFileRoute("/dashboard")({head:()=>({meta:[{title:"Dashboard — Adili Online"},{name:"description",content:"Supervisory declarations and integrity operations dashboard."},{property:"og:title",content:"Dashboard — Adili Online"},{property:"og:description",content:"Supervisory declarations and integrity operations dashboard."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Dashboard});
