import { shallowMount } from '@vue/test-utils';
import List from '@/components/List';

describe(List.vue, () => {
  it('renders li for each item in props.items', () => {
    const items = ['1', '2'];
    const wrapper = shallowMount(List, { propsData: { items } });
    expect(wrapper.findAll('li')).toHaveLength(items.length);
  });

  it('matches snapshot', () => {
    const items = ['item1', 'item2'];
    const wrapper = shallowMount(List, { propsData: { items } });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
