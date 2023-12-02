// Function to change the name text every 10 seconds
function changeName() {
    const nameElement = document.getElementById('name');
    const names = ["Saketh", "a developer"];
    let currentIndex = 0;
    let currentName = '';
    let isTyping = true;
    let charIndex = 0;

    function updateName() {
        if (isTyping) {
            currentName = names[currentIndex].substring(0, charIndex);
            nameElement.textContent = "Hi, I'm " + currentName;
            charIndex++;

            if (charIndex > names[currentIndex].length) {
                isTyping = false;
                setTimeout(updateName, 1000); // Wait for 1 second after typing
            } else {
                setTimeout(updateName, 90); // Type each character with a 100ms delay
            }
        } else {
            currentName = names[currentIndex].substring(0, charIndex);
            nameElement.textContent = "Hi, I'm " + currentName;
            charIndex--;

            if (charIndex === 0) {
                isTyping = true;
                currentIndex = (currentIndex + 1) % names.length;
            }

            setTimeout(updateName, 100); // Delete each character with a 100ms delay
        }
    }

    updateName();
}

changeName();


// Smooth scrolling for anchor links in the navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Scroll to the top of the section
            });
        }
    });
});

// Add this JavaScript code to your script.js file
window.addEventListener("scroll", function() {
    var scrollToTopButton = document.getElementById("scrollToTop");

    if (window.scrollY > 200) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

document.getElementById("scrollToTop").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
