import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export default function () {

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
                return response.json();
            }
            return Promise.reject(response);
        }).then((json) => {
            console.log('test');
            Toastify({
                text: "Article created",
                duration: 3000,
                style: { background: 'green' }
            }).showToast();
            navigateTo('/admin');
        }).catch((response) => {
            console.log(response);
            Toastify({
                text: response.status,
                duration: 3000,
                style: { background: 'red' }
            }).showToast();
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
                return response.json();
            }
            return Promise.reject(response);
        }).then((json) => {
            Toastify({
                text: "Article updated",
                duration: 3000,
                style: { background: 'green' }
            }).showToast();
            navigateTo('/admin');
        }).catch((response) => {
            Toastify({
                text: response.status,
                duration: 3000,
                style: { background: 'red' }
            }).showToast();
        })
    }

    async function deleteArticle(id) {
        return await fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
            method: 'DELETE',
        }).then((response) => {
            if (response?.ok) {
                return response.json();
            }
            return Promise.reject(response);
        }).then((json) => {
            Toastify({
                text: "Article deleted",
                duration: 3000,
                style: { background: 'green' }
            }).showToast();
        }).catch((response) => {
            Toastify({
                text: response.status,
                duration: 3000,
                style: { background: 'red' }
            }).showToast();
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