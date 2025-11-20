class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.render()
  }
  render() {
    this.innerHTML = `
 <link rel="stylesheet" href="../../Components/header/header.css">
  <header>
    <nav id="navbar">
      <div>
        <a href="/Pages/home/index.html"><img src="/Assets/images/logo.png" width="150px" alt=""></a>
      </div>


      <ul class="nav-links">
        <li><a href="/Pages/about/index.html">About</a></li>
        <li><a href="/Pages/services/index.html">Services</a></li>
        <li><a href="/Pages/location/index.html">Location</a></li <li><a href="/Pages/customer-care/">Customer Care</a>
        </li>
      </ul>


      <div class="right-buttons">
        <button class="login-btn">Login</button>
      </div>
    </nav>
  </header>
</body>

<script>
  let lastScroll = 0;
  const navbar = document.getElementById("navbar");
  const threshold = 50; // hide only after scrolling down 50px

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    // 1. Scrolling down → hide
    if (currentScroll > lastScroll && currentScroll > threshold) {
      navbar.classList.add("nav-hidden");
      navbar.classList.remove("navbar-up");
    }
    // 2. Scrolling up → show with new design
    else if (currentScroll < lastScroll) {
      navbar.classList.remove("nav-hidden");
      navbar.classList.add("navbar-up");
    }

    // 3. At the very top → remove new design (back to original)
    if (currentScroll <= 0) {
      navbar.classList.remove("navbar-up");
    }
+
    lastScroll = currentScroll;
  });

</script>
        `
  }
}
customElements.define('my-navbar', HeaderComponent) 