import * as React from 'react';

import { Container } from './Logo.styles';

import { CLASS_NAME_PROP_DEFAULT, ClassNameProp } from 'types/props';

const Logo: React.FC<ClassNameProp> = ({
  className = CLASS_NAME_PROP_DEFAULT,
}) => {
  return <Container className={className}>ExpenseTracker</Container>;
};

export default React.memo(Logo);
