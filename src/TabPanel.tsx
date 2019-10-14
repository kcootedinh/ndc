import React from 'react';
import { groupTimeSlots } from './agendaUtils';
import { Talk } from './Talk';
import { IAgendaItem } from './IAgendaItem';

export function TabPanel(props: { day: string, agenda: IAgendaItem[] }) {
    const timeSlots = groupTimeSlots(props.agenda);

    return Object.keys(timeSlots).map(slot => {
        return (
            <div>
                <h3>{slot}</h3>
                {timeSlots[slot].map(item => <Talk key={item.title} item={item}/>)}
            </div>
        );
    });
}

