import React, {Component} from 'react';

export default class FeatureItem extends Component{

    static defaultProps ={

        index : '',
        featureClass: '',
        updateFeature: () => {},
        featureKey: '',
        item: ''
    }

    render(){
        const {item, featureClass, index, updateFeature, featureKey} = this.props;
        return (
            <li key={index} className="feature__item">
                <div 
                    className={featureClass}
                    onClick={e => updateFeature(featureKey, item)}
                >
                    { item.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(item.cost) })
                </div>
            </li>
        );
    }
}