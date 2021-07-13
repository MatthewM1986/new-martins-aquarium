const fishCollection = [
    {
        image: "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_620/MTc0OTY5MTExMzM4NjI0OTky/tropical-fish-for-beginners.webp",
        name: "Bart",
        species: "fish",
        length: 5,
        location: "ocean",
        food: "crustaceans"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}