import {FC} from "react";
import {IPost} from "../../../store/post/post.types";


const PostItem: FC<{post: IPost}> = ({post}) => {
    return (
        <div>
            <div>
                <img src={post.image_small} alt={post.title}/>
            </div>
            <div>{post.date}</div>
            <p>{post.title}</p>
        </div>
    )
}

export default PostItem