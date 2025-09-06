import { Routes, Route } from 'react-router';
import JobReflectionForm from './pages/JobReflectionForm';
import HomePage from './pages/HomePage';

const PageList = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/job-reflection' element={<JobReflectionForm />} />
        </Routes>
    )
};

export default PageList;