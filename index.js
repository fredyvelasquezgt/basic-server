// class Hello extends React.Component {
//     render() {
//         return (
            // <div>
            // <h1>Hello there!</h1>
            // <h1>Hello there!</h1>
            // <h1>Hello there!</h1>
            // </div>
//         )
//     }
// }


// function Hello() {
//     return (
//         <div>
//         <h1>Hello there!</h1>
//         <h1>Hello there!</h1>
//         <h1>Hello there!</h1>
//         </div>
//     )
// }

// ReactDOM.render(<Hello/>, document.getElementById('root'))

class JSXDemo extends React.Component {
    render() {
        return (<div>
            <h1>Wrapped</h1>
            <img src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*" />

        </div>
        )
    }
}

ReactDOM.render(<JSXDemo/>, document.getElementById('root'))