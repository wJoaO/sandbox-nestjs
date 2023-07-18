import "./App.css";
import { JobList, JobCreate } from './jobs';

function App() {
  return (
    <div className="bg-slate-200 h-full min-h-screen">
      <div className="w-full">
        <JobCreate></JobCreate>
      </div>
      <div>
        <JobList></JobList>
      </div>
    </div>
  );
}

export default App;
