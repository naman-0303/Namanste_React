// let heading = React.createElement(
//     "h1",
//     {id:"h1-heading", xyz:"abc"},
//     "Hello World from React!");


// this is how we create nested elements 


// let parent = React.createElement(
//     "div",
//     {id:"parent-container"},
//     React.createElement(
//         "div",
//         {id:"child-container"},
//         React.createElement(
//             "h1",
//             {},
//             "I am a h1 tag.."
//         )
//     )
// )


let parent2 = React.createElement(
    "div",
    {id:"parent-container"},
    React.createElement(
        "div",{id:"child-container"},[
            React.createElement("h1",{},"I am a h1 tag"),
            React.createElement("h2",{},"i am a h2 tag")
        ]) 
)

let rootNew = ReactDOM.createRoot(document.getElementById("root"));

rootNew.render(parent2);