import PostItem from "../post-item/post-item";

function PostList({ post }) {
    return (
        <>
            <div className="row row-cols-3 gap-3 justify-content-center">
                {post && (post.results.map((post) => <PostItem key={post.id} {...post}/>))}
            </div>
        </>
    );
}

export default PostList;