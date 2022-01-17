/*
    We will be using the following generator function to generate unique
    identifiers for objects in our database while we use local storage. Do
    not worry about understanding the code inside it - it's not important.
    What is important is the output, and understanding how we use that
    output in the factory function.
*/
const uuidGenerator = function* () {
    while (true) {
        let time = new Date().getTime()
        let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (char) {
            const random = (time + Math.random() * 16) % 16 | 0
            return (char === 'x' ? random : (random & 0x3 | 0x8)).toString(16)
        })
        yield uuid
    }
}

// Create instance of generator
const blogPostId = uuidGenerator()

// Factory function that returns a blog article object
const blogObjectFactory = function (title, entry, ...tags) {
    return Object.create(null, {
        "id": { value: blogPostId.next().value, enumerable: true },
        "title": { value: title, enumerable: true },
        "body": { value: entry, enumerable: true },
        "tags": { value: tags, enumerable: true },
        "published": { value: Date.now(), enumerable: true }
    })
}

// Create a blog article about your first day at NSS
const firstDay = blogObjectFactory("My first day at NSS", "I felt completely lost", "nss", "life changes", "software")
console.log(firstDay);

const secondDay = blogObjectFactory("My first day at NSS", "I felt completely lost", "nss", "life changes", "software")
console.log(secondDay);
// Create a blog article about your instructor
const instructor1 = blogObjectFactory("Our instructor", "This guy is a jerk", "nss", "teachers", "loser")
console.log(instructor1);

const instructor = blogObjectFactory("Our instructor", "This guy is a jerk", "nss", "teachers", "loser")
console.log(instructor);