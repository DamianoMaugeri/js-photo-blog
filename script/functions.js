function myCreateElement4(
    tagnName,
    classList = [],
    content = [],
    callback = false
) {
    // Creo l'elemento
    const el = document.createElement(tagnName);

    // Aggiungo le classi
    if (classList.length > 0) {
        el.classList.add(...classList);
    }

    // Esegui la callback passando l'elemento
    if (callback) {
        callback(el);
    }

    // Contenuto
    if (Array.isArray(content)) {
        for (let i = 0; i < content.length; i++) {
            el.appendChild(content[i]);
        }
    } else if (content instanceof HTMLElement) {
        el.appendChild(content);
    } else if (typeof content === "string") {
        el.innerHTML = content;
    } else {
        console.error("Non posso aggiungere l'elemento");
    }
    return el;
};





function appendPhoto(photos, root) {

    photos.forEach(photo => {

        const { title, url } = photo

        const card = myCreateElement4("div", ["col"],
            [
                myCreateElement4("div", ["card"], [
                    myCreateElement4("figure", ["card-title"], [
                        myCreateElement4("img", [], [],
                            (el) => (el.src = `${url}`)
                        )
                    ]),
                    myCreateElement4("div", ["card-body"], [
                        myCreateElement4("h3", [], `${title}`)
                    ]),
                ]
                ),
            ]
        );

        root.appendChild(card)



    });



}




















