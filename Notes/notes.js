let noteId = 0
const daysGr = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο']
const monthsGr = ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου', 
                'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου']



//Listeners
$(document).ready(function() {
    setInterval(printGRDate, 1000)

    $('#addNoteBtn').on('click', function() {
        insertNote($('#inputNote').val().trim())
        reset()
    })

    $('#inputNote').on('keyup', function(e) {
        if (e.key === 'Enter') {
            insertNote($(this).val().trim())
            reset()
        }
    })
})

/**
 * Displays the current date and time dynamically.
 */
function printGRDate() {
    const currentDate = new Date()
    const day = currentDate.getDay()
    const date = currentDate.getDate()
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()
    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()

    const strDay = daysGr[day]
    const strMonth = monthsGr[month]
    let strDate = `${strDay}, ${date} ${strMonth} ${year}`
    let strTime = `${(hours < 10) ? '0' : ''}${hours}:${(minutes <10) ? 0 : ''}${minutes}:${(seconds < 10) ? 0 : ''}${seconds}`

    $('#dateText').html(strDate + "<br>" + strTime)
}

/**
 * Inserts a new note in the notepad.
 * @param {String} note - The note to be inserted in the notepad.
 */
function insertNote(note) {
    if (!note) {
        return
    }

    noteId++

    let clone = $('.note.hidden').clone()
    clone.removeClass('hidden') 
    clone.find('.note-check').on('click', function() {
        strikeThrough(clone.find('.note-text'))
    })

    let clonedNoteInfo = clone.find('.note-info')
    clonedNoteInfo.children('input').attr('id', 'noteCheck' + noteId)
    clonedNoteInfo.children('label').attr('for', 'noteCheck' + noteId)

    let clonedBtn = clone.find('.notedel-btn')
    clonedBtn.attr('id', 'noteDelBtn' + noteId)

    clonedBtn.on('click', function() {
        deleteNote($(this).parent())
    })

    clone.find('.note-text').html(note)
    $('.notes-wrapper').append(clone)
}

/**
 * If the user clicks on an existing note toggles the 'line-through' class.
 * @param {HTMLElement} element - The note the user clicked on. 
 */
function strikeThrough(element) {
    element.toggleClass('line-through')
}

/**
 * Deletes a note
 * @param {HTMLElement} note - The note to be deleted. 
 */
function deleteNote(note) {
    note.remove()
}

/**
 * Resets the text on the input area to blank.
 */
function reset() {
    $('#inputNote').val('')
}