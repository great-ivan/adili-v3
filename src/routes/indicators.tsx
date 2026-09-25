import { createFileRoute } from "@tanstack/react-router";
import { Indicators } from "@/components/adili";
export const Route=createFileRoute("/indicators")({head:()=>({meta:[{title:"Indicators — Adili Online"},{name:"description",content:"Monitor institutional integrity indicators and risk movement."},{property:"og:title",content:"Indicators — Adili Online"},{property:"og:description",content:"Monitor institutional integrity indicators and risk movement."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Indicators});
