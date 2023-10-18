const User = ({item}) => {
    const {name, occupation, age, image} = item;
    return (
        <div>
            <div>name: {name}</div>
            <div>occupation: {occupation}</div>
            <div>age: {age}</div>
            <div><img src={image} alt={name}/></div>
            <hr/>
        </div>
    );
};

export {User}