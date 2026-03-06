document.addEventListener("DOMContentLoaded", () => {

const checkboxes = document.querySelectorAll("#checklist input");

checkboxes.forEach(box => {

const key = box.dataset.item;

if(localStorage.getItem(key) === "true"){
box.checked = true;
}

box.addEventListener("change", () => {

localStorage.setItem(key, box.checked);

});

});

});

function resetChecklist(){

localStorage.clear();

location.reload();

}