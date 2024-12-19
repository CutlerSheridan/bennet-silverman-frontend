import React from 'react';
import FlexCenter from '../components/FlexCenter';
import Link from '../components/Link';
import { Button } from 'theme-ui';
import './HomeContactSection.css';

const HomeContactSection = () => {
  return (
    <div className="homeContact-wrapper">
      <FlexCenter mt={[3, 4]} p={[1, 1, 0]}>
        <Link to="/contact">
          <Button
            sx={{
              fontSize: [3, 4],
              variant: 'buttons.outlined',
            }}
          >
            Contact
          </Button>
        </Link>
      </FlexCenter>
    </div>
  );
};

export default HomeContactSection;
