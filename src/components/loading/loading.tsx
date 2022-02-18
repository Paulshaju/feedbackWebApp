import * as React from 'react';
import '../loading/loading.scss'
import uniLogo from '../../../src/assests/uniLogo.png';

export default function Loading() {
    return (
        <div className='loadingContainer' id="loadingContainer">

            <div className='loader'>
                <img src={uniLogo} className='LodinglogoPic' />
                <div>
                <span className='loadingBar'></span>
                <span className='loadingBar'></span>
                <span className='loadingBar'></span>
                <span className='loadingBar'></span>

                </div>
                
            </div>
        </div>
    );
}