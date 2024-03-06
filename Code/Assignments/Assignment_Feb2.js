let studentsData = [
    {
        "roll_no": 14,
        "firstName": "GAURAV",
        "lastName": "kalra",
        "marks": {
            "phy": 75,
            "csc": 85,
            "eng": 75,
            "math": 96,
            "chem": 75,
        },
        "address": {
            "locality": "ramprastha",
            "distanceFromSchoolInKM": 2
        },
        "languages": ["english", "hindi", "punjabi", "sanskrit"]
    },
    {
        "roll_no": 7,
        "firstName": "HARMAN DEEP",
        "lastName": "singh",
        "marks": {
            "phy": 81,
            "csc": 64,
            "eng": 89,
            "math": 89,
            "chem": 77,
        },
        "address": {
            "locality": "shreshta vihar",
            "distanceFromSchoolInKM": 0.5
        },
        "languages": ["english", "hindi", "punjabi"]

    },
    {
        "roll_no": 2,
        "firstName": "KARAN",
        "lastName": "bhola",
        "marks": {
            "phy": 20,
            "csc": 85,
            "eng": 80,
            "math": 25,
            "chem": 85,
        },
        "address": {
            "locality": "vigyan vihar",
            "distanceFromSchoolInKM": 1
        },
        "languages": ["english", "hindi", "punjabi", "sanskrit"]
    }
];

// 1. Find all the students who have received 90 marks in atleast one subject
//     Return the data in following format
//         students = [
//             {
//                 "roll_no":14
//                 "name": "Gaurav Kalra"
//             },
//             {
//                 "roll_no":7
//                 "name": "Harman deep Singh"
//             }
//         ]
const atleast90Marks=(studentsData)=>{
    let studentsRecord=[];
    studentsData.forEach((student)=>{
        for(let key in student.marks){
            if(student.marks[key]>=90){
                let newStudent={
                    "roll_no":student.roll_no,
                    "name":`${student.firstName} ${student.lastName}`
                }
                return studentsRecord.push(newStudent);
            }
        }
        
    })
    return studentsRecord
}

// 1b. Find all students who have received distinction (75) in all subjects
const distinctionInAllSubjects=(studentsData)=>{
    let students=[]
    studentsData.forEach((student)=>{
        let distinction=false;
        for(let key in student.marks){
            if(student.marks[key]<75){
                distinction=true;
                break;
            }
        }
        if(!distinction){
            return students.push(student);
        }
    })
    return students;
}

// 2. Rank all the students starting from topper, topper defines student who has max total marks.
//     Return data in following format.
//         students = [
//             "2" :{
//                 "name": "Karan Bhola",
//                 "totalMarks": 435
//             }
//             ...
//         ]
const rankToppers=(studentsData)=>{
    let students=[];
    studentsData.forEach((student)=>{  
        let totalSum=0;
        for(let key in student.marks){
            totalSum+=student.marks[key];
        }   
        let newStudent={
            "roll_no":student.roll_no,
            "name":`${student.firstName} ${student.lastName}`,
            "totalMarks":totalSum
        }
        students.push(newStudent)
    })
    students.sort((student1,student2)=>{
        return student2.totalMarks-student1.totalMarks;
    })
    return students;
}

// 2b. Rank all the students starting from lowest marks?
const rankLowest=(studentsData)=>{
    let students=[];
    studentsData.forEach((student)=>{  
        let totalSum=0;
        for(let key in student.marks){
            totalSum+=student.marks[key];
        }   
        let newStudent={
            "roll_no":student.roll_no,
            "name":`${student.firstName} ${student.lastName}`,
            "totalMarks":totalSum
        }
        students.push(newStudent)
    })
    students.sort((student1,student2)=>{
        return student1.totalMarks-student2.totalMarks;
    })
    return students;
}

// 2c. Add best4Marks also to the array, best4Marks is total marks of best 4 subjects.
const addBest4Marks=(studentsData)=>{
    let students=[];
    
    studentsData.forEach((student)=>{
    let best4marksArray=Object.values(student.marks);

    let best4Marks=0;
    best4marksArray.sort((marks1,marks2)=>marks2-marks1)

    for(let i=0;i<4;i++){
      best4Marks+=best4marksArray[i];
    }
    let newStudent={
      "roll_no":student.roll_no,
      "name":`${student.firstName} ${student.lastName}`
    }
    newStudent.best4Marks=best4Marks;
    students.push(newStudent);
    })
    return students;
}

// 2d. Return List sorted based on best4Marks
const best4MarksList=(studentsData)=>{
    let studentData=addBest4Marks(studentsData);

    return studentData.sort((student1,student2)=>{
        return student2.best4Marks-student1.best4Marks;
    })

}

// 3. List of all students who failed in 1 or more exam, failed means < 40.
//     Return data in following format
//         students = [
//             {
//                 "roll_no":11
//                 "name": "Harish Gupta"
//                 "num_Backs": 2 //Donates number of subjects student failed in.
//             }
//             ....
//         ]
// 3b. Does you approach change if we also need the name of all the subjects student failed in.
const getFailedStudent = (studentsData, subjects = false)=>{
    let students=[];
    studentsData.forEach((student)=>{
        const subWithMarks = Object.entries(student.marks);
        let failedSubjects = [];
        for(let mark of subWithMarks){
            if(mark[1]<40){
                failedSubjects.push(mark[0]);
            }
        }
        if(failedSubjects.length){
            const studentDetails = {
                "roll_no":student.roll_no,
                "name":`${student.firstName} ${student.lastName}`,
                "num_Backs": failedSubjects.length
            }

            if(subjects){
                studentDetails["failed_subjects"] = failedSubjects;
            }

            students.push(studentDetails);
        }
    })
    return students;
}


// 4b. Find the analytics distribution on languge:num_students 
//         reutrn : [
//             "english: 35 //Number of Students who speak 
//         ]
const languageDistribution=(studentsData)=>{
    let languages={};
    studentsData.forEach((student)=>{
        for(let i=0;i<student.languages.length;i++){
            if(languages[student.languages[i]]){
                languages[student.languages[i]]++;   
            }
            else{
                languages[student.languages[i]]=1;
            }
        }
    })
    return languages;
}

// 4. Languages
//     4a. Find the most commonly spoken language
const mostCommonLanguage=(studentsData)=>{
   let languages=languageDistribution(studentsData);
    return Object.entries(languages).sort((lang1,lang2)=>{
        return lang2[1]-lang1[1];
    })[0][0];

}

// 4c. Find top 3 most commonly spoken language
const top3SpokenLanguages=(studentsData)=>{
   let languages=languageDistribution(studentsData);
    let languagesArray= Object.entries(languages).sort((lang1,lang2)=>{
        return lang2[1]-lang1[1];
    });
    let top3languages=[];
    for(let i=0;i<3;i++){
        top3languages[i]=languagesArray[i][0];
    }
    return top3languages;

}

// 4d. Find 3 least commonly spoken languages
const least3SpokenLanguages=(studentsData)=>{
   let languages=languageDistribution(studentsData);
    let languagesArray= Object.entries(languages).sort((lang1,lang2)=>{
        return lang1[1]-lang2[1];
    });
    let least3languages=[];
    for(let i=0;i<3;i++){
        least3languages[i]=languagesArray[i][0];
    }
    return least3languages;
}

// 4e. Find any one student who speaks "english"
//         4e.1
//             What if we want any student who speaks "english" & "sanskrit" Does your solution change and how.
const getStudentOfLanguage=(studentsData,...languages)=>{
   let myLanguages=languageDistribution(studentsData);
    let students=[]
    studentsData.forEach((student)=>{
        for(let lang of languages){
            if(!student.languages.includes(lang)){
                return false;
            }
        }
    students.push(student);
    })
    return students;
}

// 5. Give School Report Card
//     {
//         num_Students: 70,
//         num_Passed: 62,
//         num_Failed: 8,
//         num_Students_WithDistinction:51
//     }
const getReport=(studentsData)=>{

    let num_Students,num_Passed,num_Failed,num_Students_WithDistinction;
    num_Students=studentsData.length;
    num_Failed=getFailedStudent(studentsData).length;
    num_Passed=num_Students-num_Failed;
    num_Students_WithDistinction=distinctionInAllSubjects(studentsData).length;
    return {
        num_Students,
        num_Passed,
        num_Failed,
        num_Students_WithDistinction
    }

}
