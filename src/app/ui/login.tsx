import Form from "@/app/ui/loginForm/loginForm";
import CreateProfessionalAccount from "@/app/ui/createProfessionalAccount";

export default function Login() {

    return (
        <div>
            <div className="bg-white border-none rounded-lg w-[396px] h-[350px] shadow-md p-4">
                <Form/>
            </div>
            <CreateProfessionalAccount/>
        </div>
    )
}