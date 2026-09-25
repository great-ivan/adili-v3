import { createFileRoute } from "@tanstack/react-router";
import { Declarations } from "@/components/adili";
export const Route=createFileRoute("/declarations")({head:()=>({meta:[{title:"Declarations — Adili Online"},{name:"description",content:"Review and manage institutional declarations."},{property:"og:title",content:"Declarations — Adili Online"},{property:"og:description",content:"Review and manage institutional declarations."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Declarations});
