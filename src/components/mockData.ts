// mockData.ts
import { DashboardProps } from './types';

export const mockDashboardProps: DashboardProps = {
    comments: [
        {
          id: 1,
          gameName: 'Game A',
          playerLogo: 'testlogo.png',
          playerName: 'Karel',
          text: 'This game is amazing!',
        },
        {
          id: 2,
          gameName: 'Game B',
          playerLogo: 'testlogo.png',
          playerName: 'Kees',
          text: 'I reached level 10 today!',
        },
        {
          id: 3,
          gameName: 'Game C',
          playerLogo: 'testlogo.png',
          playerName: 'Gerrit',
          text: 'Can anyone help me with level 5?',
        },
      ],
  totalPlayers: 1368,
  topGames: [
    { id: 1, name: 'Game A', players: 123, gameLogo: 'gameTestLogo.png' },
    { id: 2, name: 'Game B', players: 456, gameLogo: 'gameTestLogo.png'},
    { id: 3, name: 'Game C', players: 789, gameLogo: 'gameTestLogo.png' }
  ],
};

