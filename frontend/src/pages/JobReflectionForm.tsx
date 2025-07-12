import "../App.css"
import { useState } from "react";
import axios from "axios";

const JobReflectionForm = () => {
    const [formData, setFormData] = useState({
        taskDescription: "",
        duration: "",
        reflection: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement >) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await axios.post("http://localhost:3002/api/job-reflection-submit", formData);
    };
    return (
        <form onSubmit={handleSubmit}>
            <h1 className="text-2xl text-center leading-none m-0">I want to reflect on my</h1>
            <h1 className="text-4xl text-center leading-none m-0">Job Completed</h1>
            <div className="columns-2 p-4">
                <label className="block text-lg font-medium text-gray-700 mt-4">
                    What have you done?
                </label>
                <textarea
                    name="taskDescription"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    onChange={handleInputChange} />
            </div>
            <div className="columns-2 p-4">
                <label className="block text-lg font-medium text-gray-700 mt-4">
                    How long?
                </label>
                <textarea
                    name="duration"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    onChange={handleInputChange} />
            </div>

            <div className="columns-2 p-4">
                <label className="block text-lg font-medium text-gray-700 mt-4">
                    Reflection
                </label>
                <textarea
                    name="reflection"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    onChange={handleInputChange} />
            </div>
            
            <button type='submit' className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                Done!
            </button>
        </form>
        
    );
};

export default JobReflectionForm;