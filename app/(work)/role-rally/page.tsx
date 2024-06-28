import ProjectWrapper from "@/app/components/ProjectWrapper";

export default function Page() {
  return (
    <ProjectWrapper
      title="Role Rally"
      desc="Choose your own identities."
      demo="/projects/role-rally.png"
    >
      <p>
        {`
              Role Rally brings a unique solution to online communication by offering one platform where users can manage several digital identities, 
              or 'roles', within a single account.
            `}
      </p>
      <br />
      <p>
        {`
            This means you can have a profile for different parts of your life—like one for school,
                another for personal life,
                 and one more for work—each with its own settings and privacy controls.
            `}
      </p>
      <br />
      <p>
        <a
          className="decoration-blue-400 underline"
          href="https://github.com/INEEDAMONITOR/Role-Rally"
          target="_blank"
          rel="noreferrer"
        >
          See the app
        </a>
        .
      </p>
    </ProjectWrapper>
  )
}