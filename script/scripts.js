console.log('test')

const albumElement = document.querySelector('.album')

const baseUrl = 'https://jsonplaceholder.typicode.com/'

let urlBody = 'photos'

const endPoint = baseUrl + urlBody


axios.get(endPoint, {
    params: {
        _limit: 6
    }
})
    .then((res) => {
        const photos = res.data

        appendPhoto(photos, albumElement)

        console.log(photos)

    })
    .catch((err) => {
        console.error(err)

    })









