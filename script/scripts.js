console.log('test')

const albumElement = document.querySelector('.album')
const viewportElement = document.getElementById('page-viewport')

const baseUrl = 'https://jsonplaceholder.typicode.com/'

let urlBody = 'photos'

const endPoint = baseUrl + urlBody


axios.get(endPoint, {
    params: {
        _limit: 6
    }
})
    .then((res) => { // Success
        const photos = res.data

        appendPhoto(photos, albumElement)
        console.log(photos)



    })
    .catch((err) => { // Error
        console.log(err);
        errorMsg.innerHTML = err.message;
    });








