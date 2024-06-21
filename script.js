// let form=document.querySelector("form")
let btn=document.getElementById("btn")
// console.log(form)
btn.addEventListener("click",(e)=>{
    e.preventDefault()
    let fetchDate=async()=>{
        let key="873c04c390a2dbaa720fa5ad3bce78fd"
        let place=document.querySelector("#location").value
        // console.log(place,key)
        let date=await fetch (`https://api.openweathermap.org/date/2.5/weather?q=${place}&appid=${key}`)
        let finalOutput=await date.json()
        // console.log(finalOutput)
        let tempValue=document.querySelector(".temp_value")
        let humidValue=document.querySelector(".humid_value")
        // console.log(tempValue)
        // console.log(humidValue)
        let finalTemp=Math.round(finalOutput.main.temp-273)
        console.log(finalTemp)
        let finalHumid=(finalOutput.main.humidity)
        tempValue.innerHTML=`${finalTemp} <sup>0</sup>C`
        humidValue.innerHTML=`${finalHumid} KMPH`
    }
    fetchDate()
})