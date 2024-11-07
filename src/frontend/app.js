// app.js - Basic frontend interactivity

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    // Handle login form submission
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        
        // Mock login action
        alert(`Logging in with Username: ${username}`);
        // Here, you would typically send the login data to the backend for verification
    });

    // Sample products data
    const products = [
        { id: 1, name: "Product A", price: "$10" },
        { id: 2, name: "Product B", price: "$15" },
        { id: 3, name: "Product C", price: "$20" }
    ];

    // Render products dynamically
    const productsContainer = document.getElementById("products-container");
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onclick="alert('Added ${product.name} to cart!')">Add to Cart</button>
        `;
        productsContainer.appendChild(productDiv);
    });
});

