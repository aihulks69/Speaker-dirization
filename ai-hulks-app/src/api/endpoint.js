import axios from "axios"

export default {
    async uploadAudio(file) {
        return axios.post(' http://127.0.0.1:5000/audio', file, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        );
    },
}
