import { createFileRoute } from "@tanstack/react-router";
import { SettingsPage } from "@/components/adili";
export const Route=createFileRoute("/settings")({head:()=>({meta:[{title:"Settings — Adili Online"},{name:"description",content:"Manage Adili profile and account preferences."},{property:"og:title",content:"Settings — Adili Online"},{property:"og:description",content:"Manage Adili profile and account preferences."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:SettingsPage});
