console.log('test')

const albumElement = document.querySelector('.album')
const viewportElement = document.getElementById('page-viewport')
const closebuttonicon = '<i class="fa-regular fa-circle-xmark"></i>'

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

        appendPhoto(photos, albumElement, viewportElement)
        console.log(photos)



    })
    .catch((err) => { // Error
        console.log(err);
        errorMsg.innerHTML = err.message;
    });








