import {User} from "./User";

const Users = () => {
    let array = [{
        id: 4,
        name: "Beth Smith",
        status: "Alive", species: "Human", gender: "Female",
        image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
    },
        {
            id: 207,
            name: "Loggins",
            status: "Alive",
            species: "Alien",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/207.jpeg"
        },
        {
            id: 210,
            name: "Lucy",
            status: "Dead",
            species: "Human",
            gender: "Female",
            image: "https://rickandmortyapi.com/api/character/avatar/210.jpeg"
        }];
    return (
        <div>
            {array.map(user=><User key={user.id} item={user}/>)}
        </div>
    );
};

export {Users};