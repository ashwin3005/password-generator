import React from 'react';
import zxcvbn from 'zxcvbn';

const StrengthChecker = (props) => {
    const strengthMeter= zxcvbn(props.password);
    console.log(zxcvbn(''))
    const widthMeter = strengthMeter.score * 100/4;
    const checkLabel = () =>{
        switch(strengthMeter.score){
            case 0:
                return 'Too weak';
            case 1:
                return 'Weak';
            case 2:
                return 'Fair';
            case 3:
                return 'Good';
            case 4:
                return 'Strong';
            default:
                return 'none';
        }
    }
    const progressColor = () =>{
        switch(strengthMeter.score){
            case 0:
                return '#828282';
            case 1:
                return '#ea1111';
            case 2:
                return '#ffad00';
            case 3:
                return '#9bc158';
            case 4:
                return '#00b500';
            default:
                return 'none';
        }

    }
    
    const progressBarStyle =()=>({width: `${widthMeter}%`, backgroundColor: progressColor(),height:'7px',borderRadius:'8px'})
    return (
        <>
            <div className='progress' style={{height:'7px',width:'100%',backgroundColor:'#ccc',borderRadius:'8px'}}>
                <div className='progress-bar' style={progressBarStyle()}></div>
            </div>
            <p style={{color:progressColor(),textAlign:'right'}}>password strength:&nbsp;&nbsp;&nbsp;{checkLabel()}</p>
        </>
    )
}

export default StrengthChecker;