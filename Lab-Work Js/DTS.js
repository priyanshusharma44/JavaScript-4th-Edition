// Filter Selection Event Handler
document
  .getElementById("categoryFilter")
  .addEventListener("change", function () {
    const categoryFilter = this.value;
    const productList = document.getElementById("productList").children;
    for (const product of productList) {
      if (
        categoryFilter === "all" ||
        product.classList.contains(categoryFilter)
      ) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    }
  });
