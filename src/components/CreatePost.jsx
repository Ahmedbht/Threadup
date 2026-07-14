import {useState} from 'react';
import axios from 'axios';
import {Send} from 'lucide-react';

function CreatePost({onPostCreated}){
    //state for title and content
    const[title, setTitle] = useState("");
    const[content, setContent] = useState("");
    const[loading, setLoading] = useState(false);

    const handleSubmit= async()=>{
        //condition if title pr content empty then do nothing
        if (!title || !content) return;

        setLoading(true);
        try{
            //send post request to backend fasyapi
            await axios.post("http://localhose:8000/posts",{title, content,});

        //return to zero .. clean iinputs after posting
        setTitle("");
        setContent("");
        //refresh posts
        onPostCreated();
        }catch (error){
            console.error("Error creating post:", error);
        }
        setLoading(false);
    };

    return(
        <div className="create-post">
            <h2>Crete Post</h2>

            {/*title*/}
            <input type="text" placeholder="Enter a title" value={title} onChange={(e) =>setTitle(e.target.vaue)} className="input-field"/>

            {/*content*/}
            <textarea placeholder="whats on your mind frined?" value={content} onChange={(e) => setContent(e.target.value)} className="textarea-field" rows={4}/>

                {/*submit*/}
                <button className="btn-post" onClick={handleSubmit}>
                    <Send size={20} />
                    {loading ? "Posting.." :"Post"}
                </button>
        </div>
    );
}
export default CreatePost;