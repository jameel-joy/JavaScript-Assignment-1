// 1. Write a program of traffic control that accepts the traffic light displayed and prints the message. If the
// traffic light is red print the vehicles must stop.

let trafficLight = "red";

if (trafficLight == "red") {
    console.log("Stop");
}else if (trafficLight == "yellow") {
    console.log("Ready");
}else if (trafficLight == "green") {
    console.log("Go");
}else{
    console.log("Invalid Traffic Light");
}