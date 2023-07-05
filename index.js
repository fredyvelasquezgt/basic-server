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
           <h1>My number is: {2*8.4}</h1>
        </div>
        )
    }
}

ReactDOM.render(<JSXDemo/>, document.getElementById('root'))