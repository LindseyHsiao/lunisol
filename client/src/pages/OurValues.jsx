import { PiFlaskDuotone } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { PiPersonSimpleDuotone } from "react-icons/pi";
import { PiLeafDuotone } from "react-icons/pi";




export default function OurValues() {
    return (
        <section className="our-values-section">
            <div>
                <h2>Our Values</h2>
            </div>
            <div className="values-dropdown">
                <div className="values-dropdown-single">
                    <div className="icon-and-category">
                        <div className="values-icon"><PiFlaskDuotone />
                        </div>
                        <h4>Non-toxic Self Care</h4>
                    </div>
                    <div className="values-icon-down-arrow"><IoIosArrowDown />
                    </div>
                </div>
                <div className="values-dropdown-single">
                    <div className="icon-and-category">
                        <div className="values-icon"><PiPersonSimpleDuotone /></div>
                        <h4>Empowering YOU</h4>
                    </div>
                    <div className="values-icon-down-arrow"><IoIosArrowDown /></div>
                    <p className="values-dropdown-info">information </p>

                </div>
                <div className="values-dropdown-single">
                    <div className="icon-and-category">
                        <div className="values-icon"><PiLeafDuotone /></div>
                        <h4>Earth's Plant Medicine</h4>
                    </div>
                    <div className="values-icon-down-arrow"><IoIosArrowDown /></div>

                    <p className="values-dropdown-info">information </p>

                </div>
            </div>
        </section>
    )
}