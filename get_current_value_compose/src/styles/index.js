import styled from 'styled-components';

export const ButtonContainer = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Button = styled.button`
  background-color: ${({ isPressed }) => (isPressed ? 'purple' : '#61dafb')};
  border: none;
  padding: 30px 40px;
  font-size: 20px;
  font-weight: bold;
  color: ${({ isPressed }) => (isPressed ? 'white' : 'black')};
`;

export const List = styled.div`
  display: 'flex';
  flex-direction: column;
`;

export const Loader = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid #61dafb;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
`;

export const ValueTitle = styled.div`
  font-weight: bold;
  font-size: 25px;
`;

export const Value = styled.span`
  font-weight: lighter;
  font-size: 25px;
`;
