
/* MOBILE MENU */
document.getElementById("menuToggle").onclick = function(){
  document.getElementById("navLinks").classList.toggle("active");
}

/* PRODUCTS DROPDOWN (CLICK & HOLD) */
document.getElementById("productsBtn").onclick = function(e){
  e.preventDefault();
  document.getElementById("productsMenu").classList.toggle("active");
}
