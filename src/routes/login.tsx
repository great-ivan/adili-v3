import { createFileRoute } from "@tanstack/react-router";
import { Login } from "@/components/adili";
export const Route=createFileRoute("/login")({head:()=>({meta:[{title:"Sign in — Adili Online"},{name:"description",content:"Secure prototype access to the Adili Online operations console."},{property:"og:title",content:"Sign in — Adili Online"},{property:"og:description",content:"Secure prototype access to the Adili Online operations console."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Login});
