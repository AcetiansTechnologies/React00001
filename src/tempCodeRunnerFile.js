// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';
import Home from './guest/Home';
import Login from './auth/Login';
import Counter from './guest/Counter';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import OurHistory from './guest/OurHistory';
import Vision from './guest/Vision';
import WeValues from './guest/WeValues';
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


const App = () => {
    return (
        <div className='main'>
        <Navbar/>
        <div class="container main-body">
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/counter" element={<ProtectedRoute component={<Counter/>} />} />
<Route path="/about/our-history" element={<OurHistory/>} />
<Route path="/about/vision-mission" element={<Vision/>} />
<Route path="/about/we-value-their-services" element={<WeValues/>} />
{/* <Route path="/about/we-value-their-services/our-past-principal" component={<OurPastPrincipals/>} />
<Route path="/about/we-value-their-services/our-past-faculties" component={<OurPastFaculties/>} /> */}

<Route path="/administration/principals-message" element={<PrincipalMessage />} />
<Route path="/administration/public-relations-officer" element={<PRO />} />
<Route path="/administration/proctorial-board" element={<ProctorialBoard />} />
<Route path="/administration/councils" element={<Commitees />} />
<Route path="/administration/parishad" element={<Parishad />} />
<Route path="/administration/iqac" element={<IQAC />} />
<Route path="/administration/rules-and-regulations" element={<Rules />} />
<Route path="/administration/rusa" element={<RUSA />} />

<Route path="/faculties-staff/faculty-of-arts" element={<Faculty stream="arts" />} />
<Route path="/faculties-staff/faculty-of-arts/dept-of-history" element={<Faculty stream="department of history" />} />
<Route path="/faculties-staff/faculty-of-arts/dept-of-political-science" element={<Faculty stream="arts" />} />
<Route path="/faculties-staff/faculty-of-arts/dept-of-sociology" element={<Faculty stream="department of sociology" />} />
<Route path="/faculties-staff/faculty-of-arts/dept-of-hindi" element={<Faculty stream="department of hindi" />} />
<Route path="/faculties-staff/faculty-of-arts/dept-of-education" element={<Faculty stream="department of education" />} />
<Route path="/faculties-staff/faculty-of-arts/dept-of-english" element={<Faculty stream="arts" />} />
<Route path="/faculties-staff/faculty-of-arts/dept-of-physical-education" element={<Faculty stream="arts" />} />
<Route path="/faculties-staff/faculty-of-science" element={<Faculty stream="science" />} />
<Route path="/faculties-staff/faculty-of-science/dept-of-botany" element={<Faculty stream="arts" />} />
<Route path="/faculties-staff/faculty-of-science/dept-of-zoology" element={<Faculty stream="arts" />} />
<Route path="/faculties-staff/faculty-of-science/dept-of-chemistry" element={<Faculty stream="arts" />} />
<Route path="/faculties-staff/faculty-of-science/dept-of-physics" element={<Faculty stream="arts" />} />
<Route path="/faculties-staff/faculty-of-science/dept-of-mathematics" element={<Faculty stream="arts" />} />
<Route path="/faculties-staff/faculty-of-commerce" element={<Faculty stream="arts" />} />
<Route path="/faculties-staff/non-teaching-staff" element={<Faculty stream="arts" />} />

<Route path="/academic/honors-awards-achievements" element={<Honors />} />
<Route path="/academic/publications" element={<Publications />} />
<Route path="/academic/academic-calendar" element={<AcademicCalendar />} />
<Route path="/academic/list-of-holidays" element={<ListOfHoliday />} />
<Route path="/academic/time-table" element={<Timetable />} />
<Route path="/academic/time-table/faculty-of-arts-2" element={<Timetable />} />
<Route path="/academic/faculty-of-science" element={<Timetable />} />
<Route path="/academic/faculty-of-commerce" element={<Timetable />} />
<Route path="/academic/ug-courses" element={<Courses name="ug" />} />
<Route path="/academic/ug-courses/b-sc-bachelors-of-science" element={<Courses name="ug" />} />
<Route path="/academic/ug-courses/b-a-bachelors-of-arts" element={<Courses name="ug" />} />
<Route path="/academic/ug-courses/b-com-bachelors-of-commerce" element={<Courses name="ug" />} />
<Route path="/academic/pg-courses" element={<Courses name="ug" />} />
<Route path="/academic/pg-in-commerce" element={<Courses name="ug" />} />
<Route path="/academic/pg-in-commerce/m-com" element={<Courses name="ug" />} />
<Route path="/academic/teaching-plan" element={<TeachingPlan />} />
<Route path="/academic/seminar" element={<Seminar />} />
<Route path="/academic/workshop" element={<Workshop />} />
<Route path="/academic/guest-lectures" element={<GuestLecture />} />
<Route path="/academic/university-examination" element={<UniversityExamination />} />
<Route path="/academic/research" element={<Research />} />
<Route path="/academic/best-practices" element={<BestPractices />} />

{/* <Route path="/facilities" component={<Facilities} />
<Route path="/facilities/multipurpose-hall" component={<MultipurposeHall/>} />
<Route path="/facilities/smart-class-room" component={<SmartClassRoom/>} />
<Route path="/facilities/women-health-club" component={WomenHealthClub/>} />
<Route path="/facilities/computer-lab" component={ComputerLab/>} />
<Route path="/facilities/library" component={Library/>} />
<Route path="/facilities/e-library" component={ELibrary/>} />
<Route path="/facilities/e-learning-park" component={ELearningPark/>} />
<Route path="/facilities/college-store" component={CollegeStore/> } />
<Route path="/gallery" component={Gallery} />
<Route path="/students" component={Students} />
<Route path="/students/NAAC" component={NAAC} />
<Route path="/students/NIRF" component={NIRF} />
<Route path="/rankings" component={Rankings} />
<Route path="/rankings/NAAC" component={RankingsNAAC} />
<Route path="/rankings/NIRF" component={RankingsNIRF} />
<Route path="/contact-us" component={ContactUs} />
<Route path="/feedback-form" component={FeedbackForm} /> */}
            </Routes>

        </Router>
        </div>
        <Footer/>

        </div>
    );
};

export default App;
