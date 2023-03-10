import PropTypes from 'prop-types'

import styles from '../styles/home.module.css'
import Comment from '../components/Comment'
import Loader from '../components/Loader';
import {useState,useEffect} from 'react'
import {getPosts} from '../api'
//{posts}
 export const Home=()=>{
    const [posts,setPosts]=useState([]);
     const[loading,setLoading] = useState(true);
     
    useEffect(()=>{

        const fetchPosts=async()=>{
            const response = await getPosts();
            console.log('response',response);
            
            if(response.success){
                setPosts(response.data.posts)
            }
             setLoading(false);
        };
        fetchPosts();
    },[]);

    if(loading){
        return <Loader/>
    }
    
    return(
        <div className={styles.postList}>
            {
                posts.map(post=>
                    
                    <div className={styles.postWrapper} key={`post-${post._id}`}>
                    <div className={styles.postHeader}>
                        <div className={styles.postAvatar}>
                            <img
                                src="https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                                alt="user-pic"
                            />
                            <div>
                                <span className={styles.postAuthor}>{post.user.name}</span>
                                <span className={styles.postItem}>a minute ago</span>
                            </div>
                        </div>
                        <div className={styles.postContent}>{post.content}</div>
                        <div className={styles.postActions}>
                            <div className={styles.postLike}>
                                <img
                                    src="https://as2.ftcdn.net/v2/jpg/05/54/76/53/1000_F_554765365_GV87lL7ynZSvGDQt26BBsJ89hfrYfDzU.jpg"
                                    alt="post-like"
                                />
                                <span>5</span>
                            </div>
                            <div className={styles.postCommentsIcon}>
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/6144/6144284.png"
                                    alt="comments-icon"
                                />
                                <span>2</span>
                            </div>
                        </div>
                        <div className={styles.postCommentBox}>
                            <input placeholder="Start typing a comment..."/>
                        </div>
                        <div className={styles.postCommentsList}>
                            {/* <div className={styles.postCommentItem}>
                                <div className={styles.postCommentHeader}>
                                    <span className={styles.postCommentAuthor}>bill</span>
                                    <span className={styles.postCommentTime}>a min ago</span>
                                    <span className={styles.postCommentLikes}>22</span>
                                </div>
                                <div className={styles.postCommentContent}>Random comment</div>
                            </div> */}

                            {
                               post.comments.map((comment) =>(
                                <Comment comment={comment}/>
                               )) 
                            }
                        </div>
                    </div>
                </div>
                   
                )
            
            }
        </div>
    )
}

Home.propTypes={
    posts:PropTypes.array.isRequired
}

