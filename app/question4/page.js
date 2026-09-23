//Create an application form for a college event and get the details of the participants through a next js application home page should have register now button
//user will click on the button and a form will open validations to apply on form
//1. Name, Email, Registraion no, event category is required 
//2.Name should be of min length 4 characters.
//3. Email in correct format 
//4. Registration number should be not more than 8 characters 
//5. Contact number should not be more than 10 characters.

import Link from "next/link";

export default function Home(){
    return(
        <div>
            <h1>College Form</h1>

            <Link href="/question4/Register">
            <button>Register Now</button>
            </Link>
        </div>
    );
}