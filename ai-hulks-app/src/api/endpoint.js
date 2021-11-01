import axios from "axios"

export default {
    async uploadAudio(file) {
        return axios.post(process.env.VUE_APP_API + '/audio', file, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        );
    },
}
