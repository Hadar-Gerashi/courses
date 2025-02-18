import { Schema, model } from "mongoose"



export const courseSchema = Schema({
    name: String,
    describe: String,
    openingDate: Date,
    long: Number,
    img: String,
    price: Number,
    motivation: String,
    categories: {
        type: String,
        enum: ['EDUCATION',
            'PROGRAMMING',
            'DESIGN',
            'BUSINESS',
            'MUSIC',
            'FITNESS',
            'DEVELOPMENT',
            'COOKING',
            'GAMING',
            'PHOTOGRAPHY',
            'TRAVEL'],
    },
    locations: [String]
})

export const courseModel = model("courses", courseSchema)