import React from 'react';
import { List, Card, Button } from 'antd';
import styles from './Home.module.css'; // Import CSS Module

const data = [
    {
      title: 'Basic',
      content: [
          {
              price: "$100 donation",
              mentoring: "Obtain direct support from our community ",
              support: "All categories",
              jobs: "no IT jobs offers",
              email: "no important email notifications"
          }
      ]
    },
    {
        title: 'Freelancer',
        content: [
            {
                price: "$200 donation",
                mentoring: "Obtain support from teaches ",
                support: "All categories",
                jobs: "yes, IT jobs offers",
                email: "yes, important email notifications"
            }
        ]
      },
      {
        title: 'Junior',
        content: [
            {
                price: "$400 donation",
                mentoring: "Obtain personalized study paths",
                support: "All categories",
                jobs: "yes, IT jobs offers",
                email: "yes, important email notifications"
            }
        ]
      }
  ];

const AppPricing = () => {
    // Assuming 'block', 'bgGray', 'container-fluid', and 'titleHolder' are global classes
    return (
        <div className={`block ${styles.pricingBlock} bgGray`}> {/* Applied styles.pricingBlock */}
             <div className="container-fluid">
               <div className="titleHolder">
                 <h2>Monthly Donation Plans</h2>
                 <p>Join the community and recieve monthly donations from grateful users!</p>
               </div>
               <List
                 grid={{ gutter: 16, column: 3 }}
                 dataSource={data}
                 renderItem={item => (
                   <List.Item>
                     {/* Card title is set via List.Item in Antd, .ant-card-head-title styling will be applied via styles.pricingBlock */}
                     <Card title={item.title}> {/* Added title to Card for .ant-card-head-title style to apply if needed */}
                       <p className={styles.large}>{item.content[0].price}</p> {/* Applied styles.large */}
                       <p>{item.content[0].mentoring}</p>
                       <p>{item.content[0].support}</p>
                       <p>{item.content[0].jobs}</p> {/* Assuming this was missing and should be displayed */}
                       <p>{item.content[0].email}</p> {/* Assuming this was missing and should be displayed */}
                       <Button type="primary" size="large"><i className="fab fa-telegram-plane"></i>&nbsp; Get started</Button> {/* Changed class to className */}
                     </Card>
                   </List.Item>
                 )}
               />
             </div>
        </div>
    );
}

export default AppPricing;
