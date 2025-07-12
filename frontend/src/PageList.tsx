import { Routes, Route } from 'react-router';
import JobReflectionForm from './pages/JobReflectionForm';

const PageList = () => {
    return (
        <Routes>
            <Route path='/' element={<JobReflectionForm />} />
        </Routes>
    )
};

export default PageList;