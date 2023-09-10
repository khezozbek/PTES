const API_KEY = 'd420ebdbc9e43b70b8014069e692072801aae9d2'

async function defauldPhotos() {
    const data = await fetch(`https://papi.besenior.uz/api/imgs/`, {
        method: "GET",
        headers:{
            Accept: "application/json",
            Authorization: API_KEY,
        }
    })
    const response = await data.json()
    console.log(response)
    images(response)
}

function images(response) {
    response.ph.forEach((image) => {
        const photo = document.createElement("div")
        photo.innerHTML = `
            <p>${image.title}</p>`
        document.querySelector(".display_images").appendChild(photo)
    })
}



defauldPhotos()
