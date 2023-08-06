"use client";

import { ProjectInterface, SessionInterface } from "@/common.types";

type Props = {
  type: string;
  session: SessionInterface;
  //   project?: ProjectInterface;
};

const ProjectForm = ({ type, session }: Props) => {
  return <div>ProjectForm</div>;
};

export default ProjectForm;
