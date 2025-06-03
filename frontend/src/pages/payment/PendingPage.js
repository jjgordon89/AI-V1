// frontend/src/pages/payment/PendingPage.js
import React from 'react';
import { Result, Button, Spin } from 'antd'; // Spin could be used for a more dynamic pending state
import { Link } from 'react-router-dom';
import LayoutApp from '../../components/LayoutApp'; // Assuming a general app layout

const PendingPage = () => {
  return (
    <LayoutApp> {/* Wrap with a layout if needed */}
      <Result
        icon={<Spin size="large" />} // Using Spin icon for pending status
        title="Payment Pending"
        subTitle="Your payment is currently being processed. We will notify you once it's confirmed."
        extra={[
          <Link to="/" key="home">
            <Button type="primary">Go Home</Button>
          </Link>,
          // user && <Link to={`/dash/${user._id}`} key="dashboard"><Button>Go to Dashboard</Button></Link>,
        ]}
      />
    </LayoutApp>
  );
};

export default PendingPage;
