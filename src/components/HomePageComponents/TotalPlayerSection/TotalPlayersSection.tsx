
import ChartComponent from "./ChartComponent";
import styles from "./TotalPlayersSection.module.css";


interface TotalPlayersSectionProps {
  totalPlayers: number;
}

const TotalPlayersSection: React.FC<TotalPlayersSectionProps> = ({
  totalPlayers,
}) => {
 
  return (
    <div className={styles.totalPlayersSection}>
      <h2>Total Current Players</h2>
      <p className={styles.totalPlayers}>{totalPlayers}</p>

      <div className={styles.recordButton}>
        <button>Record</button>
      </div>
    <ChartComponent/>
    </div>
  );
};

export default TotalPlayersSection;
