import loaders from './loaders'

loaders().then((app) => {
    app.listen(3000, () => {
        console.log(`Server is listening on port ${3000}`)
        return null
    });
    console.log("XD 2")
})




