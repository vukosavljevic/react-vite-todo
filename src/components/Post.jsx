import classes from './Post.module.css'

function Post(props) {
    const imeAutora = props.author;
    const descriptionAutora = props.body;
    return (
        <div className={classes.post}>
            <p className={classes.author}>{imeAutora}</p>
            <p className={classes.text}>{descriptionAutora}</p>
        </div>
    )
}
export default Post;