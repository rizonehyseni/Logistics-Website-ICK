class HelpCardComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    render() {
        const help_card_option = this.getAttribute('help_card_option')
        const help_card_description = this.getAttribute('help_card_description')
        this.innerHTML = `
            <link rel="stylesheet" href="../../Components/help_card/style.css"/>
            <div class="help_card_container">
                <div class="help_card_option">
                    <h4>
                        ${help_card_option}
                    </h4>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                    </svg>
                </div>
                <p>
                    ${help_card_description} 
                </p>
            </div>
        `
    }
}
customElements.define('help-card', HelpCardComponent)