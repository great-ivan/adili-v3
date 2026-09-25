export type Status = "Pending" | "Under Review" | "Flagged" | "Approved" | "Rejected" | "Completed";
export const declarations = [
  { id:"DEC-2026-1284", entity:"Kenya Revenue Authority", officer:"J. Kamau", role:"Commissioner", submitted:"29 May 2026", updated:"03 Jun 2026", priority:"Critical", status:"Flagged" as Status },
  { id:"DEC-2026-1281", entity:"Nairobi City County", officer:"A. Wanjiru", role:"Director", submitted:"31 May 2026", updated:"03 Jun 2026", priority:"High", status:"Under Review" as Status },
  { id:"DEC-2026-1278", entity:"Kenya Power & Lighting Co.", officer:"P. Omondi", role:"Manager", submitted:"01 Jun 2026", updated:"02 Jun 2026", priority:"High", status:"Pending" as Status },
  { id:"DEC-2026-1272", entity:"National Youth Service", officer:"S. Barasa", role:"Officer", submitted:"02 Jun 2026", updated:"02 Jun 2026", priority:"Medium", status:"Approved" as Status },
  { id:"DEC-2026-1269", entity:"Tana Athi Water Works", officer:"F. Muthoni", role:"Accountant", submitted:"02 Jun 2026", updated:"02 Jun 2026", priority:"Medium", status:"Completed" as Status },
  { id:"DEC-2026-1262", entity:"Kenya Railways Corporation", officer:"L. Mutua", role:"Director", submitted:"27 May 2026", updated:"01 Jun 2026", priority:"Low", status:"Rejected" as Status },
];
export const indicators = [
  {name:"Procurement integrity",entity:"Nairobi City County",current:"Critical",previous:"Watch",date:"03 Jun 2026",officer:"M. Otieno",score:88},
  {name:"Financial reporting",entity:"Kenya Power & Lighting Co.",current:"Watch",previous:"Stable",date:"02 Jun 2026",officer:"P. Omondi",score:64},
  {name:"Asset disclosure",entity:"Kenya Revenue Authority",current:"Stable",previous:"Watch",date:"01 Jun 2026",officer:"J. Kamau",score:38},
  {name:"Gifts & conflicts",entity:"National Youth Service",current:"Stable",previous:"Stable",date:"31 May 2026",officer:"S. Barasa",score:30},
  {name:"Records management",entity:"Tana Athi Water Works",current:"Watch",previous:"Stable",date:"30 May 2026",officer:"F. Muthoni",score:57},
];
export const assessments = [
  {id:"ASM-0261",entity:"Kenya Power & Lighting Co.",officer:"P. Omondi",due:"05 Jun 2026",status:"In progress",progress:72, finding:"Control ownership requires clarification"},
  {id:"ASM-0258",entity:"Nairobi City County",officer:"A. Wanjiru",due:"03 Jun 2026",status:"Completed",progress:100, finding:"Two procurement exceptions recorded"},
  {id:"ASM-0254",entity:"Kenya Revenue Authority",officer:"J. Kamau",due:"29 May 2026",status:"Flagged",progress:86, finding:"Declaration submitted after deadline"},
  {id:"ASM-0249",entity:"National Youth Service",officer:"S. Barasa",due:"08 Jun 2026",status:"Draft",progress:34, finding:"Evidence collection underway"},
];
export const users = [
 {name:"Mercy Otieno",email:"m.otieno@eacc.go.ke",role:"Supervisor",entity:"Prevention Directorate",status:"Active",last:"Today, 09:42"},
 {name:"Alice Wanjiru",email:"a.wanjiru@eacc.go.ke",role:"Prevention Officer",entity:"Nairobi Region",status:"Active",last:"Today, 09:14"},
 {name:"Peter Omondi",email:"p.omondi@eacc.go.ke",role:"Prevention Officer",entity:"Central Region",status:"Active",last:"Today, 08:52"},
 {name:"Samuel Barasa",email:"s.barasa@eacc.go.ke",role:"Administrator",entity:"ICT Directorate",status:"Active",last:"Yesterday, 16:20"},
 {name:"Faith Muthoni",email:"f.muthoni@eacc.go.ke",role:"Prevention Officer",entity:"Coast Region",status:"Inactive",last:"28 May 2026"},
];
