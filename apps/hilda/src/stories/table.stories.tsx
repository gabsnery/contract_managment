import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UITable } from '../ui-layouts/Table/index'

export default {
  title: 'Example/UITable',
  component: UITable
} as ComponentMeta<typeof UITable>;

const Template: ComponentStory<typeof UITable> = (args) => <UITable {...args} />;
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  columns: [
    {
      internalName: 'nome',
      label: 'Nome'
    },
    {
      internalName: 'idade',
      label: 'Idade'
    }
  ],
  data: [
    { nome: 'Gabi',idade:'20' },
    { nome: 'Gabi',idade:'23' },
    { nome: 'Gabi',idade:'27' }
  ]
};