
const words = [
    "Innovate",
    "Explore",
    "Create",
    "Design",
    "Develop",
    "Implement",
    "Achieve",
    "Navigate",
    "Discover",
    "Transform",
    "Optimize",
    "Collaborate",
    "Inspire",
    "Solve",
    "Evolve"
]

words.forEach((word) => {
    let newH1 = document.createElement('h1');
    newH1.textContent = word;
    document.body.appendChild(newH1);
    console.log("hi")
})