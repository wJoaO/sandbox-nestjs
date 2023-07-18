import { useEffect, useState } from "react";
import { JobModel } from "../models";
import { JobItem } from "./JobItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { JobAPI } from "../api";

export function JobList() {
  const [jobs, setJobs] = useState<JobModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(async () => {
      const result_jobs = await JobAPI.list();
      setJobs(result_jobs);
      setLoading(false);
    }, 1500);
    return () => {
      clearInterval(interval);
    };
  });

  const renderJob = (job: JobModel) => {
    return <JobItem key={job.job_id} job={job} />;
  };

  if (loading) {
    return (
      <div className="w-full flex justify-center text-gray-700">
        <FontAwesomeIcon icon={faSpinner} spin size="3x" />
      </div>
    );
  }

  const renderPhantomElements = (i: number) => {
    return (
      <div className="flex-grow w-60 mr-2 mb-2" key={`phantom-${i}`}></div>
    );
  };

  return (
    <div className="flex flex-wrap">
      {jobs.map(renderJob)}
      {Array.from(Array(10).keys()).map(renderPhantomElements)}
    </div>
  );
}
