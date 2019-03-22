import React from 'react';




            class OurCoolReactComponent extends React.Component {
              handleClick() {
                console.log('Wow, js is cool!');
              }

              render() {
                return (
                  <button onClick={() => this.handleClick()}>
                    Click me!
                  </button>
                );
              }
            }







export default OurCoolReactComponent;
