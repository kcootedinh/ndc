import moment from 'moment';
import React from 'react';
import { IAgendaItem } from './IAgendaItem';

export function Talk(props: { item: IAgendaItem }) {
    return <>
        <h3>
            {moment(props.item.startTime).format('hh:mm')} -{' '}
            {moment(props.item.endTime).format('hh:mm')}
        </h3>
        <p>
            {props.item.title} - {props.item.speaker}
        </p>
    </>;
}
