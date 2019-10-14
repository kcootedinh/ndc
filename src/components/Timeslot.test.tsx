import { render } from '@testing-library/react';
import React from 'react';
import TimeSlot from './Timeslot';

it('shows the timeslot name in a header tag', () => {
    const testMessage = "13:00 - 14:00";
    const {queryByText, getByLabelText, getByText} = render(
        <TimeSlot talks={[]} timeSlot={"13:00 - 14:00"}></TimeSlot>,
    );

    // query* functions will return the element or null if it cannot be found
    // get* functions will return the element or throw an error if it cannot be found
    expect(queryByText(testMessage)).toBeDefined();
});
