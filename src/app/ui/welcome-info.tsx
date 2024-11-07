import Logo from "@/app/common/logo";

export default function WelcomeInfo() {

    return (
        <div className="w-[420px] h-[400px] flex flex-col justify-start lg:mr-[100px]">
            <Logo additionalStyles={"lg:text-left"} />
            <div className="text-2xl text-center lg:text-left pb-9">
                Facebook pomaga kontaktować się z innymi osobami oraz udostępniać im różne informacje i materiały.
            </div>
        </div>
    )
}