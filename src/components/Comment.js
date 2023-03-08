import PropTypes from 'prop-types';
import styles from '../styles/home.module.css';

const Comment=({comment})=>{
    return(
         <div className={styles.postCommentItem}>
            <div className={styles.postCommentHeader}>
                <span className={styles.postCommentAuthor}>bill</span>
                 <span className={styles.postCommentTime}>a min ago</span>
                  <span className={styles.postCommentLikes}>22</span>
            </div>
             <div className={styles.postCommentContent}>{comment.content}</div>
        </div> 
    );
};
Comment.propTypes={
    comment: PropTypes.object.isRequired
};
export default Comment;