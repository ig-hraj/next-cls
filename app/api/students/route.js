let students = [
    {
        id: 1,
        name: "Lalit",
        age: 20
    },

    {
        id: 2,
        name: "Megha",
        age: 19
    }
];

//Get - get details of all the students

export async function GET(){
    return Response.json(students);
}

//POST - add a student

export async function POST(request){
    const data = await request.json();

    const newStudent = {
        id: students.length + 1,
        name: data.name,
        age: data.age
    };

    students.push(newStudent);
    return Response.json(newStudent);
}

//PUT - update a student

export async function PUT(request){
    const data = await request.json();

    const student = students.find(
        student => student.id === data.id
    );

    if(!student){
        return Response.json(
            { message : "Student not found"},
            { status : 404}
        );
    }

    student.name = data.name;
    student.age = data.age;
    return Response.json(student)
}

//DELETE

export async function DELETE(request){
    const data = await request.json();

    const studentExists = students.some(
        student => student.id === data.id
    );

    if(!studentExists){
        return Response.json(
            { message : "Student not found" },
            { status : 404 }
        );
    }

    students = students.filter(
        student => student.id !== data.id
    );

    return Response.json({
        message : "Student deleted successfully!!"
    });
}