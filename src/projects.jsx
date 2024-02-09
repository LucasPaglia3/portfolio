import Project from "./project";
import DashboardLogo from "./assets/logo-dash.svg";
import CvLogo from "./assets/logo-cv.png";

const Projects = () => {
  return (
    <>
      <Project
        title={"Admin Dashboard"}
        desc={"App for managing clients, employees, and repairs."}
        img={<img src={DashboardLogo} />}
        web={"https://dashboard-pi-navy.vercel.app/"}
      />
      <Project
        title={"CV-XAcademy"}
        desc={"Back End for a resume builder app."}
        img={<img src={CvLogo} />}
        web={"https://github.com/juliansalvucci/CV-XACADEMY/tree/dev"}
      />
      <Project
        title={"WorldWise"}
        desc={"App for tracking your favourite places in the world."}
        img={"Work in Progress"}
        web={"https://github.com/LucasPaglia3/WorldWise"}
      />
    </>
  );
};

export default Projects;
