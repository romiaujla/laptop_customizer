import React , {Component} from 'react';
import FeatureItem from '../FeatureItem/FeatureItem';

export default class FeatureOptions extends Component {


    static defaultProps = {
        featureKey: '',
        features: '',
        selected: '',
        updateFeature: () => {}
    }

    render(){
        
        const {featureKey, selected, features, updateFeature} = this.props;

        const options = features[featureKey].map((item, index) => {

            const selectedClass = item.name === selected[featureKey].name ? 'feature__selected' : '';
            const featureClass = 'feature__option ' + selectedClass;
            
            return (
                <FeatureItem
                    key={index}
                    index={index}
                    featureClass={featureClass}
                    updateFeature={updateFeature}
                    featureKey={featureKey}
                    item={item}
                />
            );

      });

      return <div className="feature" key={featureKey}>
        <div className="feature__name">{featureKey}</div>
        <ul className="feature__list">
          { options }
        </ul>
      </div>
    }

}