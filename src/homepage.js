const loadHomePage = () => {
    const content = document.querySelector("#content");

    const headline = document.createElement("h2");
    headline.textContent = "Happiness is a piece of cake";

    const welcomeSection = document.createElement("section");
    welcomeSection.id = "welcome-section";

    const welcomeTextContent = document.createElement("div");
    welcomeTextContent.id = "welcome-text-content";
    
    const welcomeHeading = document.createElement("h3");
    welcomeHeading.textContent = "Welcome to BakeNest";
    
    const welcomeParagraphOne = document.createElement("p");
    welcomeParagraphOne.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, consequuntur id. Doloribus inventore maxime consequatur. Nesciunt nulla, laudantium a doloremque, asperiores dignissimos ab inventore totam molestiae suscipit cum magnam odio!"
     
    welcomeTextContent.appendChild(welcomeHeading);
    welcomeTextContent.appendChild(welcomeParagraphOne);
   
    const welcomeImage = document.createElement("img");
    welcomeImage.src = "https://cdn.pixabay.com/photo/2019/03/21/14/31/dessert-4071142_1280.jpg";
    welcomeImage.alt = "Slice of a cake on a plate";

    welcomeSection.appendChild(welcomeImage);
    welcomeSection.appendChild(welcomeTextContent);

    content.appendChild(headline);
    content.appendChild(welcomeSection);

};

export { loadHomePage };