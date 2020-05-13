import React from 'react'

import { Typography } from '../../index'
import { TYPOGRAPHY_PROP_TYPES } from '../../../assets/index'

class H2 extends React.Component {
  static displayName = 'NuH2'

  static propTypes = TYPOGRAPHY_PROP_TYPES

  render() {
    return (
      <Typography {...this.props} type='h2'>
        {this.props.children}
      </Typography>
    )
  }
}

export default H2
