import { use, useEffect, useState } from "react";
import "./App.css";
import InProgress from "./components/InProgress/InProgress";
import Navbar from "./components/Navbar/Navbar";
import Resolved from "./components/Resolved/Resolved";
import CustomerTickets from "./components/CustomerTickets/CustomerTickets";
import TasksSection from "./components/TasksSection/TasksSection";
import ResolvedSection from "./components/ResolvedSection/ResolvedSection";
import Footer from "./components/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";

import { toast, ToastContainer } from "react-toastify";


function App() {
  const [inProgress, setInProgress] = useState(0);
  const [resolved, setResolved] = useState(0);
  const [tick, setTick] = useState([]);
  const [taskSection, setTaskSection] = useState([]);
  const [resolvedData, setResolvedData] = useState([]);

  useEffect(() => {
    async function fetchTickets() {
      const res = await fetch("./cardDetail.json");
      const data = await res.json();
      setTick(data);
    }
    fetchTickets();
  }, []);

  const handleCardClick = (card) => {
    setInProgress(inProgress + 1);
    setTaskSection([...taskSection, card]);
    toast("In-Progress!");
  };

  const handleResolveTask = (card) => {
    if (inProgress > 0) {
      setResolved(resolved + 1);
      setInProgress(inProgress - 1);
      const newCardDetail = taskSection.filter((ss) => ss.id !== card.id);
      setTaskSection(newCardDetail);
      setResolvedData([...resolvedData, card]);

      const newCardDetail2 = tick.filter((ss) => ss.id !== card.id);
      setTick(newCardDetail2);
      toast("Completed");
    } else {
      return;
    }
  };

  return (
    <>
      <Navbar />
      <main className="px-4 max-w-7xl mx-auto ">
        <div className=" grid grid-cols-2 gap-8 mt-11">
          <InProgress inProgress={inProgress} />
          <Resolved resolved={resolved} />
        </div>

        <div className="flex md:grid flex-col-reverse  md:grid-cols-12 justify-between w-full mt-11 gap-2 ">
          <div className="md:col-span-9">
            <CustomerTickets
              tickets={tick}
              handleCardClick={handleCardClick}
            />
          </div>
          <div className="md:col-span-3">
            <TasksSection
              taskSection={taskSection}
              handleResolveTask={handleResolveTask}
            />
            <ResolvedSection resolvedData={resolvedData} />
          </div>
        </div>
      </main>
      <Footer />
      <ToastContainer
        position="top-right"
        style={{ width: "40%", marginLeft: "59%" }}
      />
    </>
  );
}

export default App;
