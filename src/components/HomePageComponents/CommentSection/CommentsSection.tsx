import React from 'react';
import styles from './CommentsSection.module.css';

interface Comment {
  id: number;
  gameName: string;
  playerLogo: string;
  playerName: string;
  text: string;
}

interface CommentsSectionProps {
  comments: Comment[];
}


//commentCard Component
const CommentCard: React.FC<Comment> = ({ gameName, playerLogo, playerName, text }) => {
  return (
    <div className={styles.commentCard}>
      <div className={styles.commentHeader}>
        <img src={playerLogo} alt={`${playerName}'s logo`} className={styles.playerLogo} />
        <span className={styles.playerName}>{playerName}</span>
      </div>
      <div className={styles.commentContent}>
        <p className={styles.commentText}>{text}</p>
        <p className={styles.gameName}>Reactie op: {gameName}</p>
      </div>
    </div>
  );
};


//CommentsSection component
const CommentsSection: React.FC<CommentsSectionProps> = ({ comments }) => {
  return (
    <div className={styles.commentsSection}>
      <h2 className={styles.sectionTitle}>Comments</h2>
      <div className={styles.commentList}>
        {comments.map((comment) => (
          <CommentCard key={comment.id} {...comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
