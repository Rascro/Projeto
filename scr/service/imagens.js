import api from '../plugins/api'

class ImagenService {
  async getAllImagen() {
    const response = await api.get('/produto/')
    return response.data
  }
}

export default new ImagenService()