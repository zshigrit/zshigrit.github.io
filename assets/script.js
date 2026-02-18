// Mark active nav link based on current path
(function(){
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".menu a").forEach(a=>{
    const href = a.getAttribute("href");
    if ((path === "" && href === "index.html") || href === path) a.classList.add("active");
  });

  // Footer year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
