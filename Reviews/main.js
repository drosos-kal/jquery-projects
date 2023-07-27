// App State
const reviews = [
    {id:0, personaName: "Anna B.", job: "Web Designer", img: "https://img.freepik.com/free-photo/cheerful-middle-aged-woman-with-curly-hair_1262-20859.jpg", descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quas, at a ex maiores aspernatur ea qui delectus dolorem rem alias nostrum assumenda ut eius provident, impedit minus officia architecto?"}, 
    {id:1, personaName: "Chris R.", job: "Java Junior Developer", img: "https://img.freepik.com/premium-photo/young-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-65212.jpg", descr: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime reprehenderit alias natus eligendi adipisci minima sed, rem deserunt vel quisquam assumenda magni beatae iure voluptas molestiae sint dolorum veritatis aperiam?"}, 
    {id:2, personaName: "Olga C.", job: "Senior Project Manager", img: "https://img.freepik.com/free-photo/positive-human-reactions-feelings-emotions-charming-elegant-middle-aged-sixty-year-old-female-with-short-gray-hair-with-pleased-smile-her-eyes-full-happiness-joy_343059-2855.jpg", descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ad culpa velit repudiandae incidunt? Adipisci eos dolor voluptatibus obcaecati architecto cumque quod similique. Molestiae, laboriosam nemo aliquam eveniet facilis possimus?"}
]

let personaId = Math.floor(Math.random() * reviews.length)


$(document).ready(function() {
    showPersonaById(personaId)

    $('#prevBtn').on('click', function() {
        onPrevBtnClick()
    })

    $('#nextBtn').on('click', function() {
        onNextBtnClick()
    })
})


function showPersonaById(personaId) {
    const persona = reviews.find(p => p.id === personaId)
    const {personaName, job, img: image, descr } = persona
    $('#personaImg').attr('src', image)
    $('#personaName').html(personaName)
    $('#personaJob').html(job)
    $('#personaDescr').text(descr)
}

/**
 * Actions taken after prev button clicked.
 * Actions include show previous persona.
 */
function onPrevBtnClick() {
    showPrevPersona()
}

/**
 * Actions taken after next button clicked.
 * Actions include show next persona.
 */
function onNextBtnClick() {
    showNextPersona()
}

/**
 * Circularly finds the previous persona id and shows the persona.
 */
function showPrevPersona() {
    personaId = (personaId < 0) ? reviews.length -1 : --personaId
    showPersonaById(personaId)
}

/**
 * Circularly finds the next persona id and shows the persona.
 */
function showNextPersona() {
    personaId = (++personaId % reviews.length)
    showPersonaById(personaId);
}