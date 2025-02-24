const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const wrapper = document.querySelector(".wrapper");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    const question = document.querySelector(".question");
    const gif = document.querySelector(".gif");
    question.innerHTML = "It's your special day baby Happy Birthday Gorgeous lots of kisses💚";
    gif.src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdW1raGZubHV3ejl5eGI3MTlhNDBnY3BhZHEzdDlzeDQ0M2Z1bmprbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/P1VHfCYElFTcQ/giphy.webp";
});

// Make the No button move randomly when the page loads or resizes
function positionNoButton() {
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate maximum X and Y coordinates for the "No" button within the wrapper
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    // Generate random positions
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Set the new position
    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

// Adjust button position on page load and resize
window.addEventListener("load", positionNoButton);
window.addEventListener("resize", positionNoButton);

// Move the No button to a new random position when hovered over
noBtn.addEventListener("mouseover", positionNoButton);
