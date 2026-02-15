const categories = document.querySelector("#categories");
console.log(`Number of categories: ${categories.childElementCount}`);
for(const category of categories.children){
    console.log(`Category: ${category.querySelector("h2").textContent}`);
    console.log(`Elements: ${category.querySelectorAll("li").length}`);
}