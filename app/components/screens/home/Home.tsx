import {FC} from "react";
import {useGetNewsQuery} from "../../../store/post/post.api";
import PostItem from "./PostItem";
import {GetNewsQuery} from "../../../store/post/post.query";


const Home: FC = () => {
    const {data, isLoading, error} = useGetNewsQuery(new GetNewsQuery())


    return (
        <div>
            <div>Header
                <div>Язык</div>
                <div>
                    <div>Русский</div>
                    <div>Английский</div>
                </div>
            </div>
            <div>
                <h1>News</h1>
                <div>
                    {isLoading ? 'loading...' : error ? <div>{error.toString()}</div> : (
                        <div>
                            {data?.news.map((post: any) => (
                                <PostItem key={post.id} post={post}/>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home