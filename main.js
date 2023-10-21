import { DocumentView } from "./view/view.js";
import DocumentController from "./controller/controller.js";
import ModelDocument from "./model/model.js";

class Document extends HTMLElement{
    constructor() {
        super();
        this.socketUrl = "ws://192.168.100.11:8080";
     
        this.innerView = new DocumentView();
        this.innerModel = new ModelDocument();
        this.documentController = new DocumentController(this.innerView, this.innerModel, this.socketUrl);
    
        this.appendChild(this.innerView);
    }
}
customElements.define('x-document', Document);

function main() {

    let documentView = new Document();
    document.body.appendChild(documentView);
}

window.addEventListener("load", main);
