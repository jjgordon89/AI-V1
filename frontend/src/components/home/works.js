import React from 'react';
// Button was imported but not used. Typography's Link was also not used.
// import { Button,  Typography } from 'antd';
import {
    CodeOutlined,
    AlertOutlined,
    FormatPainterOutlined,
    LaptopOutlined,
    CalculatorOutlined
  } from '@ant-design/icons';
// const {Link} = Typography; // Link was not used
import styles from './Home.module.css'; // Import CSS Module

const AppWorks = () => {

    // The .worksBlock style from Home.module.css includes a background image, overlay, and specific text color.
    // Applying it here will change the component's background from #1D3747.
    // The internal structure and inline styles of this component are quite different from what .worksBlock CSS implies.
    // For now, we apply styles.worksBlock to the root and keep internal styling.
    // A deeper refactor would be needed to align this component with the .worksBlock's .contentHolder and button styles.
    return (
            <div className={styles.worksBlock} style={{height:'auto', padding: '25px', display:'flex', flexDirection:'row', justifyContent:'space-between'}}> {/* Applied styles.worksBlock, adjusted height to auto, kept other inline styles for layout */}
                <div style={{ display:'flex', alignItems:'center', flexDirection:'column', zIndex: 1}}> {/* Added zIndex to ensure content is above the ::before pseudo-element overlay from worksBlock */}
                    <h2 style={{  color: 'white',  fontWeight:'300', width:'400px', padding:'70px 30px 40px 30px',
                        }}>Our mission is to create a community of technology lovers that are willing to share their knowledge and experience. </h2>
                </div>
                <div style={{zIndex: 1}}> {/* Added zIndex here too */}
                <h2 style={{textAlign:'center', color:'white', fontSize:'30px'}}>Categories</h2>
                    <div style={{display:'flex', width:'1000px', alignItems:'center', flexWrap:'wrap',  justifyContent:'space-evenly', marginLeft:'10px'}}>
                   
                    <div className='categoryDash' style={{backgroundColor:'white', display:'flex', flexDirection:'column', border:'3px solid #1D3747'}} >
                    <AlertOutlined style={{fontSize:'60px', color:'#1D3747'}}/>
                        <h2 style={{textAlign:'center', color:'#1D3747', lineHeight:'15px', marginTop:'15px'}}>Cyber <br/> Security</h2>
                    </div>

                    <div className='categoryDash' style={{backgroundColor:'white', display:'flex', flexDirection:'column', border:'3px solid #1D3747'}} >      
                    <CalculatorOutlined style={{fontSize:'60px', color:'#1D3747'}}/>
                        <h2 style={{textAlign:'center', color:'#1D3747', lineHeight:'15px', marginTop:'15px'}}>Data <br/> Science</h2>
                    </div>

                    <div className='categoryDash' style={{backgroundColor:'white', display:'flex', flexDirection:'column', border:'3px solid #1D3747'}} >           
                        <LaptopOutlined style={{fontSize:'60px', color:'#1D3747'}}/>
                            <h2 style={{textAlign:'center', color:'#1D3747', lineHeight:'15px', marginTop:'15px'}}>DevOps</h2>
                    </div>


                        <div className='categoryDash' style={{backgroundColor:'white', display:'flex', flexDirection:'column', border:'3px solid #1D3747'}} >                      
                        <FormatPainterOutlined style={{fontSize:'60px', color:'#1D3747'}}/>
                            <h2 style={{textAlign:'center', color:'#1D3747', lineHeight:'15px', marginTop:'15px'}}>Ux/Ui</h2>
                        </div>

                        <div className='categoryDash' style={{backgroundColor:'white', display:'flex', flexDirection:'column', border:'3px solid #1D3747'}} >                 
                        <CodeOutlined style={{fontSize:'60px', color:'#1D3747'}}/>
                            <h2 style={{textAlign:'center', color:'#1D3747', lineHeight:'15px', marginTop:'15px'}}>Web <br/> Development</h2>
                        </div>

                    </div>
                    </div>
                </div>
     
    );
  }

export default AppWorks;

