import React, { useState } from 'react';
import firebase from 'firebase';

import './CreatePost.css';

const textArea = document.querySelector('textarea');
const textRowCount = textArea ? textArea.value.split("\n").length : 0;
const rows = textRowCount + 1;

function CreatePost(props) {
    const [content, setContent] = useState("");
    const [ , forceUpdate ] = useState();
    const createPost = () => {
        const db = firebase.firestore();
        db.collection("posts").add({
            text: content,
        }); 
        setContent('');
        forceUpdate();
    }
    return (
        <div className="new-post">
            <textarea rows={rows} onChange={(e) => setContent(e.target.value) } value={content}/>
            <button className="create" onClick={createPost}>Post</button>
        </div>
    )
}

export default CreatePost
