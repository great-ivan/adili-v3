import { createFileRoute } from "@tanstack/react-router";
import { DeclarationDetail } from "@/components/adili";
export const Route=createFileRoute("/declarations_/$id")({head:({params})=>({meta:[{title:`${params.id} — Adili Online`},{name:"description",content:"Review declaration metadata, indicators, evidence and history."},{property:"og:title",content:`${params.id} — Adili Online`},{property:"og:description",content:"Review declaration metadata, indicators, evidence and history."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Page});
function Page(){const {id}=Route.useParams();return <DeclarationDetail id={id}/>}
