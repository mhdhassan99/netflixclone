import React from 'react';
import { render } from '@testing-library/react';
import { Profiles } from '../../components';

describe('<Profiles />', () => {
  it('renders the <Profiles /> with populated data', () => {
      
    const { container, getByText, getByTestId } = render (
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={() => {}}>
            <Profiles.Picture 
                src="/images/john.png" 
                data-testid="profile-picture" 
            />
            <Profiles.Name>John</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    );

    expect(getByText("Who's watching?"));
    expect(getByTestId('profile-picture')).toBeTruthy();
    expect(getByText("John"));
    expect(container.firstChild).toMatchSnapshot();
  });

});