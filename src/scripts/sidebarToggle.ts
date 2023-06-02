const sidebarShow = document.getElementById("sidebar-show")!;

sidebarShow.addEventListener("click", () => {
  const sidebar = document.getElementById("sidebar")!;

  sidebarShow.classList.remove("hidden");
  sidebar.classList.toggle("-translate-x-full");
  sidebar.classList.remove("invisible");
  document.getElementById("open-arrow")!.classList.toggle("rotate-180");
});
