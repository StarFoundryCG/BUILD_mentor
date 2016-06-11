
// Step 2: Convert Candidates collection into a defaultRun profile such as the one below, using
// completely random / static data whenever a calcualation is necessary
//
/*
currentCandidate = Candidate
  
var defaultRunProfile = 
    {
      runDetails: {timestamp:"11/1/19", matchPercentage:0.87}, 
      results: {
        {candidateFirstName: currentCandidate["First Name"], assignmentContraintsOrPreferences:{...}}, 
    {candidateFirstName: "Ginger", slotId:"forNowSomeRandomSlotId"},
    {candidateFirstName: "Clinton"}
  };

// Step 3: Create function convertRunProfileIntoFormattedRunProfile, which
//         converts default run profile into formatted run profile
// 
  // - Grab candidate who is first in results object
  // - Look at siteId for that candidate, add that siteID as a value in a new dictionary
  //      var formattedProfile = {};
  //      formattedProfile.slotId = currentCandidateSlotId
  //      formattedProfile.matches = formattedProfile.matches.push(currentCandidateId)
  // - Replace hard-coded formattedProfile created in Step 1 with the output of this function

  
formattedRunProfile = convertRunProfileIntoFormattedRunProfile(defaultRunProfile);

// Step 1: Create sample formatted profile such as the one below, and render via run_profile template
/*
 // Example formattedRunProfile:
    {
      siteId: 's90393', 
      matches: {
                    {candidateFirstName: "Jeff", slotId:838393}, 
                    {candidateFirstName: "Ginger"},
                    {candidateFirstName: "Clinton"}
                }
};
*/
/*
// Step 4: User interacts with rendered profile, to add/edit profile information before rerun
  var sampleRunProfile1 = {
    {candidateFirstName: "Jeff Maeshiro", enabled:true, locked: true, slotId:'839839883737392923'}, 
    {candidateFirstName: "Ginger Maeshiro", slotId:'8398443433985'},
    {candidateFirstName: "Clinton Maeshiro", enabled:false, slotId:'9696943983963'}
};

*/
/*
// Get slot object
currentSlot = Slots.findOne(slotId);

// Get start and end times based on slotId
currentShift = Shifts.findOne(currentSlot.shiftId);
*/


if (Sites.find().count() === 0) {
  
  // Remove Sites, Shifts, and Slots
  
  // Create Sites, Shifts, and Slots
  //
	var bahiaId = Sites.insert({
    name: 'Bahia'
  });
  
  var bahiaShift1Id = Shifts.insert({
    siteId: bahiaId,
    monStart:"13:00", // need to lookup javascript data time
    monEnd:"16:00",
    wedStart:"12:00",
    wedEnd: "16:00"
  });
      
 // var bahia = Sites.findOne(bahiaId);
  var bahiaSlotId = Slots.insert({
    shiftId: bahiaShift1Id,
    siteId: bahiaId,
    
  });
  
 
  var formattedRunProfile = 
      { siteId: bahiaId,
        matches: [
                  {firstName: 'John', lastName: 'Smith', slotId: bahiaSlotId },
                  {firstName: 'Susan', lastName: 'Lane' },
                  {firstName: 'Richard', lastName: 'Cone' }
                ]
      };
  
 
  
  //var defaultRunProfile = ....
 
  
}

