function ageInTime(theAge) {
    if(10 > theAge || theAge > 100)
    {
        console.log('Age Out Of Range');
    }
    else{
        console.log(`the years is ${theAge} `);
        console.log(`the month is ${theAge*12} `);
        console.log(`the weeks is ${theAge*12*4} `);
        console.log(`the days is ${theAge*12*4**7} `);
        console.log(`the hours is ${theAge*12*4*7*24} `);
        console.log(`the minutes is ${theAge*12*4*7*24*60} `);
        console.log(`the seconds is ${theAge*12*4*7*24*60*60} `);
    }
  }
  
  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months