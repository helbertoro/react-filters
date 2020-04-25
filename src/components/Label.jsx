import React from 'react';
import '../assets/styles/components/Label.sass';

const Label = (props) => {
  const {type} = props;
  if (type === 'new') {
    return(
     <span className="label label__new">NEW!</span>
    )
  }

  if (type === 'featured') {
    return(
     <span className="label label__featured">FEATURED</span>
    )
  }
}

export default Label;
