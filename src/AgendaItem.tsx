import React from 'react';

interface IAgendaItemProps {
    title: string
    speaker: string
    day: string
    startTime: string
    endTime: string
}

const AgendaItem: React.FunctionComponent<IAgendaItemProps> = (props) => {
    return (
        <React.Fragment>
            <h3>{props.title}</h3>
            <em>{props.speaker}</em>
            <p>{props.day} {props.startTime} -> {props.endTime}</p>
        </React.Fragment>
    );
};

export default AgendaItem;
