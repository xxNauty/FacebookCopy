
import Footer from "@/app/common/footer";
import Logo from "@/app/common/logo";
import RegistrationForm from "./registrationForm";

export default function Page(){
    return (
        <div>
            <Logo additionalStyles={["mb-7", "mt-9"]}/>
            <RegistrationForm />
            <Footer isFixed={false} />
        </div>
    );
}