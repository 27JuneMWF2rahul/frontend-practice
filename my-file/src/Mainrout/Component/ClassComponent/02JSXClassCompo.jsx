import React, { Component } from 'react';

class JSXClassCompo extends Component {
    render() {
        const user = {
            firstName: 'Harper',
            lastName: 'Perez'
          };
        // const headeing = <h2>somthing</h2>
        let something = "my site Title";
        const headeing = <h1>{something}</h1>
        return (
            <>
                {headeing}
                2+2 ={2+2}
                <p>Full name : {user.firstName} {user.lastName}</p>
            </>
        );
    }
}

export default JSXClassCompo;