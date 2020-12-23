let searchButton = document.querySelector("#search")


searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
})

async function sendApiRequest(){
  let API_KEY="FTUlesbhTJn9wDgaLBd9X8fjo9SNPR3dEbxZoG9i"
  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
  let data = await response.json()
  console.log(data)
  useApiData(data)
}


 function useApiData(data){
  document.querySelector("#content").innerHTML += data.explanation
  document.querySelector("#content").innerHTML += `<img src="${data.url}">`
}

