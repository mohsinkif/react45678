let _url= process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8001/' : window.location.host+ '/'
let url;
if (window.location.protocol === "https:") {
        url = `https://${_url}`;
    } else {
        url = `http://${_url}`;
}
export const backendurl= url;