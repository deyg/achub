import axios from "axios"

const livrosAPI = axios.create(
    {baseURL: "https://3266-express-mongo-aula-5.vercel.app"}
)

async function getLivros() {
    const response = await livrosAPI.get('/livros')

    return response.data
}

export {
    getLivros
}