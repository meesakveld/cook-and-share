const convertFileToBase64: (file: File) => Promise<string> = (file: File) => 
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const result = reader.result;
            resolve(typeof result === "string" ? result : "");
        };
        reader.onerror = (error) => reject(error);
    });

export default convertFileToBase64;
