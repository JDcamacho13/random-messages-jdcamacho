const messages = [
    'Maria', 
    'Daniel', 
    'Laura', 
    'José', 
    'Valentina', 
    'David',
    'Daniela',
    'Miguel',
    'Jesus',
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

module.exports = { randomMsg }