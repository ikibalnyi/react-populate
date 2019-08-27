import * as React from 'react';
import populate from './';

const Component = ({ callback, ...props }: any) => {
  callback(props);
  return null;
};

describe('populate', () => {
  it('', () => {
    const component = populate((() => {}) as any)(Component);
    expect(component).toBeTruthy()
  })
});
