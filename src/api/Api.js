export default class Api {
    static getItems() {
        let getUrl =
            "https://api.backendless.com/DCEDF76D-9662-324E-FF07-3C8BF4BBE100/F1870599-8446-F184-FFF4-DB8A4B81F800/services/TodoItemsService/todo-items";
        let promise = fetch(getUrl)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject(response.statusText);
                }
            });
        return promise;
    }

    static deleteItem(id) {
        let deleteUrl =
            "https://api.backendless.com/DCEDF76D-9662-324E-FF07-3C8BF4BBE100/F1870599-8446-F184-FFF4-DB8A4B81F800/services/TodoItemsService/todo-items";
        let promise = fetch(deleteUrl, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: id
        });
        return promise;
    }

    static addItem(text, checked) {
        let postUrl =
            "https://api.backendless.com/DCEDF76D-9662-324E-FF07-3C8BF4BBE100/F1870599-8446-F184-FFF4-DB8A4B81F800/services/TodoItemsService/list-items";
        let promise = fetch(postUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: text,
                checked: checked
            })
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject(response.statusText);
                }
            });
        return promise;
    }

    static updateItem(body) {
        let putUrl =
            "https://api.backendless.com/DCEDF76D-9662-324E-FF07-3C8BF4BBE100/F1870599-8446-F184-FFF4-DB8A4B81F800/services/TodoItemsService/todo-items";

        let promise = fetch(putUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject(response.statusText);
                }
            });
        return promise;
    }
}