function showSalary(){

const country = document.getElementById("countrySelect").value;

const result = document.getElementById("salaryResult");

let salaryInfo = "";

if(country === "usa"){

salaryInfo = `
<h3>United States</h3>
<p>Average Salary: $75,000 – $120,000 per year</p>
<p>High demand for registered nurses across many states.</p>
`;

}

if(country === "canada"){

salaryInfo = `
<h3>Canada</h3>
<p>Average Salary: $60,000 – $95,000 per year</p>
<p>Many provinces actively recruit international nurses.</p>
`;

}

if(country === "uk"){

salaryInfo = `
<h3>United Kingdom</h3>
<p>Average Salary: £28,000 – £45,000 per year</p>
<p>NHS frequently sponsors international nurses.</p>
`;

}

if(country === "australia"){

salaryInfo = `
<h3>Australia</h3>
<p>Average Salary: AUD 65,000 – AUD 95,000 per year</p>
<p>Strong demand and good work-life balance.</p>
`;

}

result.innerHTML = salaryInfo;

}