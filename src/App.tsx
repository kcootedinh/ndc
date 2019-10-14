import React, { Component } from 'react';
import { mapAgenda } from './agendaUtils';
import './App.css';
import { IAgendaItem } from './IAgendaItem';
import { TabPanel } from './TabPanel';

/*
 Add header
 group by days
 Add state and fetch from folder
 Add some lifecycle hooks
 Styling
 Mebbe tabs

 */

interface IAppState {
    agenda?: { [key: string]: IAgendaItem[] };
    loading: boolean;
}

const TabHeader: React.FC<{ day: string }> = (props) => {
    return <div></div>;
};

class App extends Component<{}, IAppState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            agenda: undefined,
            loading: true
        };
    }

    async componentDidMount() {
        const res: Response = await fetch('/agenda.json');
        const rawAgenda = await res.json();

        const agenda = mapAgenda(rawAgenda);

        this.setState({ agenda, loading: false });
    }

    render() {
        const agenda = this.state.agenda;

        if (this.state.loading || !agenda) {
            return (
                <div className="App">
                    <header className="App-header">NDC Sydney Agenda</header>
                    <div>Loading...</div>
                </div>
            );
        }

        return (
            <div className="App">
                <header className="App-header">NDC Sydney Agenda</header>
                {Object.keys(agenda).map(day => {
                    return <TabHeader day={day}/>;
                })}

                {Object.keys(agenda).map(day => {
                    return <TabPanel key={day} agenda={agenda[day]}/>;
                })}
            </div>
        );
    }
}

export default App;
