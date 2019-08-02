import React, {Component}  from 'react';
import FeatureOptions from '../FeatureOptions/FeatureOptions';

export default class FeatureList extends Component {

    static defaultProps ={
        features: '',
        selected: '',
        updateFeature: () => {}
    }

    render(){

        const features = Object.keys(this.props.features)
          .map(key => {

            return (
                <FeatureOptions 
                    key={key}
                    featureKey={key}
                    features={this.props.features}
                    selected={this.props.selected}
                    updateFeature={this.props.updateFeature}
                />
            );

            
          });    

        return (
            <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                { features }
            </section>
        );
    }
}