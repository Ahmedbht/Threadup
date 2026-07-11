import {useState} from 'react';
import axios from 'axios';
import {Send} from 'lucide-react';

functionCreatePost({onPostCreated}){
    //state for title and content
    const[title, setTitle] = useState('');
    const[content, setContent] = useState('');
    cost[loading, setLoading] = useState(false);

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
    }
}