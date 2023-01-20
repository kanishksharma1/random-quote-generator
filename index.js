document.querySelector(".container #quoteBtn").addEventListener("click", () => {
    fetch("https://api.quotable.io/random?tags=history%7Ccivil-rights")
    .then((response)=>{return response.json()})
    .then((input)=>{
        document.querySelector(".container #quote").innerHTML = input.content
    })
})

//https://api.quotable.io/random?tags=technology,famous-quotes#