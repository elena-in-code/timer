import React from 'react';
import PropTypes from 'prop-types';
import './Title.scss';

const roleLevel = {
  primary: 'h1',
  secondary: 'h2',
  tertiary: 'h3'
}

const Title = props => {
 const TitleTag = roleLevel[props.role];
 return (<TitleTag className="title">{props.titleContent}</TitleTag>)
};

Title.propTypes = {
  role: PropTypes.string,
  titleContent: PropTypes.string
};

Title.defaultProps = {
  role: 'primary',
  titleContent: 'This is a Title'
};

export default Title;
