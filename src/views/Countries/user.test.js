
import React from 'react';
import ReactDOM from 'react-dom';
import User from './index';


const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
  useParams: () => ({
    username: 'ggangix'
  }),
}));


describe('User', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<User />, div);
  });

});

