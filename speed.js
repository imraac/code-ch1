function checkSpeed(motion) {
    // Check if the motion is less than 70
    if (motion <= 70) {
      console.log("Ok");
    //   if speed is below 70, deduct no demerit point
    } else {
      const demeritPoint = Math.floor((motion - 70) / 5);
  // Evaluate the number of demerit point using Math.floor
      
  if (demeritPoint > 12) {
        console.log("License suspended");
     // Check if the driver has more than 12 demerit point if yes,  License will be suspended
     } else {
        console.log(`Points: $[demeritPoint]`);
      }
    }
  }
//   for every 5km/s above the motion limit, one demeritPoint is deducted
  
  const motion = parseInt(prompt("Look motion of the car: "));
  
  // Check the motion
  checkSpeed(89);
  console.log(checkSpeed(89))