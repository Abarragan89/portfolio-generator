"use strict";
const profileDataArgs = process.argv.slice(2, process.argv.length);
const printProfileData = profileDataArr => {
    profileDataArr.forEach(profileItems => console.log(profileItems))
}
printProfileData(profileDataArgs);