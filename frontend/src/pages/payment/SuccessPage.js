// frontend/src/pages/payment/SuccessPage.js
import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
import LayoutApp from '../../components/LayoutApp'; // Assuming a general app layout

const SuccessPage = () => {
  return (
    <LayoutApp> {/* Wrap with a layout if needed, or use a simpler div */}
      <Result
        status="success"
        title="Payment Successful!"
        subTitle="Thank you for your generous donation. Your support is greatly appreciated."
        extra={[
          <Link to="/" key="home">
            <Button type="primary">Go Home</Button>
          </Link>,
          // Optionally, add a link to the user's dashboard if available
          // For example, if user info is in context:
          // user && <Link to={`/dash/${user._id}`} key="dashboard"><Button>Go to Dashboard</Button></Link>,
        ]}
      />
    </LayoutApp>
  );
};

export default SuccessPage;
