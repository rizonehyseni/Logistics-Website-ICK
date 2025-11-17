class InfoItemComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    render() {
        const info_item_svg = this.getAttribute('info_item_svg')
        const info_item_text = this.getAttribute('info_item_text')
        this.innerHTML = `
            <link rel="stylesheet" href="../../components/info_item/style.css"/>
            <div class="info_item_container">
                <div class="svg_icon">
                    <slot name="icon"></slot>
                </div>
                <p>${info_item_text}</p>
        `
    }
}
customElements.define('info-item', InfoItemComponent)