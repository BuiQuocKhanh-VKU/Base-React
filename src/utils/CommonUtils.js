class CommonUtils {
    static getBase64(file){ // convert file to base64 string
        return new Promise((resolve, reject) => { // create a promise to handle the async operation
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
}

export default CommonUtils;