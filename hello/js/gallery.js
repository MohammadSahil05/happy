document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".gallery img");
    
    images.forEach(img => {
        // Hover effect - Slight Pop-up
        img.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)";
            this.style.boxShadow = "0px 0px 15px rgba(255, 0, 0, 0.5)";
        });
        
        img.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "3px 3px 15px rgba(0, 0, 0, 0.2)";
        });

        // Click event - Fullscreen with message
        img.addEventListener("click", function () {
            openFullscreen(this);
        });
    });
});

function openFullscreen(imgElement) {
    let fullscreenContainer = document.createElement("div");
    fullscreenContainer.id = "fullscreen-container";
    fullscreenContainer.style.position = "fixed";
    fullscreenContainer.style.top = "0";
    fullscreenContainer.style.left = "0";
    fullscreenContainer.style.width = "100%";
    fullscreenContainer.style.height = "100%";
    fullscreenContainer.style.background = "rgba(0, 0, 0, 0.8)";
    fullscreenContainer.style.display = "flex";
    fullscreenContainer.style.flexDirection = "column";
    fullscreenContainer.style.justifyContent = "center";
    fullscreenContainer.style.alignItems = "center";
    fullscreenContainer.style.zIndex = "1000";

    let fullscreenImg = document.createElement("img");
    fullscreenImg.src = imgElement.src;
    fullscreenImg.style.maxWidth = "90%";
    fullscreenImg.style.maxHeight = "80%";
    fullscreenImg.style.borderRadius = "10px";
    fullscreenImg.style.animation = "zoomIn 0.3s ease-in-out";

    let message = document.createElement("div");
    message.textContent = imgElement.getAttribute("data-message") || "Your message here";
    message.style.background = "rgba(255, 255, 255, 0.9)";
    message.style.color = "#b22222";
    message.style.padding = "15px";
    message.style.marginTop = "15px";
    message.style.borderRadius = "10px";
    message.style.fontSize = "18px";
    message.style.fontFamily = "Dancing Script, cursive";
    message.style.textAlign = "center";

    fullscreenContainer.appendChild(fullscreenImg);
    fullscreenContainer.appendChild(message);
    document.body.appendChild(fullscreenContainer);

    fullscreenContainer.addEventListener("click", function () {
        document.body.removeChild(fullscreenContainer);
      document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".gallery img");

    images.forEach(img => {
        // Hover effect - Slight Pop-up
        img.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)";
            this.style.boxShadow = "0px 0px 15px rgba(255, 0, 0, 0.5)";
        });

        img.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "3px 3px 15px rgba(0, 0, 0, 0.2)";
        });

        // Click event - Fullscreen with message
        img.addEventListener("click", function () {
            openFullscreen(this);
        });
    });
});

function openFullscreen(imgElement) {
    let images = document.querySelectorAll(".gallery img"); // Get all images
    let currentIndex = Array.from(images).indexOf(imgElement); // Find clicked image index

    // Create fullscreen container
    let fullscreenContainer = document.createElement("div");
    fullscreenContainer.id = "fullscreen-container";
    fullscreenContainer.style.position = "fixed";
    fullscreenContainer.style.top = "0";
    fullscreenContainer.style.left = "0";
    fullscreenContainer.style.width = "100%";
    fullscreenContainer.style.height = "100%";
    fullscreenContainer.style.background = "rgba(0, 0, 0, 0.8)";
    fullscreenContainer.style.display = "flex";
    fullscreenContainer.style.flexDirection = "column";
    fullscreenContainer.style.justifyContent = "center";
    fullscreenContainer.style.alignItems = "center";
    fullscreenContainer.style.zIndex = "1000";

    // Create fullscreen image
    let fullscreenImg = document.createElement("img");
    fullscreenImg.src = imgElement.src;
    fullscreenImg.style.maxWidth = "90%";
    fullscreenImg.style.maxHeight = "80%";
    fullscreenImg.style.borderRadius = "10px";
    fullscreenImg.style.animation = "zoomIn 0.3s ease-in-out";

    // Retrieve message from clicked image
    let messageText = imgElement.getAttribute("data-message") || "Your message here";

    // Create message box
    let messageBox = document.createElement("div");
    messageBox.textContent = messageText;
    messageBox.style.background = "rgba(255, 255, 255, 0.9)";
    messageBox.style.color = "#b22222";
    messageBox.style.padding = "15px";
    messageBox.style.marginTop = "15px";
    messageBox.style.borderRadius = "10px";
    messageBox.style.fontSize = "18px";
    messageBox.style.fontFamily = "Dancing Script, cursive";
    messageBox.style.textAlign = "center";

    // Create navigation buttons
    let prevBtn = document.createElement("button");
    prevBtn.innerHTML = "&#10094;"; // Left arrow
    prevBtn.classList.add("nav-button", "prev");
    prevBtn.style.position = "absolute";
    prevBtn.style.left = "20px";
    prevBtn.style.fontSize = "30px";
    prevBtn.style.color = "white";
    prevBtn.style.background = "rgba(0, 0, 0, 0.5)";
    prevBtn.style.border = "none";
    prevBtn.style.padding = "10px";
    prevBtn.style.cursor = "pointer";
    prevBtn.style.zIndex = "1001";
    prevBtn.onclick = function () {
        changeImage(-1);
    };

    let nextBtn = document.createElement("button");
    nextBtn.innerHTML = "&#10095;"; // Right arrow
    nextBtn.classList.add("nav-button", "next");
    nextBtn.style.position = "absolute";
    nextBtn.style.right = "20px";
    nextBtn.style.fontSize = "30px";
    nextBtn.style.color = "white";
    nextBtn.style.background = "rgba(0, 0, 0, 0.5)";
    nextBtn.style.border = "none";
    nextBtn.style.padding = "10px";
    nextBtn.style.cursor = "pointer";
    nextBtn.style.zIndex = "1001";
    nextBtn.onclick = function () {
        changeImage(1);
    };

    // Function to change image
    function changeImage(direction) {
        currentIndex = (currentIndex + direction + images.length) % images.length;
        fullscreenImg.src = images[currentIndex].src;
        
        // Update message when changing image
        let newMessageText = images[currentIndex].getAttribute("data-message") || "Your message here";
        messageBox.textContent = newMessageText;
    }

    // Close fullscreen when clicking outside the image
    fullscreenContainer.onclick = function (event) {
        if (event.target === fullscreenContainer) {
            document.body.removeChild(fullscreenContainer);
        }
    };

    // Handle keyboard navigation
    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowRight") changeImage(1);
        if (event.key === "ArrowLeft") changeImage(-1);
        if (event.key === "Escape") document.body.removeChild(fullscreenContainer);
    });

    // Append elements
    fullscreenContainer.appendChild(prevBtn);
    fullscreenContainer.appendChild(fullscreenImg);
    fullscreenContainer.appendChild(messageBox);
    fullscreenContainer.appendChild(nextBtn);
    document.body.appendChild(fullscreenContainer);
}

    });
}
