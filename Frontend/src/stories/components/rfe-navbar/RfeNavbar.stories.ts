import { Story, Meta } from '@storybook/angular/types-6-0';
import { RfeNavbarComponent } from '../../../app/components/rfe-navbar/rfe-navbar.component';

export default {
  title: 'Components/RfeNavbar',
  component: RfeNavbarComponent
} as Meta;

const Template: Story<RfeNavbarComponent> = (args: RfeNavbarComponent) => ({
  props: args
});

export const Primary = Template.bind({});
