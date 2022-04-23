import React from 'react';
import { Button as Container } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function Button({
  children, onClick, variant, ...rest
}) {
  return (
    <Container onClick={onClick} variant={variant} colorScheme="brand" {...rest}>
      {children}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['solid', 'outline', 'ghost', 'link']),
};

Button.defaultProps = {
  children: '',
  onClick: () => {},
  variant: 'solid',
};

export default Button;
