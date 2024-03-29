import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { IAgendaItem, groupAgendaDays } from '../agendaUtils';
import Day from '../components/Day';
import TabControl from '../components/TabControl';

interface IAgendaState {
    agenda?: { [key: string]: IAgendaItem[] };
    loading: boolean;
}

class Agenda extends React.Component<{}, IAgendaState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            agenda: undefined,
            loading: true
        };
    }

    async componentDidMount() {
        const res = await fetch('/agenda.json');
        const rawAgenda = await res.json();

        const agenda = groupAgendaDays(rawAgenda);

        this.setState({ agenda, loading: false });
    }

    render() {
        const agenda = this.state.agenda;

        if (this.state.loading || !agenda) {
            return <div>Loading...</div>;
        }

        const days = Object.keys(agenda);

        return (
            <TabControl tabNames={days}>
                <Switch>
                    {days.map(key => (
                        <Route key={key} path={`/${key}`}>
                            <Day key={key} day={key} agenda={agenda[key]}/>
                        </Route>
                    ))}
                </Switch>
            </TabControl>
        );
    }
}

export default Agenda;
