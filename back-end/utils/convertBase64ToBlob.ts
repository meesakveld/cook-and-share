const convertBase64ToBlob = (base64: string): { blob: Blob, mimeType: string } => {
    // Verkrijg de mime type van de base64 string
    const mimeType = base64.match(/^data:(image\/\w+);base64,/)?.[1] || 'application/octet-stream';

    // Decodeer de base64 string
    const byteString = atob(base64.split(',')[1]);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);

    // Vul de Uint8Array met de gedecodeerde bytes
    for (let i = 0; i < byteString.length; i++) {
        uint8Array[i] = byteString.charCodeAt(i);
    }

    // Maak een Blob van de uint8Array
    const blob = new Blob([uint8Array], { type: mimeType });

    return { blob, mimeType };
};


export default convertBase64ToBlob;