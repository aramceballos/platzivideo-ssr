import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Register from '../../containers/Register';
import ProviderMock from '../../__mocks__/ProviderMock';

describe('<Register />', () => {
  test('Register form', () => {
    const preventDefault = jest.fn();
    const register = mount(
      <ProviderMock>
        <Register />
      </ProviderMock>,
    );

    register.find('form').simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalledTimes(1);
    register.unmount();
  });

  test('Register snapshot', () => {
    const register = create(
      <ProviderMock>
        <Register />
      </ProviderMock>,
    );
    expect(register.toJSON()).toMatchSnapshot();
  });
});
