import React, { useState, useEffect } from 'react';
import StatisticsOne from './DataScience/Foundation/StatisticsOne';
import StatisticsTwo from './DataScience/Foundation/StatisticsTwo';
import CommonForm from './DataScience/Foundation/CommonForm';
import PythonForm from './DataScience/Foundation/PythonForm';
import MachineLearningFoundations from './DataScience/Deploma/MachineLearningFoundations';
import MachineLearningTechniques from './DataScience/Deploma/MachineLearningTechniques';
import MachineLearningPractice from './DataScience/Deploma/MachineLearningPractice';
import ToolsInDataScience from './DataScience/Deploma/ToolsInDataScience';
import PythonPDSA from './DataScience/Deploma/PythonPDSA';
import DBMS from './DataScience/Deploma/DBMS';
import Applicationdevelopmentone from './DataScience/Deploma/Applicationdevelopmentone';
import ProgrammingUsingJava from './DataScience/Deploma/ProgrammingUsingJava';
import SystemCommands from './DataScience/Deploma/SystemCommands';
import ApplicationDevelopmenttwo from './DataScience/Deploma/ApplicationDevelopmenttwo';
import ESCommonForm from './Electronic Systems/Foundation/ESCommonForm';
import ElectronicSystem from './Electronic Systems/Foundation/ElectronicSystem';
import IntroductionC from './Electronic Systems/Foundation/IntroductionC';
import IntroductionLinux from './Electronic Systems/Foundation/IntroductionLinux';
import ElectronicsLab from './Electronic Systems/Foundation/ElectronicsLab';
import SoftwareTesting from './DataScience/Degree/SoftwareTesting';
import SoftwareEngineering from './DataScience/Degree/SoftwareEngineering';
import DeepLearning from './DataScience/Degree/DeepLearning';
import SearchMethods from './DataScience/Degree/SearchMethods';
function Calculater() {
    // State variables
    const [selectedCourse, setSelectedCourse] = useState("");
    const [selectedLevel, setSelectedLevel] = useState("");
    const [selectedSubject, setSelectedSubject] = useState("");
    let [result, setResult] = useState("")
    // Example options
    const courseOptions = [
        { value: 'datascience', label: 'Data Science' },
        { value: 'electronic', label: 'Electronic Systems' }
    ];

    const levelOptions = [
        { value: 'foundation', label: 'Foundation' },
        { value: 'diploma', label: 'Diploma' }
    ];
    const subjectOptions = {
        datascience: {
            foundation: [
                { value: 'python', label: 'Python' },
                { value: 'ct', label: 'CT' },
                { value: 'math-I', label: 'Math-I' },
                { value: 'math-II', label: 'Math-II' },
                { value: 'English-I', label: 'English-I' },
                { value: 'English-II', label: 'English-II' },
                { value: 'Statistics-I', label: 'Statistics-I' },
                { value: 'Statistics-II', label: 'Statistics-II' },
            ],
            diploma: [
                { value: 'mlf', label: 'Machine Learning Foundations' },
                { value: 'mlt', label: 'Machine Learning Techniques' },
                { value: 'mlp', label: 'Machine Learning Practice' },
                { value: 'bdm', label: 'Business Data management' },
                { value: 'ba', label: 'Business Analytics' },
                { value: 'tds', label: 'Tools in Data Science' },
                { value: 'pdsa', label: 'Python (PDSA)' },
                { value: 'dbms', label: 'DBMS' },
                { value: 'ad', label: 'Application development-1' },
                { value: 'puj', label: 'Programming using Java' },
                { value: 'sc', label: 'System commands' },
                { value: 'ad2', label: 'Application Development-2' }
            ],
            Degree:[
                {value: 'SoftwareTesting', label: 'Software Testing'},
                {value: 'SoftwareEngineering', label: 'Software Engineering'},
                { value: 'DeepLearning' , label: 'Deep Learning'},
                { value: 'SearchMethods' , label: 'Search Methods'}
            ]
        },
        electronic: {
            foundation: [
                { value: 'English I', label: 'English I' },
                { value: 'Mathematics', label: 'Mathematics for Electronics I' },
                { value: 'Electronic System', label: 'Electronic System Thinking' },
                { value: 'IntroductionC', label: 'Introduction to C' },
                { value: 'English II', label: 'English II' },
                { value: 'IntroductionLinux', label: 'Introduction to the Linux ' },
                { value: 'DigitalSystems', label: 'Basic Digital Systems' },
                { value: 'ElectronicCircuits', label: 'Electrical and Electronic Circuits' },
                { value: 'ElectronicsLab', label: 'Electronics Lab' },
            ],
        }
    };
    // Function to handle course selection
    const handleCourseChange = (selectedCourse) => {
        setSelectedCourse(selectedCourse);
        setSelectedLevel(null); // Reset selected level when course changes
        setSelectedSubject(null);
    };

    // Function to handle level selection
    const handleLevelChange = (selectedLevel) => {
        setSelectedLevel(selectedLevel);
        setSelectedSubject(null); // Reset selected subject when level changes
    };

    // Function to handle subject selection
    const handleSubjectChange = (selectedSubject) => {
        setSelectedSubject(selectedSubject);
    };

    useEffect(() => {
        if (selectedSubject === 'math-I') {
            setResult(<CommonForm/>)
        }else if (selectedSubject === 'math-II'){
            setResult(<CommonForm/>)
        }else if (selectedSubject === 'English-I'){
            setResult(<CommonForm/>)
        }else if (selectedSubject === 'English-II'){
            setResult(<CommonForm/>)
        }else if (selectedSubject === 'ct'){
            setResult(<CommonForm/>)
        }else if (selectedSubject === 'python'){
            setResult(<PythonForm/>)
        }else if (selectedSubject === 'Statistics-II'){
            setResult(<StatisticsTwo/>)
        }else if (selectedSubject === 'Statistics-I'){
            setResult(<StatisticsOne/>)
        }
    }, [selectedSubject]); 

    useEffect(() => {
        if (selectedSubject === 'mlf') {
            setResult(<MachineLearningFoundations/>)
        }else if (selectedSubject === 'mlt'){
            setResult(<MachineLearningTechniques/>)
        }else if (selectedSubject === 'mlt'){
            setResult(<MachineLearningPractice/>)
        }else if (selectedSubject === 'bdm'){
            setResult()
        }else if (selectedSubject === 'ba'){
            setResult()
        }else if (selectedSubject === 'tds'){
            setResult(<ToolsInDataScience/>)
        }else if (selectedSubject === 'pdsa'){
            setResult(<PythonPDSA/>)
        }else if (selectedSubject === 'dbms'){
            setResult(<DBMS/>)
        }else if (selectedSubject === 'ad'){
            setResult(<Applicationdevelopmentone/>)
        }else if (selectedSubject === 'puj'){
            setResult(<ProgrammingUsingJava/>)
        }else if (selectedSubject === 'sc'){
            setResult(<SystemCommands/>)
        }else if (selectedSubject === 'ad2'){
            setResult(<ApplicationDevelopmenttwo/>)
        }
    }, [selectedSubject]); 
    useEffect(()=>{
        if(selectedSubject === 'SoftwareTesting'){
            setResult(<SoftwareTesting/>)
        }else if( selectedSubject === 'SoftwareEngineering'){
            setResult(<SoftwareEngineering/>)
        }else if( selectedSubject === 'DeepLearning'){
            setResult(<DeepLearning/>)
        }else if( selectedSubject === 'SearchMethods'){
            setResult(<SearchMethods/>)
        }
    })


    useEffect(() => {
        if (selectedSubject === 'English I') {
            setResult(<ESCommonForm/>)
        }else if (selectedSubject === 'Mathematics'){
            setResult(<ESCommonForm/>)
        }else if (selectedSubject === 'Electronic System'){
            setResult(<ElectronicSystem/>)
        }else if (selectedSubject === 'IntroductionC'){
            setResult(<IntroductionC/>)
        }else if (selectedSubject === 'English II'){
            setResult(<ESCommonForm/>)
        }else if (selectedSubject === 'IntroductionLinux'){
            setResult(<IntroductionLinux/>)
        }else if (selectedSubject === 'DigitalSystems'){
            setResult(<ESCommonForm/>)
        }else if (selectedSubject === 'ElectronicCircuits'){
            setResult(<ESCommonForm/>)
        }else if (selectedSubject === 'ElectronicsLab'){
            setResult(<ElectronicsLab/>)
        }
    }, [selectedSubject]); 




  return (
    <>
        {/* Course dropdown */}
        <select
            value={selectedCourse}
           onChange={(e) => handleCourseChange(e.target.value)}
        >
            <option value="">Select Course</option>
            {courseOptions.map((course) => (
                <option key={course.value} value={course.value}>
                    {course.label}
                </option>
            ))}
         </select>
        {/* Level dropdown (displayed when a course is selected) */}
        {selectedCourse && (
            <select
                value={selectedLevel}
                onChange={(e) => handleLevelChange(e.target.value)}
            >
                <option value="">Select Level</option>
                {levelOptions.map((level) => (
                    <option key={level.value} value={level.value}>
                        {level.label}
                    </option>
                ))}
            </select>
        )}
        {/* Subject dropdown (displayed when both course and level are selected) */}
        {selectedCourse && selectedLevel && (
            <select
                value={selectedSubject}
                onChange={(e) => handleSubjectChange(e.target.value)}
            >
                <option value="">Select Subject</option>
                {subjectOptions[selectedCourse][selectedLevel].map((subject) => (
                    <option key={subject.value} value={subject.value}>
                        {subject.label}
                    </option>
                ))}
            </select>
        )}
        {/* Result (displayed when a subject is selected) */}
        {selectedSubject && (
            <div className="result">
                {result}
            </div>
        )}
    </>
  )
}

export default Calculater