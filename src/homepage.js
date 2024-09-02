const pageLoad = () => {
    const content = document.querySelector("#content");

    const headline = document.createElement("h2");
    headline.textContent = "Headline";

    const image = document.createElement("img");
    image.src = "https://cdn.pixabay.com/photo/2016/11/18/22/21/restaurant-1837150_1280.jpg";
    image.alt = "Interior of a restaurant";

    const description = document.createElement("p");
    description.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, consequuntur id. Doloribus inventore maxime consequatur. Nesciunt nulla, laudantium a doloremque, asperiores dignissimos ab inventore totam molestiae suscipit cum magnam odio!"

    content.appendChild(headline);
    content.appendChild(image);
    content.appendChild(description);

};

export { pageLoad };


