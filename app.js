// step-1
const container = document.getElementById('react-container');
ReactDOM.render("Hello! Welcome to React", container);

// step-2
// Functional component
const Container = () => {
    return React.createElement('div', null, 'Hey Kalvians! Welcome to React Learning',
        React.createElement('div', null, `Let's rock and roll`)
    );
};

// Render the Container
ReactDOM.render(React.createElement(Container), container);

// step-3
class ReactContainer extends React.Component {
    render() {
        return React.createElement('div', null, 'Hey Kalvians',
            React.createElement('div', null, `Let's rock and roll with classes`)
        );
    }
}

// Render the ReactContainer
ReactDOM.render(React.createElement(ReactContainer), container);

// step-4
class ReactContainerWithJSX extends React.Component {
    // Render method with JSX
    render() {
        return (
            <div>
                <div>Hello! Welcome to Kalvium</div>
                <div>Let's rock and roll - This is babel</div>
            </div>
        );
    }
}

// Render the React component inside the container
ReactDOM.render(<ReactContainerWithJSX/>, container);

