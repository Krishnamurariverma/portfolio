const btn = document.getElementById("themeToggle");
btn.onclick = () => {
    document.body.classList.toggle("light");
    btn.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
}
document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message")
        })
    });

    const result = await response.json();
    alert(result.message);
});