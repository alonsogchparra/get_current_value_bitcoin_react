import logo from './logo.svg';
import './App.css';
import {
  Button,
  ButtonContainer,
  List,
  Value,
  ValueTitle,
} from './styles';
import { useEffect, useState } from 'react';
import { compose } from './utils';
import { getBitcoin } from '../src/api';

function App() {
  const [isPressed, setIsPressed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [bitcoinPrice, setBitcoinPrice] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [isLoading]);

  const storeAmount = ({ data }) => {
    if (!data) return;

    const { amount } = data;
    setBitcoinPrice([amount, ...bitcoinPrice].slice(0, 2));
  };

  const bitcoinCall = compose(storeAmount, getBitcoin);

  const showResult = isLoading ? (
    <div>
      <div class='loader'>Loading...</div>
    </div>
  ) : (
    <List>
      {bitcoinPrice.map((value, i) => (
        <ValueTitle key={i}>
          {i === 0 ? 'Current value: ' : 'Previous value: '}
          <Value>{value}</Value>
        </ValueTitle>
      ))}
    </List>
  );

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <ButtonContainer>
          <Button
            isPressed={isPressed}
            onClick={() => {
              setIsLoading(true);
              if (!isPressed) setIsPressed(true);
              bitcoinCall();
            }}
          >
            {!isPressed
              ? 'Get current bitcoin value'
              : 'Refresh the bitcoin value'}
          </Button>
        </ButtonContainer>
        <div>{showResult}</div>
      </header>
    </div>
  );
}

export default App;
