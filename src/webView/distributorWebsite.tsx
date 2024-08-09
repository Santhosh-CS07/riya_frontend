import React, { useEffect, useState } from 'react'
import ImageViewer from '../components/image/ImageViewer';
import { useParams } from 'react-router-dom';
import { getDistributorProfile } from '../services/authServices';

const DistributorWebsite = () => {
    const { distributorId } = useParams<{ distributorId: string }>();
    const [userDetails, setUserDetails] = useState(null);

    const fetchDistributorDetails = async () => {
        const res: any = await getDistributorProfile({
            distributorId: String(distributorId),
        });
    };

    useEffect(() => {
        if (distributorId) {
            fetchDistributorDetails();
        }
    }, [distributorId]);

    return (
        <div className='text-center '>
            <div>
                <h1 className='py-4 text-3xl'>Welcome to Our Website</h1>
                <p>We are here to provide Indas Best Mobile App to managae your marraige bureau profiles and have access to global profiles.</p>
            </div>
            <div className='py-4'>
                <ImageViewer />
            </div>
        </div>
    )
}

export default DistributorWebsite;