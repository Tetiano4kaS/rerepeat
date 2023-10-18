import {User} from "./User";

const Users = () => {
    const users = [{
        name: 'Homer Simpson',
        occupation: 'Chemist and safety inspector\n' +
            'Nuclear power plant operator',
        age: 46,
        image: `https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png`
    },
        {
            name: 'Marjorie Jacqueline Simpson',
            occupation: 'Housewife',
            age: 43,
            image: `https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png`
        },
        {
            name: 'Bartholomew JoJo Simpson',
            occupation: '4th grade student at Springfield Elementary School',
            age: 9,
            image: `https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png`
        },
        {
            name: 'Lisa Marie Simpson',
            occupation: '2nd grade student at Springfield Elementary School',
            age: 7,
            image: `https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png`
        },
        {name: 'Margaret Evelyn Lenny Simpson', age: 3, image: `https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png`}]
    return (
        <div>
            {users.map(user => <User key={user.id} item={user}/>)}
        </div>
    );
};

export {Users};