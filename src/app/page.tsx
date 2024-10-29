import Footer from "@/app/ui/footer";
import Login from "@/app/ui/login";
import WelcomeInfo from "@/app/ui/welcome-info";
import CreateProfessionalAccount from "@/app/ui/createProfessionalAccount";

export default function Home() {
  return (
      <div>
          <div className="w-screen h-screen pb-[130px] pt-[10px] lg:pt-[130px] flex justify-center lg:items-center items-start">
              <div className="max-h-[60vh] lg:h-full w-[60vw] {/*md:w-full*/} flex justify-start lg:justify-evenly flex-col lg:flex-row">
                  <WelcomeInfo />
                  <Login />
              </div>
          </div>
          <Footer />
      </div>
  );
}
