import React from 'react';
import '../assets/styles/components/Language.sass';

const Language = (props) => {
  const { language } = props;
  return(
    <span className="label__language">{language}</span>
  )
}

export default Language;
