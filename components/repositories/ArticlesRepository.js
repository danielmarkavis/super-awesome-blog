import { notify } from 'notiwind'

export default function () {

    function success(message) {
        navigateTo('/admin').then(() => {
            notify({
                group: "messages",
                title: "Success",
                type: 'success',
                text: message
            }, 3000);
        });
    }

    function error(message) {
        notify({
            group: "messages",
            title: "Error",
            type: 'error',
            text: message
        }, 3000);
    }

    async function fetchArticles() {
        return await fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json())
    }

    async function fetchArticle(id) {
        return await fetch('https://jsonplaceholder.typicode.com/posts/' + id).then((response) => response.json())
    }

    async function createArticle(data) {
        return await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return Promise.reject(response)
        }).then((json) => {
            success("The article was created!");
        }).catch((response) => {
            error("An error occurred " + response.status);
        })
    }

    async function updateArticle(data) {
        return await fetch('https://jsonplaceholder.typicode.com/posts/' + data.id, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => {
            if (response?.ok) {
                return response.json()
            }
            return Promise.reject(response)
        }).then((json) => {
            success("The article was updated!");
        }).catch((response) => {
            error("An error occurred " + response.status);
        })
    }

    async function deleteArticle(id) {
        return await fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
            method: 'DELETE',
        }).then((response) => {
            if (response?.ok) {
                return response.json()
            }
            return Promise.reject(response)
        }).then((json) => {
            success("The article was deleted!");
        }).catch((response) => {
            error("An error occurred " + response.status);
        })
    }

    return {
        fetchArticles,
        fetchArticle,
        createArticle,
        updateArticle,
        deleteArticle,
    }
}