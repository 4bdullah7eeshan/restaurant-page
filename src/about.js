const loadAboutPage = () => {
    const content = document.querySelector("#content");

    const headline = document.createElement("h2");
    headline.textContent = "About";

    const ourStorySection = document.createElement("section");
    ourStorySection.id = "our-story-section";

    const ourStoryTextContent = document.createElement("div");
    ourStoryTextContent.id = "our-story-text-content";
    
    const ourStoryHeading = document.createElement("h3");
    ourStoryHeading.textContent = "Our Story";
    
    const ourStoryParagraphOne = document.createElement("p");
    ourStoryParagraphOne.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, consequuntur id. Doloribus inventore maxime consequatur. Nesciunt nulla, laudantium a doloremque, asperiores dignissimos ab inventore totam molestiae suscipit cum magnam odio!"
    
    const ourStoryParagraphTwo = document.createElement("p");
    ourStoryParagraphTwo.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, consequuntur id. Doloribus inventore maxime consequatur. Nesciunt nulla, laudantium a doloremque, asperiores dignissimos ab inventore totam molestiae suscipit cum magnam odio!";
    
    const ourStoryParagraphThree = document.createElement("p");
    ourStoryParagraphThree.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, consequuntur id. Doloribus inventore maxime consequatur. Nesciunt nulla, laudantium a doloremque, asperiores dignissimos ab inventore totam molestiae suscipit cum magnam odio!";

    ourStoryTextContent.appendChild(ourStoryHeading);
    ourStoryTextContent.appendChild(ourStoryParagraphOne);
    ourStoryTextContent.appendChild(ourStoryParagraphTwo);
    ourStoryTextContent.appendChild(ourStoryParagraphThree);
    
    const ourStoryImage = document.createElement("img");
    ourStoryImage.src = "https://images.pexels.com/photos/26570311/pexels-photo-26570311/free-photo-of-chairs-and-table-on-pavement.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    ourStoryImage.alt = "Outdoor of a restaurant";

    ourStorySection.appendChild(ourStoryTextContent);
    ourStorySection.appendChild(ourStoryImage);

    // Automate these two sections later

    const founderSection = document.createElement("section");
    founderSection.id = "founder-section";

    const founderTextContent = document.createElement("div");
    founderTextContent.id = "founder-text-content";
    
    const founderHeading = document.createElement("h3");
    founderHeading.textContent = "Meet The Founder";
    
    const founderParagraphOne = document.createElement("p");
    founderParagraphOne.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, consequuntur id. Doloribus inventore maxime consequatur. Nesciunt nulla, laudantium a doloremque, asperiores dignissimos ab inventore totam molestiae suscipit cum magnam odio!"
    
    const founderParagraphTwo = document.createElement("p");
    founderParagraphTwo.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, consequuntur id. Doloribus inventore maxime consequatur. Nesciunt nulla, laudantium a doloremque, asperiores dignissimos ab inventore totam molestiae suscipit cum magnam odio!";
    
    const founderParagraphThree = document.createElement("p");
    founderParagraphThree.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, consequuntur id. Doloribus inventore maxime consequatur. Nesciunt nulla, laudantium a doloremque, asperiores dignissimos ab inventore totam molestiae suscipit cum magnam odio!";

    founderTextContent.appendChild(founderHeading);
    founderTextContent.appendChild(founderParagraphOne);
    founderTextContent.appendChild(founderParagraphTwo);
    founderTextContent.appendChild(founderParagraphThree);
    
    const founderImage = document.createElement("img");
    founderImage.src = "https://images.pexels.com/photos/6957452/pexels-photo-6957452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    founderImage.alt = "A female baker";

    founderSection.appendChild(founderImage);
    founderSection.appendChild(founderTextContent);

    content.appendChild(headline);
    content.appendChild(ourStorySection);
    content.appendChild(founderSection);
};

export { loadAboutPage };