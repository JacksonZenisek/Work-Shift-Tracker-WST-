setInterval(shiftswitch,1000)

function shiftswitch(){

    let currentshiftbox = document.getElementById("current_shift_container_alt");

    const now = new Date()

    const currenttime = now.getHours()
    const currentday = now.getDay()

    let shiftdisplaymessage = "";

    if((currentday === 0 || currentday === 1 || currentday === 2) && currenttime >=6 && currenttime < 18){
        shiftdisplaymessage = "Current shift is: A Shift"
        currentshiftbox.style.backgroundColor = "#ff6d6d"

        
    }else if((currentday === 0 || currentday === 1 || currentday === 2) && currenttime >=18 && currenttime < 6){
        shiftdisplaymessage = "Current shift is: C Shift"
        currentshiftbox.style.backgroundColor = "#ffff82"

    }else if((currentday === 3 || currentday === 4 || currentday === 5 || currentday === 6) && currenttime >=6 || currenttime < 18){
        shiftdisplaymessage = "Current shift is: B Shift"
        currentshiftbox.style.backgroundColor = "#82ec82"

    }else if((currentday === 3 || currentday === 4 || currentday === 5 || currentday === 6) && currenttime >=18 || currenttime < 6){
        shiftdisplaymessage = "Current shift is: D Shift"
        currentshiftbox.style.backgroundColor = "#70bfff"
    }

    document.getElementById("shift_switch_para_alt").innerHTML = shiftdisplaymessage;
}

setInterval(timeclock,1000)

function timeclock(){
    const time = new Date();
    document.getElementById("currenttime_alt").innerHTML = time.toLocaleTimeString()

}

setInterval(weeklyscheduleswitch,1000)

function weeklyscheduleswitch(){
    const today = new Date();

    const referencedate = new Date(2026, 4, 6)

    const millisecondsperweek = 1000 * 60 * 60 * 24 * 7;

    const weekspassed = Math.floor((today - referencedate) / millisecondsperweek);

    const aandcweek = weekspassed %2 === 0;
    const banddweek = !aandcweek;

    const aandctable = document.getElementById("a_and_c_week_alt");
    const banddtable = document.getElementById("b_and_d_week_alt");

    if (aandcweek){
        aandctable.style.display = "block";
        banddtable.style.display = "none";
    }else{
        aandctable.style.display = "none";
        banddtable.style.display = "block";
    }

}

setInterval(dayhighlighter,1000)

function dayhighlighter(){
    const day_of_the_week = new Date().getDay();

    let Sunday = document.getElementById("sun_col");
    let Monday = document.getElementById("mon_col");
    let Tuesday = document.getElementById("tue_col");
    let Wednesday = document.getElementById("wed_col");
    let Thursday = document.getElementById("thur_col");
    let Friday = document.getElementById("fri_col");
    let Saturday = document.getElementById("sat_col");

    const Sundayboxes = document.querySelectorAll("#sunday_box")
    const Mondayboxes = document.querySelectorAll("#monday_box")
    const Tuesdayboxes = document.querySelectorAll("#tuesday_box")
    const Wednesdayboxes = document.querySelectorAll("#wednesday_box")
    const Thursdayboxes = document.querySelectorAll("#thursday_box")
    const Fridayboxes = document.querySelectorAll("#friday_box");
    const Saturdayboxes = document.querySelectorAll("#saturday_box")

    if(day_of_the_week === 0){
        Sunday.style.backgroundColor = "#ffd06c";

        Sundayboxes.forEach(box => {
            box.style.backgroundColor = "#ffd06c"
        });

    }else if(day_of_the_week === 1){
        Monday.style.backgroundColor = "#ffd06c";

        Mondayboxes.forEach(box => {
            box.style.backgroundColor = "#ffd06c"
        });

    }else if(day_of_the_week === 2){
        Tuesday.style.backgroundColor = "#ffd06c";

        Tuesdayboxes.forEach(box => {
            box.style.backgroundColor = "#ffd06c"
        });

    }else if(day_of_the_week === 3){
        Wednesday.style.backgroundColor = "#ffd06c";

        Wednesdayboxes.forEach(box => {
            box.style.backgroundColor = "#ffd06c"
        });

    }else if(day_of_the_week === 4){
        Thursday.style.backgroundColor = "#ffd06c";

        Thursdayboxes.forEach(box => {
            box.style.backgroundColor = "#ffd06c"
        });

    }else if(day_of_the_week === 5){
        Friday.style.backgroundColor = "#ffd06c";
        
        Fridayboxes.forEach(box => {
            box.style.backgroundColor = "#ffd06c"
        });

    }else{
        Saturday.style.backgroundColor = "#ffd06c";

        Saturdayboxes.forEach(box => {
            box.style.backgroundColor = "#ffd06c"
        });

    }


}

