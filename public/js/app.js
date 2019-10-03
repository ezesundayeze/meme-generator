
/*



*/
gif_title = document.getElementById("title");
gifForm = document.getElementById("gifForm");
message = document.getElementById("message");
gif = document.getElementById("gif")

gifForm.addEventListener("submit", function(e){
    e.preventDefault()
    fetch("/gif", {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({"title":gif_title.value}),
        
      }).then((response)=>response.json()).
      then((data)=>{
          console.log("success")
          console.log(data.data)
          data.data.map((a)=>{
              gif.src = a.images["480w_still"].url
              message.innerHTML = ""
          })
      }).
      catch((error)=>{
          console.error("Error")
          message.innerHTML = "Unable to connect to the server..."
      })

})
