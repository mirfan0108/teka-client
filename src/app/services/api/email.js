import axios from 'axios'
const ENV = process.env.BASE_API

class EmailService {
    static sendInquiry(req) {
        return axios.post(`${ENV}/api/v1/email/inquiry/`, req)
    }
}

export default EmailService