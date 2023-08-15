import React from "react";
import styles from "./App.module.css";
import CommentsSection from "./components/HomePageComponents/CommentSection/CommentsSection";
import TotalPlayersSection from "./components/HomePageComponents/TotalPlayerSection/TotalPlayersSection";
import TopGamesSection from "./components/HomePageComponents/TopGamesSection/TopGamesSection";
import { DashboardProps } from "./components/types";

const App: React.FC<DashboardProps> = ({
  comments,
  totalPlayers,
  topGames,
}) => {
  return (
    <div className={styles.dashboardContainer}>
      <CommentsSection comments={comments} />
      <TotalPlayersSection totalPlayers={totalPlayers} />
      <TopGamesSection topGames={topGames} />
    </div>
  );
};

export default App;
