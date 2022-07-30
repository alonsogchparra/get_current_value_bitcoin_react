import { useEffect, useState } from 'react';
import {
  Button,
  ButtonContainer,
  List,
  Loader,
  Value,
  ValueTitle,
} from './styles';
import './App.css';
import { getBitcoin } from './api';
import logo from './logo.svg';

function App() {
  const [isPressed, setIsPressed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [bitcoinPrice, setBitcoinPrice] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [isLoading]);

  const setAmount = async () => {
    const data = await getBitcoin();

    if (!data) return;

    if (data) {
      const {
        data: { amount },
      } = data;

      setBitcoinPrice([amount, ...bitcoinPrice].slice(0, 2));
    }
  };

  const showResult = isLoading ? (
    <div>
      <Loader />
    </div>
  ) : (
    <List>
      {bitcoinPrice.map((value, i) => (
        <ValueTitle key={i}>
          {i === 0 ? 'Current value: ' : 'Previous value: '}
          <Value style={{ fontWeight: 'lighter' }}>{value}</Value>
        </ValueTitle>
      ))}
    </List>
  );

  return (
    <div className='App'>
      <img src={logo} className='App-logo' alt='logo' />
      <ButtonContainer>
        <Button
          isPressed={isPressed}
          onClick={() => {
            setIsLoading(true);
            if (!isPressed) setIsPressed(true);
            setAmount();
          }}
        >
          {!isPressed
            ? 'Get current bitcoin value'
            : 'Refresh the bitcoin value'}
        </Button>
      </ButtonContainer>

      <div>{showResult}</div>
    </div>
  );
}

export default App;
