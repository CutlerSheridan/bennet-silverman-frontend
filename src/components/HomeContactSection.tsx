import React from 'react';
import FlexCenter from '../components/FlexCenter';
import Link from '../components/Link';
import { Button } from 'theme-ui';
import './HomeContactSection.css';

const HomeContactSection = () => {
  return (
    <div className="homeContact-wrapper">
      {/* <p>Reach out to Bennet.</p>
      <p>You know you want to.</p> */}
      <p>Reach out to Bennet</p>
      <FlexCenter mt={[3, 4]} p={[1, 1, 0]}>
        <Link to="/contact">
          <Button
            sx={{
              fontSize: [4, 4],
              variant: 'buttons.outlined',
            }}
          >
            Click here
          </Button>
        </Link>
      </FlexCenter>
    </div>
  );
};

export default HomeContactSection;
