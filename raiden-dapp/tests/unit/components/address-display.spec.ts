import { mount, Wrapper } from '@vue/test-utils';
import AddressDisplay from '@/components/AddressDisplay.vue';
import Vuetify from 'vuetify';
import Vue from 'vue';
import { TestData } from '../data/mock-data';
import flushPromises from 'flush-promises';
import Filters from '@/filters';
import { addElemWithDataAppToBody } from '../utils/dialog';
import { $identicon } from '../utils/mocks';

Vue.use(Vuetify);
Vue.filter('truncate', Filters.truncate);

describe('AddressDisplay.vue', () => {
  addElemWithDataAppToBody();

  let wrapper: Wrapper<AddressDisplay>;

  beforeAll(() => {
    jest.useFakeTimers();
    wrapper = mount(AddressDisplay, {
      propsData: { address: '0x31aA9D3E2bd38d22CA3Ae9be7aae1D518fe46043' },
      mocks: {
        $route: TestData.mockRoute(
          {},
          {
            title: 'Home'
          }
        ),
        $identicon: $identicon(),
        $t: (msg: string) => msg
      }
    });
  });

  test('copy the address to the clipboard when the user clicks on the address', async () => {
    const copied = jest.spyOn(wrapper.vm.$data, 'copied', 'set');
    document.execCommand = jest.fn();
    wrapper.find('.address__label').trigger('click');
    wrapper.find('.address__label').trigger('click');

    await flushPromises();
    jest.runAllTimers();
    expect(copied).toBeCalledTimes(3);
    expect(document.execCommand).toBeCalledTimes(2);
    expect(document.execCommand).toBeCalledWith('copy');
  });
});