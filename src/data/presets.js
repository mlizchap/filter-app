export const presets = [
    {
        name: "none",
        filters: [],
        background: {},
    },
    {
        name: "reyes",
        filters: ["sepia(.75)", "contrast(.75)", "brightness(1.1)", "saturate(1.4)"],
        background: {},
    },
    {
        name: "poprocket",
        filters: ["sepia(.15)", "brightness(1.05)"],
        background: {
            opacity: .75,
            radialGradient: {
                outer: {
                    color: "rgba(206, 39, 70, .75)",
                    amount: "40%"
                },
                inner: {
                    color: "black",
                    amount: "80%"
                }
            },          
            mixBlendMode: 'screen'
        }
    },
    {
        name: "test",
        filters: ["sepia(.15)", "brightness(1.05)"],
        background: {
            backgroundColor: 'purple',
            opacity: .5,
            mixBlendMode: 'none'
        }
    },
    {
        name: "inkwell",
        filters: ["brightness(1.25)", "contrast(.85)", "grayscale(1)"],
        background: {}
    },
    {
        name: "walden",
        filters: ["sepia(.35)", "contrast(.8)", "brightness(1.1)", "saturate(1.2)"],
        background: {
            backgroundColor: "rgba(229, 240, 128, .5)",
            mixBlendMode: "darken"
        }
    },
    {
        name: "1977",
        filters: ["sepia(.5)", "hue-rotate(-30deg)", "saturate(1.4)"],
        background: {}
    }
]