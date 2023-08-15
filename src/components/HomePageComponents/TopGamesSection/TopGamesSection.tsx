// TopGamesSection.tsx
import React from "react";
import styles from "./TopGamesSection.module.css";

interface Game {
  id: number;
  name: string;
  players: number;
  gameLogo: string;
}

interface TopGamesSectionProps {
  topGames: Game[];
}

const GameCard: React.FC<{ game: Game; rank: number }> = ({ game, rank }) => {
  return (
    <div className={styles.gameCard}>
      <div className={styles.rank}>{rank}.</div>
      <img
        src={"arrowUp.png"}
        alt={`${game.gameLogo}'s logo`}
        className={styles.positionLogo}
      />
      <div className={styles.gameInfo}>
        <img
          src={game.gameLogo}
          alt={`${game.gameLogo}'s logo`}
          className={styles.gameLogo}
        />

        <div className={styles.wrapper}>
          <div className={styles.gameName}>{game.name}</div>
          <div className={styles.gamePlayers}>{game.players} players</div>
        </div>
      </div>
    </div>
  );
};

const TopGamesSection: React.FC<TopGamesSectionProps> = ({ topGames }) => {
  // Sorteer de topGames op basis van het aantal spelers in aflopende volgorde
  const sortedGames = topGames.slice().sort((a, b) => b.players - a.players);

  return (
    <div className={styles.topGamesSection}>
      <h2 className={styles.sectionTitle}>Top Current Games</h2>
      <div className={styles.gameList}>
        {sortedGames.map((game, index) => (
          <GameCard key={game.id} game={game} rank={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default TopGamesSection;
