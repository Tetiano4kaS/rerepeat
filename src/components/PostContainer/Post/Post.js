import css from './Post.css'


const Post = ({item,clickDetails}) => {
    let {id, title} = item;
    return (
        <div className={css.post}>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <button onClick={()=>clickDetails(id)}>Details</button>
            <hr/>
        </div>
    );
};

export {Post};