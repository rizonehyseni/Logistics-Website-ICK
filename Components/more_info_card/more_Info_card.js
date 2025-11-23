class InfoCard extends HTMLElement {
  connectedCallback() {
    const type = this.getAttribute("type");

    // store all SVGs safely here
    const svgs = {
      structure: `
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 
          1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 
          4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z"/> 
        </svg>
      `,

      stats: `
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 10.944a6.524 6.524 0 0 0 2-.471v9.89a1.637 1.637 0 0 1-1.638 1.637H4.75A2.25 
          2.25 0 0 1 2.5 19.75v-13.5C2.5 4.23 3.73 3 5.25 3H12v3.515A6.5 6.5 0 1 0 14 10.944Z"/>
          <path fill-rule="evenodd" d="M20.5 9a4.5 4.5 0 1 1-9 
          0 4.5 4.5 0 0 1 9 0ZM17.75 7a.75.75 0 0 0-1.5 0v2.25H14a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 
          0 0 0 1.5 0V10.75H20a.75.75 0 0 0 0-1.5h-2.25V7Z"/>
        </svg>
      `,

      history: `
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.75 2.25A2.25 2.25 0 0 0 4.5 4.5v15a2.25 2.25 0 0 0 2.25 
          2.25h10.5A2.25 2.25 0 0 0 19.5 19.5v-15a2.25 2.25 0 0 0-2.25-2.25H6.75Z"/>
        </svg>
      `,

      mission: `
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.25 4.5a3.75 3.75 0 0 0-3.75 3.75v6a3.75 3.75 0 0 0 3.75 
          3.75h11.5a3.75 3.75 0 0 0 3.75-3.75v-6a3.75 3.75 0 0 0-3.75-3.75H6.25Z"/>
        </svg>
      `
    };

    const content = {
      structure: {
        text: "Team and company structure",
        link: "#",
        label: "Learn More →"
      },
      stats: {
        text: "Information about our company statistics",
        link: "#",
        label: "Learn More →"
      },
      history: {
        text: "A brief history of our company",
        link: "#",
        label: "Learn More →"
      },
      mission: {
        text: "Our mission at RKS Logistics",
        link: "#",
        label: "Learn More →"
      }
    };

    const item = content[type];

    this.innerHTML = `
      <div class="more-info-card">
        ${svgs[type]}
        <p>${item.text}</p>
        <a href="${item.link}">${item.label}</a>
      </div>
    `;
  }
}

customElements.define("info-card", InfoCard);
