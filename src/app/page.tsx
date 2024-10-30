import Footer from "@/app/ui/footer";
import Login from "@/app/ui/login";
import WelcomeInfo from "@/app/ui/welcome-info";

export default function Home() {
  return (
      <>
          <div className="w-screen h-screen pb-[130px] pt-[10px] lg:pt-[130px] flex justify-center items-start lg:items-center">
              <div className="max-h-[60vh] lg:h-full max-w-[80vw] flex justify-start lg:justify-evenly flex-col lg:flex-row">
                  <WelcomeInfo />
                  <Login />
              </div>
          </div>
          <Footer />
      </>
  );
}
