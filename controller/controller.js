class DocumentController {
    constructor(view, model, socketUrl) {
        this.innerWiew = view;
        this.innerModel = model;

        this.socket = new WebSocket(socketUrl);

        this.socket.addEventListener("open", (event) => {
            console.log("Conexión WebSocket abierta");
        });

        this.socket.addEventListener("message", this.handleMessage.bind(this));

        this.innerWiew.DivDocument.addEventListener("input", this.handleDocumentEdit.bind(this));;
    }

    handleMessage(event) {
        if (event.data instanceof Blob) {
            const reader = new FileReader();
            reader.onload = this.handleBlobData.bind(this);
            reader.readAsText(event.data);
        } else {
           
            const content = event.data;
            this.innerModel.socket = this.socket ; 
            this.innerModel.sendDataToServer(content);
        }
    }

    handleBlobData(e) {
        const textContent = e.target.result;
        this.innerWiew.DivDocument.innerHTML = textContent;
    }

    handleDocumentEdit() {
        const content = this.innerWiew.DivDocument.innerHTML;
        this.socket.send(content);
    }
}

export default DocumentController;
