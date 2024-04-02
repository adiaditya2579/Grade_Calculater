import React, { useState, useEffect } from 'react';
import {MdCalculate} from 'react-icons/md'
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
import Message from './Message';
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
        { value: 'diploma', label: 'Diploma' },
        { value: 'degree', label: 'Degree' }
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
            degree:[
                {value: 'SoftwareTesting', label: 'Software Testing'},
                {value: 'SoftwareEngineering', label: 'Software Engineering'},
                { value: 'DeepLearning' , label: 'Deep Learning'},
                { value: 'SearchMethods' , label: 'Search Methods'},
                { value: 'ProfessionalGrowth' , label: 'Professional Growth'},
                { value: 'DataVisualization ' , label: 'Data Visualization '},
                { value: 'DTDD' , label: 'Design Thinking for Data-Driven '},
                { value: 'MarketResearch' , label: 'Market Research'},
                { value: 'IntroductionBigData' , label: 'Introduction to Big Data'},
                { value: 'PSOS' , label: 'Privacy & Security in Online Social'},
                { value: 'StatisticalComputing' , label: 'Statistical Computing'},
                { value: 'ComputerSystemDesign' , label: 'Computer System Design'},
                { value: 'OperatingSystems' , label: 'Operating Systems'},
                { value: 'ProgrammingC' , label: 'Programming in C'},
                { value: 'DLFCV' , label: 'Deep Learning for Computer VISION'},
                { value: 'LargeLanguageModels' , label: 'Large Language Models '},
                { value: 'ManagerialEconomics' , label: 'Managerial Economics'},
                { value: 'BBB' , label: 'Big Data & Biological'},
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
            diploma:[
                {value:'_', label: 'message'}
            ],
            degree:[
                {value:'_', label: 'message'}
            ]
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
    const handelmessage = ()=>{
        if(selectedCourse === 'electronic' && selectedLevel === 'diploma' || selectedLevel === 'degree' ){
            setResult(<Message/>)
        } else {
            setResult(null); // Clear the result if the conditions are not met
        }
    }
    useEffect(() => {
        handelmessage();
    }, [selectedCourse, selectedLevel]);
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
    <div className=' h-screen w-full bg-[#27272B]'>
        <div className='min-h-[10vh] md:flex justify-between md:flex-wrap border-b-[1px] border-[#393939] px-[5%] py-2'>
            <div className='flex justify-center items-center gap-2 text-2xl font-semibold text-white'>
                <MdCalculate/>
                <span className='text-2xl font-bold '>Grade Calculater</span>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <select
                className=' bg-[#393939] p-2 my-2 text-white outline-none rounded-md w-[240px]'
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
                        className=' bg-[#393939] p-2 md:mx-2  text-white outline-none rounded-md w-[240px]'
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
                        className=' bg-[#393939] p-2 my-2 text-white outline-none rounded-md w-[240px]'
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
            </div>
        </div>
        {/* Result (displayed when a subject is selected) */}
        {selectedSubject && (
            <div>
                {result}
            </div>
        )}
    </div>
  )
}

export default Calculater