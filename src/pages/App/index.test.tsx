import App from './index';
import React from 'react';
import { cleanup, render } from '@testing-library/react';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders without error', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toMatchSnapshot();
});

test('renders without crashing', () => {
  const { asFragment } = render(<App />);
  expect(asFragment).toMatchSnapshot();
});

test('verify class name', () => {
  const { container } = render(<App />);
  expect(container.firstChild).toHaveClass('App');
});

test('verify learn react exist', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('learnReact')).toHaveTextContent('Learn React');
});

test('verify href', () => {
  const { getByText } = render(<App />);
  expect(getByText('Learn React').closest('a')).toHaveAttribute('href', 'https://reactjs.org');
});