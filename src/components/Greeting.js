import React from 'React';

const formatUserName = (user) => {
    return `${user.firstName} ${user.lastName}`;
}
  
const h1Style = {
    backgroundColor: 'red',
};
  
const getGreeting = (user) => {
    if (user) {
        return <h1 style={{ backgroundColor: '#00FF00' }}>Hola, {formatUserName(user)}!</h1>;
    }
    return <h1>Hola, invitado.</h1>;
}

const Greeting = (props) => getGreeting(props);

export default Greeting;