

export const fileUpload = async (file) => {

    if (!file) throw new Error('No file to upload');

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dt1r1iutl/upload';

    const formData = new FormData();

    //Pasamos los valores que necesita para subirlos.
    formData.append('upload_preset', 'react-journal');

    //Los nombre
    formData.append('file', file);

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if (!resp.ok) throw new Error('Error en subir la Imagen');

        const cloudResp = await resp.json();

        return cloudResp.secure_url;

    } catch (error) {
        throw new Error(error.message);
    };

};