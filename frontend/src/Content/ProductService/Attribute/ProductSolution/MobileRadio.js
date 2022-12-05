import React from 'react';
import Header from '../../../Attribute/Header';
import { SolutionMenus } from './SolutionMenus';

const MobileRadio = () => {
    const title="TELECOM PRODUCT SOLUTION";
    return (
        <div>
            <Header menus={SolutionMenus} title={title}/>
            <div className='mx-32 text-justify mt-20 leading-10'>
                <div className='mb-10'>
                    Untuk komunikasi dengan multiple user (komunikasi antar petugas, atau komunikasi pusat dengan petugas di lapangan), Koparkla menawarkan Mobile Radio (HT) dengan sistem teknologi DMR (Digital Mobile Radio) dari Hytera, seperti portable radio, mobile radio, repeater, dan aksesoris.

                    Kombinasi antara low rate vocoder dan teknologi error-correction digital yang dipakai dalam mobile radio Hytera menghasilkan kualitas suara yang jernih.

                    Hemat biaya, karena dilengkapi dengan teknologi DMR TDMA yang memungkinkan anda mendapatkan dua channel dengan hanya menggunakan satu repeater, satu antena, dan satu duplexer.

                    Fitur GPS, geo fencing, man down, mengirimkan sms, menelpon ke nomor telpon, dan fitur-fitur lainnya memberikan banyak kemudahan pada pengguna, dan meningkatkan efisiensi kerja.   
                </div>
                <div className='w-full flex justify-center'>
                    <img src={require(`../../../../Assets/Images/TelecomProduct/hytera_product.jpg`)} />
                </div>
            </div>
        </div>
    )
}

export default MobileRadio
