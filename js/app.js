const earthData = () => 
{
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=DBtDXqIbf85NTUN18Oejr5oHTOypF9YrLM0iw5dM', true)
    xhr.onload = function() 
    {
        if (this.status == 200) 
        {
            const data = JSON.parse(this.responseText)
            const mainTitle = `Astronomy photo of the day is ${data.title}`
            const img = `<img src=${data.url} alt=${data.title}></img>`
            const explanation = `${data.explanation}`
            const dateCreated = `Today's date: ${data.date}`
            const author = `&copy; copyrights by ${data.copyright}`
            const subTitle = `What is ${data.title}?`


            document.querySelector('h1').textContent = mainTitle
            document.querySelector('.image').innerHTML = img
            document.querySelector('article').textContent = explanation
            document.querySelector('.date').textContent = dateCreated
            document.querySelector('.author').innerHTML = author
            document.querySelector('.sub-title').innerHTML = subTitle

        }
    }
    xhr.send()
}
earthData()

// Toggle switch for dark mode.

const toggler = () => 
{
    let toggleOn = document.querySelector('#toggle-on')
    toggleOn.addEventListener('click', function()
    {
        let darkMode = document.body
        darkMode.classList.toggle("dark-mode")

    })
}
toggler()

console.log('App created by Dads Who Code A.K.A Zack Grooms')