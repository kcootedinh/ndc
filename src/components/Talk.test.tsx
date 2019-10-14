import '@testing-library/jest-dom/extend-expect'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Talk from './Talk';

it('shows the talk with label Title - Speaker', () => {
    const testMessage = 'Impostor Syndrome - Paula'
    const {queryByText, getByLabelText, getByText} = render(
        <Talk speaker={"Paula"} title={"Impostor Syndrome"}></Talk>,
    );

    // query* functions will return the element or null if it cannot be found
    // get* functions will return the element or throw an error if it cannot be found
    expect(queryByText(testMessage)).toBeDefined();
});
