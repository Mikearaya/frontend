export class IEmployee {
    constructor(
         title: string,
         code: any,
         subject_type: string,
         subject_weightage: any, ) {
    }
}
export class ISubjects {
    constructor(
         title: string,
         code: any,
         subject_type: string,
         subject_weightage: any, ) {
    }
}
export class ICourses {
    constructor(
         name: string,
         section: any,
         grade: string,
         subjects: string
        ) {
    }
}
export class IStudents {
    constructor(
         full_name: string,
         id_no: any,
         birth_date: any,
         gender: string,
         blood_group: string
        ) {
    }
}
export class IEvents {
    constructor(
         name: string,
         section: any,
         grade: any,
         subject: string,
        ) {
    }
}
export class IEnrollment {
    constructor(
         student_id: string,
         date: any,
         term: any,
         year: string,
         course_code: string
        ) {
    }
}
export class IScholarshipCoverage {
    constructor(
        scholarship_code: any,
        fee_type_code: any,
        amount: any,
        amount_type: string
        ) {
    }
}
export class IScholarshipType {
    constructor(
        id: any,
         name: any,
         amount: string,
         amount_type: string
        ) {
    }
}
export class IFeeType {
    constructor(
         fee: any,
         term: string,
         duration: any,
         min_duration: any
        ) {
    }
}


