const Post = ({posts}) => {
    const {id, title, body} = posts;
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <hr/>
        </div>
    );
};

export {Post};