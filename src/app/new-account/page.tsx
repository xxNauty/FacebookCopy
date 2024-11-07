import Logo from "@/app/common/logo";
import Form from "@/app/new-account/ui/form";
import Footer from "@/app/common/footer";

export default function Page(){
    return (
        <div>
            <Logo additionalStyles={["mb-7", "mt-9"]}/>
            <Form />
            <Footer isFixed={false} />
        </div>
    );
}