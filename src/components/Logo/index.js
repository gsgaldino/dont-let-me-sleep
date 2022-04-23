import React from 'react';
import PropTypes from 'prop-types';

import logoLight from '../../assets/logo-light.svg';
import logoDark from '../../assets/logo-dark.svg';

function Logo({ variant }) {
  return <img src={variant === 'dark' ? logoDark : logoLight} alt="Palavra sleep com o desenho de uma pequena lua por cima da última letra." />;
}

Logo.propTypes = {
  variant: PropTypes.oneOf(['dark', 'light']),
};

Logo.defaultProps = {
  variant: 'light',
};

export default Logo;
