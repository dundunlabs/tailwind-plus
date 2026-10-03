import { expect, test } from '@rstest/core';
import { render, screen } from '@testing-library/react';
import { Button } from '../src';

test('The button should have correct color', async () => {
  render(<Button color='amber'>Demo Button</Button>);
  const button = screen.getByText('Demo Button');
  expect(button).toHaveClass('text-amber-950');
});
