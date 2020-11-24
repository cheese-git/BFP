export default function apiFetch(path: string) {
    let baseUrl
    if (process.env.NODE_ENV === 'production') {
        baseUrl = "http://localhost:3000/"
    } else {
        baseUrl = "http://localhost:3000/"
        console.log('Using development api url.')
    }
    return fetch(baseUrl + path).then(res => res.json())
}