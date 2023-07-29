export default function () {

    async function fetchArticles() {
        return await fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json());
    }

    async function fetchArticle(id) {
        return await fetch('https://jsonplaceholder.typicode.com/posts/' + id).then((response) => response.json());
    }

    async function createArticle(data) {
        return await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => response.json());
    }

    async function updateArticle(data) {
        return await fetch('https://jsonplaceholder.typicode.com/posts/' + data.id, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => response.json());
    }

    async function deleteArticle(id) {
        return await fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
            method: 'DELETE',
        })
    }

    return {
        fetchArticles,
        fetchArticle,
        createArticle,
        updateArticle,
        deleteArticle
    }
}