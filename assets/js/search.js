const pages = [

{
title:"Work as a Nurse in the USA",
url:"pages/usa.html",
keywords:"usa nurse nclex visa job america"
},

{
title:"Work as a Nurse in Canada",
url:"pages/canada.html",
keywords:"canada nurse license immigration"
},

{
title:"Work as a Nurse in the UK",
url:"pages/uk.html",
keywords:"uk nurse nmc registration visa"
},

{
title:"Work as a Nurse in Australia",
url:"pages/australia.html",
keywords:"australia nurse ahpra registration"
},

{
title:"NCLEX Preparation Guide",
url:"pages/nclex.html",
keywords:"nclex exam nursing preparation"
},

{
title:"IELTS Preparation for Nurses",
url:"pages/ielts.html",
keywords:"ielts english test nurses"
},

{
title:"Visa and Immigration Guide",
url:"pages/visa.html",
keywords:"visa immigration nurses abroad"
},

{
title:"Nurse Application Checklist",
url:"pages/checklist.html",
keywords:"nurse checklist application abroad"
}

];

function searchSite(){

const input = document.getElementById("searchInput").value.toLowerCase();

const results = document.getElementById("searchResults");

results.innerHTML="";

pages.forEach(page => {

if(page.title.toLowerCase().includes(input) || page.keywords.includes(input)){

const li = document.createElement("li");

li.innerHTML = `<a href="${page.url}">${page.title}</a>`;

results.appendChild(li);

}

});

}