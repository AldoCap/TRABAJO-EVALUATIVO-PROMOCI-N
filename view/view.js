class DocumentView extends HTMLElement {

    constructor() {
        super();

        this.titleH1 = document.createElement("h1");
        this.titleH1.innerText = "Documento Compartido";

        this.DivDocument = document.createElement("div");
        this.DivDocument.id = "document";
        this.DivDocument.contentEditable = "true";

        this.document = document.createElement("div");
        this.document.className = "document-editor";

        this.appendChild(this.titleH1);
        this.appendChild(this.DivDocument);
        this.appendChild(this.document);
 
        let style = document.createElement("link");
        style.rel = "stylesheet";
        style.href = "../style/style.css";
        this.appendChild(style);
    }

    connectedCallback() {}

    disconnectedCallback() {}
}

customElements.define("document-view", DocumentView);

export { DocumentView };
