import {useState, useEffect} from 'react';
import axios from 'axios';
import PostCard from './PostCard';
import CreatePost from './CreatePost';

function Feed(){
    const[posts, setPosts] = useState([]);
    const[loading, setLoading] = useState(false);

    //fetch posts from backend
    const fetchPosts= async()=>{
        try{
            const response= await axios.get("http://localhost:8000/posts");
            //show newest posts first
            setPosts(response.data.reverse());
            setLoading(false);

        }
        catch(error){
            console.log("error fetching posts:", error);
            setLoading(false);
}};

useEffect(()=>{
    fetchPosts();
},[]);

if (loading){
    return <p className= "loading"> Loading posts..</p>;
}


    return(
        <div className="feed">
            {/*form*/}
            <CreatePost onPostCreated={fetchPosts}/>
            {/*post list*/}
            {posts.length === 0 ?(
                <p className="no-posts">No posts yet. Be the first to create one!</p>
            ):(
                posts.map((post)=>(
                    <PostCard key={post.id} post={post} onPostDeleted={fetchPosts}/>
                ))
            )}
        </div>
    );
}
export default Feed;