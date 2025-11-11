class ServiceButtonComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    render() {
        const service_name = this.getAttribute('service_name')
        this.innerHTML = `
            <link rel="stylesheet" href="../../components/service_button/style.css"/>
            <div class="service_button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                <p>
                    ${service_name}
                </p>
            </div>
        `
    }
}
customElements.define('service-button', ServiceButtonComponent)