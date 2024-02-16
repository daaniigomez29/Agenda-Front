import http from "../http-common";

class ContactDataService{
    getAll(){
        return http.get("/person")
    }

    getContact(id){
        return http.get(`/person/${id}`)
    }

    addContact(data){
        return http.post("/person", data)
    }

    editContact(id, data){
        return http.put(`/person/${id}`, data)
    }

    deleteContact(id){
        return http.delete(`/person/${id}`)
    }
}
export default new ContactDataService;