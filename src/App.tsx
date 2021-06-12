import { VFC } from 'react';
import './App.css';
import { Card, Image } from 'semantic-ui-react';

type Screenshot = {
  id: number;
  name: string;
  url: string;
  path: string;
};

const App: VFC = () => {
  const screenshots: Screenshot[] = [
    {
      id: 1,
      name: 'Screenshot1',
      url: 'http://example.com/image1.png',
      path: './assets/screenshot/image1.png',
    },
    {
      id: 2,
      name: 'Screenshot2',
      url: 'http://example.com/imagew.png',
      path: './assets/screenshot/image1.png',
    },
  ];

  return (
    <div className="App">
      {screenshots.map((screenshot) => (
        <Card>
          <Image src={screenshot.path} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{screenshot.name}</Card.Header>
            <Card.Description>{screenshot.url}</Card.Description>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
};

export default App;
