function checkStatus(a, b, c) {
    if(typeof a==="string" && typeof b==="Number" || c===true){
        console.log(`Hello ${a}, Your Age Is ${b}, You Are Available For Hire`);
    }
    else if(typeof a==="Number" && typeof b==="string" || c===true){
        console.log(`Hello ${b}, Your Age Is ${a}, You Are Available For Hire`);
    }
    else if(a===true ||typeof b==="Number" && typeof c==="string"){
        console.log(`Hello ${c}, Your Age Is ${b}, You Are Available For Hire`);
    }
    else {
        console.log(`Hello ${b}, Your Age Is ${c}, You Are Not Available For Hire`);
    }
  }
  
  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"