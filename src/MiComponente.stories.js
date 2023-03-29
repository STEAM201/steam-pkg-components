import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from '../stories/atoms';

storiesOf('MiComponente', module)
  .add('predeterminado', () => <Text />)
  .add('con algunas propiedades', () => (
    <Text text='hola mundo' />
));
