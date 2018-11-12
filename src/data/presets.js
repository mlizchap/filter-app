const bgDefaults = {
    solid: { 
        color: "white",
        opacity: 1,
        blendMode: "normal"
    },
    gradient: {
        inner: {
            color: "black",
            amount: "20%"
        },
        outer: {
            color: "white",
            amount: "80%"
        },
        opacity: .5
    }, 
    none: {
        color: "white",
        opacity: 1,
        blendMode: "normal"
    },
    currentSelectedBgType: "none" 
}



export const presetData = [
    {
        name: "orange",
        filters: [],
        background: {
            ...bgDefaults,
            solid: {
                color: "orange",
                opacity: .4
            },
            currentSelectedBgType: "solid"
        }
    }
]

// export const presetData = [
//     {
//         name: "none",
//         filters: [],
//         background: {
//             solid: {},
//             gradient: {}
//         },
//     },
//     {
//         name: "reyes",
//         filters: ["sepia(.75)", "contrast(.75)", "brightness(1.1)", "saturate(1.4)"],
//         background: {
//             solid: {},
//             gradient: {}
//         },
//     },
//     {
//         name: "poprocket",
//         filters: ["sepia(.15)", "brightness(1.8)"],
//         background: {
//             gradient: {
//                 outer: {
//                     color: "rgba(206, 39, 70, .75)",
//                     amount: "40%"
//                 },
//                 inner: {
//                     color: "black",
//                     amount: "80%"
//                 },
//                 opacity: .75,
//                 mixBlendMode: 'screen'
//             },
//             solid: {}
//         }
//     },
//     {
//         name: "test",
//         filters: ["sepia(.15)", "grayscale(1)"],
//         background: {
//             solid: {
//                 color: 'purple',
//                 opacity: .5,
//                 mixBlendMode: 'none'
//             },
//             gradient: {}
//         }
//     },

// ]

// // {
// //     name: "inkwell",
// //     filters: ["brightness(1.25)", "contrast(.85)", "grayscale(1)"],
// //     background: {}
// // },
// // {
// //     name: "walden",
// //     filters: ["sepia(.35)", "contrast(.8)", "brightness(1.1)", "saturate(1.2)"],
// //     background: {
// //         backgroundColor: "rgba(229, 240, 128, .5)",
// //         mixBlendMode: "darken"
// //     }
// // },
// // {
// //     name: "1977",
// //     filters: ["sepia(.5)", "hue-rotate(-30deg)", "saturate(1.4)"],
// //     background: {}
// // }