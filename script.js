// changing button color on click
const buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach((individualButton) => {
    console.log(individualButton);
    individualButton.addEventListener('click', () => {
        individualButton.classList.toggle('grey');
        console.log(individualButton.classList);
    })
});



