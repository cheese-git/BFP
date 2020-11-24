let baseUrl: string

if (process.env.NODE_ENV === 'production') {
    baseUrl = "http://localhost:3000/"
} else {
    baseUrl = "http://localhost:3000/"
    console.log('Using development api url.')
}

export default function apiFetch(path: string) {

    return fetch(baseUrl + path).then(res => res.json())
}