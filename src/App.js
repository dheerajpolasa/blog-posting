import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './config/firebase';
import react, { useState, useEffect } from 'react';

import Navbar from './Navbar';
import UserSummary from './UserSummary';
import CreatePost from './CreatePost';
import BlogPosts from './BlogPosts';

import './App.css';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};


function App(props) {
  const {
    user,
    signOut,
    signInWithGoogle,
  } = props;
  const [showModal, setModal] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);
  console.log(firebaseApp);
  useEffect(() => {
      const db = firebaseApp.firestore();
      db.collection("posts")
      .get()
      .then((snapshot) => {
        const arr = [];
        snapshot.docs.map((doc) => {
          arr.push({
            text: doc.data().text,
          });
        });
        console.log(arr);
        setBlogPosts(arr);
      })
  }, [showModal])
  return (
    <div className="App">
      <Navbar user={user} signOut={signOut} signInWithGoogle={signInWithGoogle} />
      { user && <UserSummary user={user} /> }
      { user && <button className="create-post" onClick={() => setModal(!showModal)}>Create Post</button>}
      { user && showModal && <CreatePost />}
      { user && <BlogPosts posts={blogPosts} /> }
    </div>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
