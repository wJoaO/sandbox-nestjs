import { JobModel, JobStatus } from "../models";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { memo } from "react";

interface Props {
  job: JobModel;
}

function Component({ job }: Props) {
  console.log("Render Job Item");
  const iconPending = <FontAwesomeIcon icon={faSpinner} spin />;
  const iconDone = (
    <FontAwesomeIcon icon={faCircleCheck} className="text-green-600" />
  );
  return (
    <div className="w-60 flex-grow p-4 mr-2 mb-2 bg-white border border-gray-200 rounded-lg shadow ">
      <div className="flex items-center justify-between">
        <h5 className="font-bold text-gray-900">{job.email}</h5>
        <div className="font-medium text-blue-600">
          {job.status === JobStatus.PENDING ? iconPending : iconDone}
        </div>
      </div>
    </div>
  );
}

export const JobItem = memo(
  Component,
  (prev, next) =>
    prev.job.status === next.job.status && prev.job.job_id === next.job.job_id
);
