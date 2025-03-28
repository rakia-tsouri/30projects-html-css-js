var bouton = document.getElementById("but");
var tex = document.getElementById("tex");
var t = document.getElementById("moi");

bouton.addEventListener("click", function() {
    if (!tex.value.trim()) {
        // Réinitialise complètement l'animation
        tex.style.animation = "none";
         // Force le recalcul du rendu
        t.textContent = "invalide";
        
        // Applique la nouvelle animation
        tex.style.animation = "element 0.05s 3 alternate";
        
        // Arrête l'animation après un certain temps (ex: 1 seconde)
        setTimeout(function() {
            tex.style.animation = "none";
            t.textContent = "";
        }, 1000);
    }
    else{
        alert("jawek fesfess");
    }
});