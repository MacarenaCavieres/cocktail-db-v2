import{u as a,r as i,j as s}from"./index-CxrnWD-F.js";import{A as o}from"./ArticleCard-CejdHIxZ.js";function x(){const e=a(t=>t.favorites),r=i.useMemo(()=>e.length,[e]);return s.jsxs("div",{className:"",children:[s.jsx("h2",{className:"capitalize text-4xl md:text-7xl text-tertiary text-center",children:r?"cocktail list":"your favorite cocktails will appear here"}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 my-10 gap-10",children:e.map(t=>s.jsx(o,{recipe:t},t.idDrink))})]})}export{x as default};
