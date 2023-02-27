import React, { useState } from "react";

const Home = () => {

const [name, setName] = useState('Joke');
const [age, setAge] = useState(30);

const clicker = () => {
    setName('Sammy');
    setAge(28);
}
    return (
        <div>
            <h3>my name is {name} and I'm {age} years old</h3>
            <div>
                <button onClick={clicker}>Click to Change Name</button>
               
            </div>
        </div>
    )

}

export default Home;