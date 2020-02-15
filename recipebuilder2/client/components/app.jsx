import React from 'react';

export default class App extends React.Component {
    componentDidMount(){
        fetch('/api/test.php', {method: 'GET', headers: {'Content-Type' : 'application/json'}})
            .then( res => res.text())
            .then( res => console.log(res));
    }
    render(){
        return (
            <div>
                test
                hello :D
            </div>
        )
    }
}