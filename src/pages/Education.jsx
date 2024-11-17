import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBookOpen } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

function Education() {
    return (
        <>
        <Navbar />
            <div className="wrapper">
                <h1>Education</h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2010 - 2016"
                        iconStyle={{ background: '#222831', color: '#fff' }} 
                        icon={<FaBookOpen />} 
                    >
                        <h4 className="vertical-timeline-element-title">SDN NEGERI TULUSAN</h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2016 - 2019"
                        iconStyle={{ background: '#222831', color: '#fff' }} 
                        icon={<FaChalkboardTeacher />} 
                    >
                        <h4 className="vertical-timeline-element-title">SMP NEGERI 3 TAGULANDANG</h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2019 - 2022"
                        iconStyle={{ background: '#222831', color: '#fff' }} 
                        icon={<FaGraduationCap />} 
                    >
                        <h4 className="vertical-timeline-element-title">SMK NEGERI 1 TAGULANDANG</h4>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
            <Footer/>
            <ScrollToTop />
        </>
    )
}

export default Education
