const dolphinAvg = (96 + 108 + 89) / 3;
const koalasAvg = (89 + 91 + 110) /3;

if(dolphinAvg > koalasAvg && dolphinAvg > 100) {
    console.log("Dolphin team ${dolphinAvg} WIN with a Trophy");  

} else if (dolphinAvg > koalasAvg && dolphinAvg > 100) {
    console.log("koalas team WIN with a Trophy"); 
 
} else if (dolphinAvg > koalasAvg && dolphinAvg <= 100) {
        console.log("Dolphin team WIN"); 

} else if (dolphinAvg > koalasAvg && dolphinAvg <= 100) {
            console.log("koalas team WIN"); 
                     
} else if (dolphinAvg === koalasAvg) {
    console.log("koalas and Dolphin are winning");
}
