import{Trash2} from 'lucide-react';
import axios from "axios";

function PostCard({post, onPostDeleted}){
    const formatDate=(dateString)=>{
        const date= new Date(dateString);
        return date.toLocaleDateString("en-US",{
            year:"numeric", month:"short", day:"numeric", hour:"2-digit", minute:"2-digit",
        });
    };

    const handleDelete= async()=>{
        try{
            //delete request to fastapi
            await axios.delete(`http://localhost:8000/posts/${post.id}`);
            //refresh
            onPostDeleted();
        }
        catch(error){
            console.log("Error deleting post:", error);
        }
    };
    return(
        <div className="post-card">
            <div className="post-content">
                <h3 className="post-title">{post.title}</h3>
                <p className="post-body">{post.content}
                </p>
                <span className="post-date">{formatDate(post.created_at)}</span>
            </div>

            <button className="btn-delete" onClick={handleDelete}>
                <Trash2 size={20}/>
                Delete
                </button>
            </div>
    );
}
export default PostCard;