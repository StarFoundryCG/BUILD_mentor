/*

function assignToSlot(candidateList, slotId) {

	for each candidate in candidateList
		candidate.slot = slotId

	return candidateList
}

function processCandidates(candidateList)
{
	currentCandidates = candidateList

	// Can work 2+ days?
	//
	splitResults = splitByCanWorkEnough(currentCandidates, {2,3,4,5,6,7}, {}); // No shift requirement

	currentCandidates = merge(
	processCanWorkEnough(splitResults.canWorkEnough),
	processCanNotWorkEnough(splitResults.canNotWorkEnough)
	)

	Return currentCandidates
}




function processCanWorkEnough(candidateList){

	// Preferred Volunteer Status == WorkStudy / Units?
	//
	splitResults = splitByVolunteerStatus(currentCandidates)

	currentCandidates = merge( 
	processNonVolunteers(merge(splitResults.workStudy, splitResults.Units)), 
	processVolunteers(splitResults.volunteers)
	)

	return currentCandidates
}




function processCanNotWorkEnough(candidateList){ 
	// change site+shift+slot to rejected
	//
	currentCandidates = assignToSlot(candidateList, 'rejected')

	return currentCandidates
}





function processNonVolunteers(candidateList, slotId) {

	// Willing to travel?
	//
	splitResults              = splitByTravelWillingness(candidateList);

	currentCandidates   = merge( processWillingToTravel(splitResults.willingToTravel),
							processNotWillingToTravel(splitResults.notWillingToTravel) )

function processWillingToTravel(candidateList)
{
	// Free on Fridays + 1 other day?
	splitResults              = splitByFridayFreeness(candidateList);

	currentCandidates   = merge( processFreeOnFridays(splitResults.freeOnFridays),
					    processNotFreeOnFridays(splitResults.notFreeOnFridays) )

	return currentCandidates
}

function procesNotWillingToTravel(candidateList)
{
	   // Put in berkeley pool (???)

// Speaks spanish?
splitResults   = splitBySpanishFluency(candidateList);


currentCandidates   = merge( processBySpeaksSpanish(splitResults.speaksSpanish),
    processByDoesNotSpeakSpanish(splitResults.doesNotSpeakSpanish) )

return currentCandidates
}

// Assess who has the right availability
function processBySpeaksSpanish(candidateList)
{

	  // Available to work required days and times?

	   currentCandidates = candidateList
requiredDaysAvailable = 2

requiredShifts.monStart = 14:30
requiredShifts.monEnd = 17:30
requiredShifts.tuesStart = 14:30
requiredShifts.tuesEnd = 17:30
…..

splitResults = splitByAvailableToWork(currentCandidates, requiredShifts, requiredDays)
	 
currentCandidates = 

return currentCandidates 
}

// Assess who has the right availability
function processByDoesNotSpeakSpanish(candidateList)
{
requiredDaysAvailable = 2

requiredShifts.monStart = 14:30
requiredShifts.monEnd = 17:30
requiredShifts.tuesStart = 14:30
requiredShifts.tuesEnd = 17:30
…..

for each candidate in Candidates
if candidateIsAvailable(candidate, requiredShifts, requiredDays)
candidate.slotId = ‘laConte'; 

return candidateList
}



function processNotFreeOnFridays(candidateList)
{
// Wed start time is early enough?
// 
splitResults  = splitByWedStartEarlyEnough(candidateList);

// Rule:
priorityList = []

currentCandidates   = merge( processWedStartEarlyEnough(splitResults.wedStartEarlyEnough),
  	processWedStartNotEarlyEnough(splitResults.wedStartNotEarlyEnough) )

return candidateList
}



function processFreeOnFridays(candidateList)
{
// Assign candidates based on priority 
// 
currentCandidates = assignCandidatesToBestSlot(candidateList, priorityList)


currentCandidates   = merge( processWedStartEarlyEnough(splitResults.wedStartEarlyEnough),
  	processWedStartNotEarlyEnough(splitResults.wedStartNotEarlyEnough) )

return candidateList
}















function processVolunteers(candidateList, slotId) {

	return candidateList
}

*/