
import JobList from "@/components/job-listing-pages/job-list-v3";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Job List V3 || Abrodium - Job Borad ReactJs Template",
  description: "Abrodium - Job Borad ReactJs Template",
};

const JobListPage3 = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <JobList />
    </>
  );
};

export default JobListPage3
