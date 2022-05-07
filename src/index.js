const init = () => {
    /* Target form DOM element. */ 
    const inputForm = document.querySelector("form")
    // console.log("inputForm: ", inputForm)
    /* Add Event Listener to form DOM element. 
       a) requires Event type (string): "submit"
       b) requires Listener callback function
          to handle Event: (event) => {}  
    */
   inputForm.addEventListener("submit", (event) => {
        /* Prevent default behavior: page reload. */
        event.preventDefault()
        // console.log("event handled:", event)
        // console.log("event target: ", event.target)
        // console.log("event target.children: ", event.target.children)
        // console.log("event target.children[1]: ", event.target.children[1])
        /*** Get input value by Event ***/
        // console.log("event target.children[1].value: ", event.target.children[1].value)
        // console.log("event target[0].value: ", event.target[0].value)
        // console.log("event target[1]: ", event.target[1])

        /*** Get input value by DOM Element ***/
        const input = document.querySelector("input#searchByID")
        console.log(input.value)

        /* Fetch data from db.json. */
        // fetch('http://localhost:3000/movies')
        fetch(`http://localhost:3000/movies/${input.value}`)
        // console.log(fetch('http://localhost:3000/movies'))
        .then(response => response.json())
        // .then(response => console.log(response))
        // .then(response => console.log(response.json()))
        /*  */  
        // .then(data => {console.log(data)})
        .then(data => {
            console.log(data)
            /* Get h4 DOM element. */
            const title = document.querySelector("section#movieDetails h4")
            // console.log(title)
            /* Get p DOM element. */
            const summary = document.querySelector("section#movieDetails p")
            // console.log(summary)
            /* Assign value of title key from JSON object. */
            title.innerText = data.title
            /* Assign value of summary key from JSON object. */
            summary.innerText = data.summary
        })
        
    })
}

document.addEventListener('DOMContentLoaded', init);