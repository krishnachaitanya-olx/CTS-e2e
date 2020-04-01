import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import React, { FC } from 'react';

export default {
  title: 'Test',
  component: Button,
};

export const Text: FC = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji: FC = () => (
  <Button onClick={action('clicked')}>
    <span role='img' aria-label='so cool'>
      😀 😎
    </span>
  </Button>
);
