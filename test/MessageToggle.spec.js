import { shallowMount } from '@vue/test-utils';
import MessageToggle from '@/components/MessageToggle';
import Message from '@/components/Message';

describe('MessageToggle.vue', () => {
  it('toggles msg passed To Message on button click', () => {
    const wrapper = shallowMount(MessageToggle);
    const button = wrapper.find('#toggle-message');
    button.trigger('click');
    const MessageComponent = wrapper.find(Message);
    expect(MessageComponent.props()).toEqual({ msg: 'message' });
    button.trigger('click');
    expect(MessageComponent.props()).toEqual({ msg: 'toggled message' });
  });
});
