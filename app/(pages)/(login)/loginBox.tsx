import CreateProfessionalAccount from "./createProfessionalAccount";
import Form from "./loginForm";

export default function LoginBox() {

    return (
        <div>
            <div className="bg-white border-none rounded-lg w-[396px] h-[350px] shadow-md p-4">
                <Form/>
            </div>
            <CreateProfessionalAccount/>
        </div>
    )
}