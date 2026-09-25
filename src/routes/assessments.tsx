import { createFileRoute } from "@tanstack/react-router";
import { Assessments } from "@/components/adili";
export const Route=createFileRoute("/assessments")({head:()=>({meta:[{title:"Assessments — Adili Online"},{name:"description",content:"Manage institutional assessment workflows and findings."},{property:"og:title",content:"Assessments — Adili Online"},{property:"og:description",content:"Manage institutional assessment workflows and findings."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Assessments});
