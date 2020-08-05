console.log('destructuring')

const person = {
    publisher : {
        name : 'Miami'
    }
}

const { name : publisherName = 'Anonymous'} = person.publisher

console.log(publisherName)


const letters = ['alpha', 'beta', 'charlie', 'delta']

const [,,c] = letters

console.log(c)