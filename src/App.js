import React, { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';
import Home from './guest/Home';
import Login from './auth/Login';
import Counter from './guest/Counter';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import OurHistory from './guest/OurHistory';
import Vision from './guest/Vision';
import WeValues from './guest/WeValues'; // New component
import PrincipalMessage from './guest/PrincipalMessage';
import PRO from './guest/PRO';
import ProctorialBoard from './guest/ProctorialBoard';
import Commitees from './guest/Commitees';
import Parishad from './guest/Parishad';
import IQAC from './guest/IQAC';
import Rules from './guest/Rules';
import RUSA from './guest/RUSA';
import Faculty from './guest/Faculty';
import Honors from './guest/Honors';
import Publications from './guest/Publications';
import AcademicCalendar from './guest/AcademicCalendar';
import ListOfHoliday from './guest/ListOfHoliday';
import Timetable from './guest/Timetable';
import Courses from './guest/Courses';
import TeachingPlan from './guest/TeachingPlan';
import Seminar from './guest/Seminar';
import Workshop from './guest/Workshop';
import GuestLecture from './guest/GuestLecture';
import UniversityExamination from './guest/UniversityExamination';
import Research from './guest/Research';
import BestPractices from './guest/BestPractices';
import PageNotFound from './guest/PageNotFound';
import ElearningPark from './guest/ElearningPark';
import ELibrary from './guest/ELibrary';
import Library from './guest/Library';
import ComputerLab from './guest/ComputerLab';
import WomenHealthClub from './guest/WomenHealthClub';
import SmartClass from './guest/SmartClass';
import MultiPurposeHall from './guest/MultiPurposeHall';
import CollegeStore from './guest/CollegeStore';
import StudentsAchievements from './guest/StudentsAchievements';
import StudentTopperDetails from './guest/StudentTopperDetails';
import Gallery from './guest/Gallery';
import ContactUs from './guest/ContactUs';
import RankingNirf from './guest/RankingNirf';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ScrollToTop from './components/ScrollToTop';
import FeedbackForm from './guest/FeedbackForm';
import AboutUsPage from './guest/AboutUsPage';
import Admission from './auth/Admission';
import Registration from './auth/Registration';
import Registration_status from './auth/Registration_status';
import Otp from './auth/Otp';
import Dashboard from './auth/Dashboard';
import Personal from './auth/Personal';
import Option from './auth/Option';
import Print1 from './auth/Print1';






const App = () => {
    const [loading, setLoading] = useState(true);
    const [percentage, setPercentage] = useState(5);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Make the API request using Axios
                const response = await axios.get('https://campus.acetians.in/api/v1/get-store-data');
                const response2 = await axios.get('https://campus.acetians.in/api/v1/get-store-sliders');
                const response3 = await axios.get('https://campus.acetians.in/api/v1/get-store-notices');
                const response4 = await axios.get('https://campus.acetians.in/api/v1/get-store-gallery');
                const response5 = await axios.get('https://campus.acetians.in/api/v1/get-course-data');
                // Dispatch data to the store
                dispatch({ type: 'SET_STORE_DATA', payload: response.data });
                dispatch({ type: 'SET_STORE_SLIDERS', payload: response2.data });
                dispatch({type:'SET_NOTICES',payload:response3.data})
                dispatch({type:'SET_GALLERY_IMAGES',payload:response4.data});
                dispatch({type:'SET_COURSE_DATA',payload:response5.data})
            } catch (error) {
                // Handle errors
                console.error('Error fetching data', error);
            } finally {
                // Set loading to false after request completion
                setLoading(false);
            }
        };

        fetchData();
    }, [dispatch]);

    useEffect(() => {
        if (loading) {
            const interval = setInterval(() => {
                setPercentage(prev => {
                    if (prev < 95) {
                        return prev + 1;
                    } else {
                        clearInterval(interval);
                        return prev;
                    }
                });
            }, 10); // Adjust the interval time as needed
            return () => clearInterval(interval);
        } else {
            setPercentage(100);
        }
    }, [loading]);

    return  (
        <BrowserRouter>
           <> <ScrollToTop/>
            <div className='main'>
                <Navbar />
                <div className="main-body">

                    <Routes>
                        {/* Home and Login */}
                        <Route path="/" element={< Home />} />
                        <Route path="/login" element={<Login />} />
                        
                        {/* Protected Routes */}
                        <Route path="/counter" element={<ProtectedRoute component={<Counter />} />} />
                        
                        {/* About Routes */}
                        <Route path="/about/about-us" element={<AboutUsPage />} />
                        <Route path="/about/our-history" element={<OurHistory />} />
                        <Route path="/about/vision-mission" element={<Vision />} />
                        <Route path="/about/we-value-their-services" element={<WeValues />} />
                        <Route path="/about/we-value-their-services/our-past-principal" element={<WeValues />} />
                        <Route path="/about/we-value-their-services/our-past-faculties" element={<WeValues />} />

                        {/* Administration Routes */}
                        <Route path="/administration/principals-message" element={<PrincipalMessage />} />
                        <Route path="/administration/public-relations-officer" element={<PRO />} />
                        <Route path="/administration/proctorial-board" element={<ProctorialBoard />} />
                        <Route path="/administration/councils" element={<Commitees />} />
                        <Route path="/administration/parishad" element={<Parishad />} />
                        <Route path="/administration/iqac" element={<IQAC />} />
                        <Route path="/administration/rules-and-regulations" element={<Rules />} />
                        <Route path="/administration/rules-and-regulations/ugc-regulation-2018" element={<Rules />} />
                        <Route path="/administration/rusa" element={<RUSA />} />


                        
                        {/* Faculty & Staff Routes */}
                        <Route path="/faculties-staff/faculty-of-arts" element={<Faculty stream="arts" />} />
                        <Route path="/faculties-staff/faculty-of-science" element={<Faculty stream="science" />} />
                        <Route path="/faculties-staff/faculty-of-commerce" element={<Faculty stream="commerce" />} />
                        <Route path="/faculties-staff/non-teaching-staff" element={<Faculty stream="Office Staffs" />} />
                        
                        {/* Academic Routes */}
                        <Route path="/academic/honors-awards-achievements" element={<Honors />} />
                        <Route path="/academic/publications" element={<Publications />} />
                        <Route path="/academic/academic-calendar" element={<AcademicCalendar />} />
                        <Route path="/academic/list-of-holidays" element={<ListOfHoliday />} />
                        <Route path="/academic/time-table" element={<Timetable />} />
                        <Route path="/academic/ug-courses" element={<Courses name="ug" />} />
                        <Route path="/academic/ug-courses/b-sc-bachelors-of-science/" element={<Courses name="BSc. Bachelor of Science" categ="science" />} />
                        <Route path="/academic/ug-courses/b-com-bachelors-of-commerce/" element={<Courses name="BCom. Bachelor of Commerce" categ="commerce"/>} />
                        <Route path="/academic/pg-courses/m-sc-masters-of-science/" element={<Courses name="MSc. Masters of Science" categ="science"/>} />
                        <Route path="/academic/pg-courses/m-com-masters-of-commerce/" element={<Courses name="MCom. Masters of Commerce" categ="commerce" />} />
                        <Route path="/academic/other" element={<Courses name="Other Courses"  categ="otherc"/>} />
                        <Route path="/academic/pg-courses" element={<Courses name="pg" />} />
                        <Route path="/academic/teaching-plan" element={<TeachingPlan />} />
                        <Route path="/academic/seminar" element={<Seminar />} />
                        <Route path="/academic/workshop" element={<Workshop />} />
                        <Route path="/academic/guest-lectures" element={<GuestLecture />} />
                        <Route path="/academic/university-examination" element={<UniversityExamination />} />
                        <Route path="/academic/research" element={<Research />} />
                        <Route path="/academic/best-practices" element={<BestPractices />} />
                        
                        <Route path="/facilities/multipurpose-hall" element={<MultiPurposeHall />} />
                        <Route path="/facilities/smart-class-room" element={<SmartClass />} />
                        <Route path="/facilities/women-health-club" element={<WomenHealthClub />} />
                        <Route path="/facilities/computer-lab" element={<ComputerLab />} />
                        <Route path="/facilities/library" element={<Library />} />
                        <Route path="/facilities/e-library" element={<ELibrary />} />
                        <Route path="/facilities/e-learning-park" element={<ElearningPark />} />
                        <Route path="/facilities/college-store" element={<CollegeStore />} />
                        
                        {/* Students Routes  */}
                        <Route path="/students/achievements" element={<StudentsAchievements />} />
                        <Route path="/students/topper-details" element={<StudentTopperDetails />} />

                        {/* Gallery */}
                        <Route path="/gallery/photo" element={<Gallery galleryType="Photo"/>} />
                        <Route path="/gallery/video" element={<Gallery galleryType="Video"/>} />
                        <Route path="/contact-us" element={<ContactUs title="Contact Us" />} />
                        <Route path="/rankings/NIRF" element={<RankingNirf/>} />
                        <Route path="/feedback-form" element={<FeedbackForm title="Feedback Form"/>} />
                        <Route path="/gallery/news" element={<Gallery galleryType="News"/>} />
                        {/* Addmission form */}
                        <Route path = "/online_admission" element = {<Admission admission="addmission"/>}/>
                        {/* Registration */}
                        <Route path = "/registration" element = {<Registration Registration="registration"/>}/>
                        {/* Registration_status */}
                        <Route path = "/registration_status" element = {<Registration_status registration_status="registration_status"/>}/>
                        {/* otp generate */}
                        <Route path="/otp" element={<Otp otp="otp"/>} />
                        {/* DashBoard */}
                        <Route path = "/dashboard" element={<Dashboard dashboard = "dashboard"/>}/>
                        <Route path = "/personal" element={<Personal personal = "personal"/>}/>
                        <Route path = "/option" element={<Option option = "option"/>}/>
                        <Route path = "/print1" element={<Print1/>}/>
                       
                       
           
                        {/* 404 Not Found */}
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </div>
                <Footer />
            </div>
            </>
        </BrowserRouter>
    );
};

export default App;
