import React , {Component} from 'react';
import SummaryOptions from '../SummaryOptions/SummaryOptions';
import SummaryTotal from '../SummaryTotal/SummaryTotal'

export default class MainSummary extends Component {

    static defaultProps = {
        selected: '',
    }

    

    render(){

        const {selected} = this.props;

        const summary = Object.keys(selected)
          .map((key, index) => {

           return  (
                <SummaryOptions
                    key={index}
                    summaryKey={key}
                    selected={selected}
                />
            );
            
          });

           

        return (
            <section className="main__summary">
                <h3>NEW GREENLEAF 2018</h3>
                {summary}
                <SummaryTotal 
                    selected={selected}
                />                
            </section>
        );
    }
}