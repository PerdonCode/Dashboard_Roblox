export interface Game {
    id: number;
    name: string;
    players: number;
    gameLogo: string;
  }
  export interface Comment {
    id: number;
    gameName: string;
    playerLogo: string;
    playerName: string;
    text: string;
  }
  
  export interface DashboardProps {
    comments: Comment[];
    totalPlayers: number;
    topGames: Game[];
  }
  
   
  