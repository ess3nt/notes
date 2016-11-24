/**
 * Created by Igor on 18.11.2016.
 */
export default function (link ,method, data) {
    if (method === 'post'){
        return fetch(link, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    } else if (method === 'get') {
        return fetch(link).then((response) => response.json()).then(data => data);
    }


}
