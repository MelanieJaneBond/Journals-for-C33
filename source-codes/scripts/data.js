let API = {
    getJournalEntries () {
        return fetch(`http://localhost:3000/arrayOfEntries`)
.then(entries => entries.json())
    }
}

// API.getJournalEntries()
// .then(g => console.log(g))

function makeJournalEntryComponent(entry) {
    return `
    <h3>Date: ${arrayOfEntries.whatDayIsIt}</h3>
    <h2>Title: ${arrayOfEntries.conceptsCovered}</h2>
    <p>${arrayOfEntries.journal}</p>h
    <h3>How I feel about it... "${arrayOfEntries.howDoYouFeel}"</h3>
    `
}
//save-button should add to the array arrayOfEntries.push(entry)


