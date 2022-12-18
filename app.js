
function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";
    
    if (h == 0)
    h = 12;
    if (h > 12) {
        h = h - 12;
        session = "PM";
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s + " " + session;
    
    document.getElementById("MyClock").innerText = time;
    setTimeout(showTime, 1000);
    // document.getElementById("MyClock").textContent=time;
}
function showDate() {
    let date = new Date();
    
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    let d = date.getDate();
    let Days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    let Months=['January',"February",'March','April','May','June','July','August','September','October','November','December'];
    
    let today = Days[day] + "-" + d + " " + Months[month] + " " + year;
    document.getElementById("MyDate").innerText = today;
}
showTime();
showDate();