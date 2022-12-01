import { render, screen } from '@testing-library/react';
import App from './App';
// 테스트 파일로 인식

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
