// frontend/src/pages/payment/FailurePage.js
import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
import LayoutApp from '../../components/LayoutApp'; // Assuming a general app layout

const FailurePage = () => {
  return (
    <LayoutApp> {/* Wrap with a layout if needed */}
      <Result
        status="error"
        title="Payment Failed"
        subTitle="Unfortunately, we couldn't process your payment. Please try again or use a different payment method."
        extra={[
          <Link to="/choose-donation" key="tryAgain">
            <Button type="primary">Try Again</Button>
          </Link>,
          <Link to="/contact" key="contactSupport"> {/* Assuming /contact is a valid route */}
            <Button>Contact Support</Button>
          </Link>,
        ]}
      />
    </LayoutApp>
  );
};

export default FailurePage;
