import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("http://18.212.51.218/tasks");
  }

  get(id) {
    return http.get(`http://18.212.51.218/tasks/${id}`);
  }

  create(data) {
    return http.post("http://18.212.51.218/tasks", data);
  }

  update(id, data) {
    return http.put(`http://18.212.51.218/tasks/${id}`, data);
  }

  delete(id) {
    return http.delete(`http://18.212.51.218/tasks/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();