class ModelDocument {
    constructor(socket) {
        this.socket = socket; 
    }

    sendDataToServer(data) {
   
        if (this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(data);
        } else {
            console.error("La conexión WebSocket no está abierta.");
        }
    }

  
}

export default ModelDocument;