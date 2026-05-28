const cartCount = document.querySelector("#cartCount");
const toast = document.querySelector("#toast");
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const cartButtons = document.querySelectorAll(".add-cart");

let cartTotal = 0;
let toastTimer;

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
        toast.classList.remove("show");
    }, 2400);
}

cartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        cartTotal += 1;
        cartCount.textContent = cartTotal;
        showToast(`${button.dataset.product} added to cart`);
    });
});

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();

    if (!query) {
        showToast("Type a product or category to search");
        searchInput.focus();
        return;
    }

    showToast(`Showing results for "${query}"`);
});
