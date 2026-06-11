const semente = document.getElementById("semente");
const arvore = document.getElementById("arvore");
const cidade = document.getElementById("cidade");
const btn = document.getElementById("btn");
const msg = document.getElementById("msg");

btn.addEventListener("click", () => {

    semente.classList.remove("ativo");
    arvore.classList.remove("ativo");
    cidade.classList.remove("ativo", "cidade");

    msg.innerText = "🌱 Tudo começa com uma semente...";

    semente.classList.add("ativo");

    setTimeout(() => {
        semente.classList.remove("ativo");
        arvore.classList.add("ativo");
        msg.innerText = "🌳 A vida cresce e se fortalece...";
    }, 2000);

    setTimeout(() => {
        arvore.classList.remove("ativo");
        cidade.classList.add("ativo", "cidade");
        msg.innerText = "🏙️ A natureza vira cidade!";
    }, 4000);

});