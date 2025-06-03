import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'; // Import CSS Module

const AppHero = () => {
  // Removed inline headHome style object as .heroBlock from CSS module will handle it.
  // The background image is now from styles.heroBlock.
  // The height: 700px and paddingBottom: 400px from inline styles are quite different
  // from height: 100vh in styles.heroBlock. This might need reconciliation.
  // For now, we prioritize using the CSS module's .heroBlock.

  // The img tag with '../../dash.png' seems to be a different approach than the background GIF in .heroBlock.
  // This is a significant divergence. I will comment out the direct img for now to let the CSS module background take effect.
  // If dash.png is essential, the CSS for heroBlock might need to be changed, or this component needs a different structure.

  return (
    <div className={styles.heroBlock}>
      {/* <img style={{ position:'absolute', marginLeft:'680px', width:'900px', height:'auto'}}  src='../../dash.png'/> */}
      <div className={styles.content}> {/* Use styles.content for inner content block */}
        {/*
          The original H1 and H2 have different styling (fontFutura, color black) than what .heroBlock h3 and p would provide.
          Let's use h3 and p tags as expected by the CSS module and see.
          If specific "Knowlee" branding is needed, Home.module.css might need adjustments for h1/h2 within heroBlock.
        */}
        <h3>Knowlee</h3> {/* Changed from H1 to H3 to match CSS module expectation, style may differ */}
        <p>Create learning paths and roadmaps. <br />Share, network and learn</p> {/* Changed from H2 to p */}
        <div className={styles.btnHolder}> {/* Use styles.btnHolder for button container */}
          <Link to='/login'>
            <Button style={{ backgroundColor: '#e05872', color: 'white', borderRadius: '7px', width: '200px', height: '50px', fontSize: '18px' }}>
              Start learning
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AppHero;