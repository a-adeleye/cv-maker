export default function Header() {

  function toggleNav(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display === "grid" ? sidebar.style.display = "none" : sidebar.style.display = "grid";
  }
  
  return (
    <header>
      <i class="fas fa-bars" onClick={toggleNav}></i>
    </header>
  );
}
