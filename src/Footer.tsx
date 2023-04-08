import { red } from '@mui/material/colors';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

import { ASSETS_SOURCE } from "./settings";

function Footer() {
    return (
        <section className="flex flex-col justify-between min-h-screen text-white bg-mos-footer px-mos-lg py-mos-md">
            <div className="w-full mx-auto text-right max-w-mos-content">
                <button className="font-sans text-right">TOP <KeyboardDoubleArrowUpIcon /></button>
            </div>
            <div className="w-full mx-auto max-w-mos-content">
                <div className="mb-mos-md">
                    <img src={`${ASSETS_SOURCE}/wp-content/themes/mosdesign/img/final-logo.png`} />
                </div>
                <div className="flex flex-row justify-between mb-mos-md">
                    <div>
                        <p>
                            B2 9th Avenue<br />
                            Bonifacio High Street<br />
                            The Fort, Taguig 1634<br />
                            Metro Manila, Philippines
                        </p>
                        <p>
                            Store Hours<br />
                            <em>Monday to Thursday</em><br />
                            11 AM to 8 PM<br />
                            <em>Friday to Sunday</em><br />
                            11 AM to 9 PM
                        </p>
                    </div>
                    <div>
                        <p>
                            <em>Telephone</em><br />
                            (632) 856.2748<br />
                            <em>Fax</em><br />
                            (632) 856.7915<br />
                            <em>E-mail</em><br />
                            hello@mosdesign.com.ph
                        </p>
                    </div>
                    <div>
                        <p>
                            Mobile<br />
                            <em>BoConcept</em><br />
                            (+63) 917.572.7974<br />
                            <em>Natuzzi Italia</em><br />
                            (+63) 917.572.7975<br />
                            <em>Other brands</em><br />
                            (+63) 917.597.3525
                        </p>
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    <input className="w-1/3 text-black" placeholder="Signup for our newsletter" />
                </div>
            </div>
            <div className="text-xs text-center">&copy; 2015 Mos Design Philippines. All Rights Reserved.</div>
        </section>
    );
}

export default Footer;
