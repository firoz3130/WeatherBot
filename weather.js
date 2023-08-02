const weatherForm = document.getElementById("weatherForm");
weatherForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    const weatherBtn=document.getElementById("getWeather");
    const cityIns = document.getElementById("cityInput");
    const city = cityIns.value;
    console.log(cityIns);
    console.log(city);
    weatherBtn.addEventListener('click',()=>{
        console.log("clicked");
    });
});
        
        const counterElement = document.querySelector(".counter");

        // Function to update the counter
        const updateCounter = () => {
            let seconds = 10000;

            const countInterval = setInterval(() => {
                seconds--;
                counterElement.textContent = `${seconds} seconds`;

                if (seconds <= 0) {
                    clearInterval(countInterval);
                    counterElement.textContent = "Time's up!";
                }
            }, 1000);
        };
        updateCounter();
