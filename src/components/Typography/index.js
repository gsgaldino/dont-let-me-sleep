import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

function Typography({
  as, children, variant, color,
}) {
  return (
    <S.Container as={as} className={variant} color={color}>
      {children}
    </S.Container>
  );
}

Typography.propTypes = {
  children: PropTypes.string,
  as: PropTypes.string,
  variant: PropTypes.oneOf(['body-default', 'h2-default', 'h2-bold']),
  color: PropTypes.oneOf(['light', 'dark']),
};

Typography.defaultProps = {
  children: '',
  as: 'p',
  variant: 'body-default',
  color: 'light',
};

export default Typography;
