import { sectionsA, sectionsB, sectionsC } from "./data"
import { Seat } from "./Seat"
import topPlane from "./headerPlane.svg"
import "./styles.sass"

export const Plane = () => {
    return (
        <div className="plane">
            <div className="header-plane">
                <img src={topPlane} alt="" />
            </div>
            <div className="body-plane">
                <div className="seats">
                    {
                        sectionsA.map((section, index) => (
                            <div key={index} className="section-plane">
                                {section.map(({ label, status }, index) => (
                                    <Seat key={index} label={label} status={status} />
                                ))}
                            </div>
                        ))
                    }
                </div>
                <div className="seats">
                    {
                        sectionsB.map((section, index) => (
                            <div key={index} className="section-plane">
                                {section.map(({ label, status }, index) => (
                                    <Seat key={index} label={label} status={status} />
                                ))}
                            </div>
                        ))
                    }
                </div>
                <div className="seats">
                    {
                        sectionsC.map((section, index) => (
                            <div key={index} className="section-plane">
                                {section.map(({ label, status }, index) => (
                                    <Seat key={index} label={label} status={status} />
                                ))}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
