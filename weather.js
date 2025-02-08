let input=document.getElementById("ip");
let btn1=document.getElementById("btn1");
let area=document.getElementById("area");
let cityInfo=document.getElementById("cityInfo")

async function getdata(city)
{
let promise= await fetch(`http://api.weatherapi.com/v1/current.json?key=e512f3909aa1408c93a194835243011&q=${city}&aqi=yes`)
return await promise.json();
}

btn1.addEventListener("click",  async()=>
{

setTimeout(async()=>
{
    
    let city=input.value;
    result=await getdata(city);
    
    if(result.error)
    {
        cityInfo.innerText=`Sorry ${city} Not Found!`
     }
    else
     {
       
          cityInfo.innerText=`Temperature:${result.current.temp_c}C \n Condition:${result.current.condition.text} `    
     }
 
console.log(result)    

},1000);
  
});



