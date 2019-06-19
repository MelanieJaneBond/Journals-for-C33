function renderJournalEntries(API) {
    for (let i = 0; i <= API.length; i++)
    document.querySelector(".entryLog").innderHTML += API[i]
}

 renderJournalEntries(API)

 //check on this function, see whether the loop still works with the new API variable INSTEAD of
 // the array it had in before "arrayOfEntries"