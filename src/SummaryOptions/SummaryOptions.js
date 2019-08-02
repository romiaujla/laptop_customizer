import React, {Component} from 'react';

export default class SummaryOptions extends Component {

    static defaultProps = {
        summaryKey:'',
        selected: ''
    }

    render(){

        const {summaryKey, selected} = this.props;

        return (
            <div className="summary__option" key={summaryKey}>
                <div className="summary__option__label">{summaryKey}  </div>
                <div className="summary__option__value">{selected[summaryKey].name}</div>
                <div className="summary__option__cost">
                { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(selected[summaryKey].cost) }
                </div>
            </div>
        );
    }

}