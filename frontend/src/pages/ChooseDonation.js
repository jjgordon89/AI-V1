import React, { useState } from 'react'; // Added useState
import { Button, Input, Card, Row, Col, message } from 'antd'; // Added Input, Card, Row, Col, message
import { useHistory } from 'react-router-dom'; // Added useHistory

import LayoutDash from "../components/LayoutDash";
import { useContextInfo } from '../hooks/context.js'

const PreDonate = () => {
  const { user } = useContextInfo();
  const [customAmount, setCustomAmount] = useState('');
  const history = useHistory();

  const handleCustomDonate = () => {
    const amount = parseFloat(customAmount);
    if (isNaN(amount) || amount <= 0) {
      message.error('Please enter a valid positive amount.'); // Using Ant Design message
      return;
    }
    console.log(`Processing custom donation of: ${amount}`);
    // In a real app, call payment API. For now, redirect to success for testing.
    // This assumes /success route will be set up with a SuccessPage component.
    history.push('/success');
  };

  // function onPressEnter(value) {} // This function was defined but not used.

  return (<div>
    <LayoutDash>
      <div style={{borderRadius:' 20px ', border: '	#DCDCDC dashed 1px', padding: '20px', textAlign: 'center'}}>
        <h1>Donations</h1>
        <h3>Please choose the amount you want to donate</h3>
        <h3>$USD</h3>
        <br/>
        <Button style={{padding:'5px 10px 10px 10px', margin: '10px', color: 'white', backgroundColor: '#DC143C'}} type="link" href="/donate100">$100</Button>
        <Button style={{padding:'5px 10px 10px 10px',margin: '10px', color: 'white', backgroundColor: '#DC143C'}} type="link" href="/donate200">$200</Button>
        <Button style={{padding:'5px 10px 10px 10px',margin: '10px', color: 'white', backgroundColor: '#DC143C'}} type="link" href="/donate300">$300</Button>
        <Button style={{padding:'5px 10px 10px 10px', margin: '10px', color: 'white', backgroundColor: '#DC143C'}} type="link" href="/donate400">$400</Button>

        <Row gutter={[16, 16]} style={{ marginTop: '30px', justifyContent: 'center' }}>
          <Col xs={24} sm={18} md={12} lg={10}> {/* Responsive column width */}
            <Card title="Donate a Custom Amount">
              <Input
                type="number"
                placeholder="Enter amount in $USD"
                value={customAmount}
                onChange={e => setCustomAmount(e.target.value)}
                min="1" // Basic HTML5 validation
                style={{ marginBottom: '15px', width: '100%' }}
                addonBefore="$"
              />
              <Button type="primary" onClick={handleCustomDonate} block style={{backgroundColor: '#DC143C', borderColor: '#DC143C'}}>
                Donate Custom Amount
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
      <br/>
      <div style={{marginTop:' 20px '}}>
    <h1> Why Donate?</h1>
    <h3>Please choose the amount you want to donate</h3>
    <p>Donating to charity is a major mood-booster. The knowledge that you’re helping others is hugely empowering and, in turn, can make you feel happier and more fulfilled. Research has identified a link between making a donation to charity and increased activity in the area of the brain that registers pleasure - proving that as the old adage goes, it really is far better to give than to receive.
    Our own research into why people give supports this. We asked 700 of our generous donors to tell us what motivates them to give regularly to charity; 42% agreed the enjoyment they receive from giving as a key influence. 
    What type of giver are you?</p>
    </div>
    </LayoutDash>
</div>
      
    
) 
}

export default PreDonate

