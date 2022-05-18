import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ApiModuleModule } from '../../../../../app/api/api-module.module';
import { A1_2015Component } from '../../../../../app/components/tasks/math/2015/a1/a1_2015.component';
import { TaskComponentMode } from '../../../../../app/components/tasks/task-component-base.directive';


export default {
  title: 'Components/Tasks/Math/2015/A1',
  component: A1_2015Component,
  decorators: [
    moduleMetadata({
      imports: [ApiModuleModule]
    })
  ]
} as Meta;

const Template: Story<A1_2015Component> = (args: A1_2015Component) => ({
  props: args
});

export const CreateMode = Template.bind({mode: TaskComponentMode.Create});
CreateMode.args = {
  mode: TaskComponentMode.Create
}

export const EditMode = Template.bind({mode: TaskComponentMode.Edit});
EditMode.args = {
  mode: TaskComponentMode.Edit
}

export const PlayMode = Template.bind({mode: TaskComponentMode.Play});
PlayMode.args = {
  mode: TaskComponentMode.Play
}
