class CardComponent extends HTMLElement {
  connectedCallback() {
    const image = this.getAttribute("image")
    const name = this.getAttribute("name")
    const firstList = this.getAttribute("first-list")
    const secondList = this.getAttribute("second-list")
    const thirdList = this.getAttribute("third-list")

    this.innerHTML = `
    <link rel="stylesheet" href="/Components/location-cards/location-cards.css">
    <div class="services-card">
        <img src="${image}" alt="">
        <div class="service-crd-text">
          <h3>${name}</h3>
          <ul>
            <li>${firstList}</li>
            <li>${secondList}</li>
            <li>${thirdList}</li>
          </ul>
        </div>
        </div>
    `
  }
}

customElements.define("location-card", CardComponent)