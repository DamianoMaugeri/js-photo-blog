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

    })







/*
const card4 = myCreateElement4("div", ["col"],
    [
        myCreateElement4("div", ["card"], [
            myCreateElement4("figure", ["card-title"], [
                myCreateElement4("img", ["card-image-top"], [],
                    (el) => (el.src = "https://picsum.photos/id/237/200/300")
                )
            ]),
            myCreateElement4("p", ["card-body"], [
                myCreateElement4("h3", [], "description")
            ]),
        ]
        ),
    ]
);

*/

