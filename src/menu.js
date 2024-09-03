const loadMenuPage = () => {
    const content = document.querySelector("#content");

    const headline = document.createElement("h2");
    headline.textContent = "Menu";

    const menuSection = document.createElement("section");
    menuSection.id = "menu-section";

    const createMenuItem = (name, price, imageUrl = "") => {
        const itemSection = document.createElement("div");

        const itemImage = document.createElement("img");
        itemImage.src = imageUrl;
        itemImage.alt = name;

        const itemTitle = document.createElement("h4");
        itemTitle.textContent = name;

        const itemPrice = document.createElement("p");
        itemPrice.textContent = `₹ ${price}`;

        itemSection.appendChild(itemImage);
        itemSection.appendChild(itemTitle);
        itemSection.appendChild(itemPrice);

        return itemSection;
    };

    const items = [
        { name: "Chocolate Pastry", price: 70, imageUrl: "https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_1280.jpg" },
        { name: "Strawberry Pastry", price: 75, imageUrl: "https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971556_1280.jpg" },
        { name: "Torte", price: 90, imageUrl: "https://cdn.pixabay.com/photo/2016/03/27/22/38/cake-1284548_1280.jpg" },
        { name: "Cherry Cake", price: 85, imageUrl: "https://cdn.pixabay.com/photo/2023/07/27/07/42/cherry-cake-8152717_1280.jpg" },
        { name: "Cream Pastry", price: 65, imageUrl: "https://cdn.pixabay.com/photo/2017/06/17/19/15/cake-2413240_1280.jpg" },
        { name: "Gugelhupf", price: 100, imageUrl: "https://cdn.pixabay.com/photo/2018/08/30/20/47/gugelhupf-3643259_1280.jpg" }
    ];

    items.forEach(item => {
        const menuItem = createMenuItem(item.name, item.price, item.imageUrl);
        menuSection.appendChild(menuItem);
    });

    content.appendChild(headline);
    content.appendChild(menuSection);
};

export { loadMenuPage };
