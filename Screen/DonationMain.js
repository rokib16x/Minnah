import React from 'react';
import { ScrollView } from 'react-native';
import DonationButton from './Donation';

const Donation = () => {
    return (
        <ScrollView>
            <DonationButton
                url="https://islamic-relief.org/where_we_work/bangladesh/"
                title="Islamic Relief Bangladesh"
                logoUrl="https://islamicrelief.org.bd/wp-content/uploads/2022/01/Islamic-Relief-Logo.png"
            />
             <DonationButton
                url="https://www.crp-bangladesh.org/donation"
                title="CRP Bangladesh"
                logoUrl="https://www.crp-bangladesh.org/sites/default/files/LOGO-e1470798754687_0.png"
            />

            <DonationButton
                url="https://www.thals.org/zakat"
                title="Bangladesh Thalassemia Foundation"
                logoUrl="https://www.thals.org/images/logo.png"
            />
            <DonationButton
                url="https://jaago.com.bd/zakat/"
                title="Jaago Foundation"
                logoUrl="https://upload.wikimedia.org/wikipedia/en/0/06/JAAGO_Foundation.jpeg"
            />
           
        </ScrollView>
    );
}

export default Donation;
