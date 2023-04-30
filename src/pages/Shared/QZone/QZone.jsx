import React from 'react';
import qzoneImg1 from '../../../assets/qZone1.png'
import qzoneImg2 from '../../../assets/qZone2.png'
import qzoneImg3 from '../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='bg-primary bg-opacity-10 text-center my-4 py-4 px-2'>
            <h3>Q-Zone</h3>
            <div>
                <img className='my-2 img-fluid' src={qzoneImg3} alt="" />
                <img className='my-2 img-fluid' src={qzoneImg1} alt="" />
                <img className='my-2 img-fluid' src={qzoneImg2} alt="" />
            </div>
        </div>
    );
};

export default QZone;