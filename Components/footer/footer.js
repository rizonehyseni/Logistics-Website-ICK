class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.render()
  }
  render() {
    this.innerHTML = `
  <link rel="stylesheet" href="../../Components/footer/footer.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">         
  <footer>
    <div class="upper-footer">
      <h1 class="h1_paragraph_footer">
        Make sure you choose the right expedition services for your delivery
      </h1>
      <button class="cta-btn">
        <a href="#">Contact Us</a>
      </button>
    </div>

    <div class="lower-footer">
      <div class="links-container">
        <div class="logo-section">
          <img src="../../Assets/images/logo.png" width="200px" alt="Company Logo">
          <p>RKS Logistics provides customized services for customers around the world form 50+ leading industries</p>

        </div>
        <div>
          <h3>Products</h3>
          <ul>
            <li><a href="#">Features</a></li>
            <li><a href="#">Enterprise</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Customer Stories</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Demo</a></li>
          </ul>
        </div>

        <div>
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Media Kit</a></li>
            <li><a href="#">Contact Us</a></li>

          </ul>
        </div>

        <div>
          <h3>Office</h3>
          <ul>
            <li><a href="address:123 Main Street, Pristina, Kosovo">123 Main Street, Pristina, Kosovo</a></li>
          </ul>

          <h3>Contact Us</h3>
          <ul>
            <li><a href="mailto:support@rkslogistics.com">support@rkslogistics.com</a></li>
          </ul>

        </div>
      </div>

      <div class="bottom-footer">
        <p>&copy; 2024 RKS Logistics. All rights reserved.</p>

        <div class="social-links">
          <a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
          <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="#" target="_blank"><i class="fab fa-youtube"></i></a>
        </div>
      </div>

  </footer>
        `
  }
}
customElements.define('my-footer', FooterComponent) 