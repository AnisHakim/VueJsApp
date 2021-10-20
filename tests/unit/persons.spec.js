import { shallowMount } from '@vue/test-utils'
import CardPersonsList from '@/components/CardPersonsList.vue'

test('calls deletePerson when the delete button is clicked', () => {

   
    const wrapper = shallowMount(CardPersonsList, {
      propsData: { user: { firstName: 'Amanda' } }
    });
    const deletePerson = jest.fn();
  wrapper.setMethods({ deletePerson: deletePerson })
  wrapper.find('b-button').trigger('click')
  expect(deletePerson).toHaveBeenCalled();

})
