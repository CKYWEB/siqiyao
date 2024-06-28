import ProjectWrapper from "@/app/components/ProjectWrapper";

export default function Page () {
  return (
    <ProjectWrapper
      title="yaji"
      desc="Graceful notes app"
      demo="/projects/yaji.png"
    >
      <p>
        {`
              Yaji aims to simplify the writing process. Often, we write spontaneously, without needing a specific folder or title. With yaji, we capture moments instead.
            `}
      </p>
      <br />
      <p>
        <a
          className="decoration-blue-400 underline"
          href="https://github.com/aaditshah18/yaji"
          target="_blank"
          rel="noreferrer"
        >
          Check out the ongoing concept
        </a>
        .
      </p>
    </ProjectWrapper>
  )
}