import ProjectWrapper from "@/app/components/ProjectWrapper";

export default function Page() {
  return (
    <ProjectWrapper
      title="bna"
      desc="Before, Now & After"
      demo="/projects/bna.png"
    >
      <p>
        {`
                        bna is a web app, independently designed and built by myself, that helps you
                        organize your work in a new timeline way,
                        so that you can focus on the priorities.
                    `}
      </p>
      <br/>
      <p>You can visit{" "}
        <a className="decoration-blue-400 underline"
           href="https://github.com/CKYWEB/bna"
           target="_blank">GitHub
        </a> to learn more.
      </p>
    </ProjectWrapper>
  )
}