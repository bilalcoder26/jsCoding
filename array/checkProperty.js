let employee = {
    emp_name: 'Abdul Rawoof',
    emp_id: 1000,
    role: 'Software Engineer',
    salary: 18000
 };
 
 console.log("The given employee details are:", employee)
 console.log("Checking the keys present in an object using hasOwnProperty:")
 
 function getEmpDet(str){
    if(employee.hasOwnProperty(str)){
       console.log("The given employee object has",str)
    }
    else{
       console.log("The given employee object doesn't have",str)
    }
 }
 getEmpDet('emp_id')
 getEmpDet('salary')
 getEmpDet('designation')