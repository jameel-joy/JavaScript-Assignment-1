// 1. Write a program that takes in a day of the week (e.g., Monday, Tuesday, etc.) and outputs the number of
// days until the weekend.

const dayOfWeek = "Wednesday";

switch (dayOfWeek.toLowerCase()) {
  case "monday":
    console.log("4 days until the weekend.");
    break;
  case "tuesday":
    console.log("3 days until the weekend.");
    break;
  case "wednesday":
    console.log("2 days until the weekend.");
    break;
  case "thursday":
    console.log("1 day until the weekend.");
    break;
  case "friday":
    console.log("It's the weekend tomorrow!");
    break;
  case "saturday":
  case "sunday":
    console.log("It's already the weekend!");
    break;
  default:
    console.log("Invalid input. Please enter a valid day of the week.");
}
