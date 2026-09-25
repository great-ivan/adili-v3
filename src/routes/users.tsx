import { createFileRoute } from "@tanstack/react-router";
import { UsersPage } from "@/components/adili";
export const Route=createFileRoute("/users")({head:()=>({meta:[{title:"User management — Adili Online"},{name:"description",content:"Manage the prototype staff access structure."},{property:"og:title",content:"User management — Adili Online"},{property:"og:description",content:"Manage the prototype staff access structure."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:UsersPage});
