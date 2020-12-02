import React, { Component } from 'react';
import { FormattedMessage} from 'react-intl';
import {connect} from "react-redux";


class About extends Component {
    
    constructor(props) {
        super(props);
       console.log(this.props)
      
    }
  render() {
    return (
      <div>
             <p>
                        <FormattedMessage
                            id="lblPaymentMethod"
                            values={ this.props.locale }
                        />
                        <br />
                        <FormattedMessage id="lblAmountinAED"  />
                    </p>
      </div>
      
    );
  }
}

const MapStateToProps = state => {
    return {
        Target : state.Target , 
        locale : state.locale
    };
};


export default  connect(MapStateToProps) (About);