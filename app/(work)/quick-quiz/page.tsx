import ProjectWrapper from "@/app/components/ProjectWrapper";

export default function Page() {
  return (
    <ProjectWrapper
      title="QuickQuiz"
      desc="Interactive design of game platform based on Tobii Eye Tracker."
      demo={
        <figure>
          <video className="video" width="480" muted autoPlay>
            <source src="/projects/quickquiz_demo.MP4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </figure>
      }
    >
      <p>
        Based on Unity3D engine, Tobii Unity SDK,{" "}
        <a className="decoration-blue-400 underline" href="https://gaming.tobii.com/product/eye-tracker-5/"
           target="_blank">
          Tobii
          Eye Tracker
        </a>,
        and Material-UI.
        A set of effective solutions was proposed. The project reduces the complexity of game operations
        while
        ensuring the {`game's`} playability and response speed.
      </p>
      <br />
      <a className="decoration-blue-400 underline" href="https://github.com/CKYWEB/QuickQuiz"
         target="_blank">
        Visit the repo.
      </a>
    </ProjectWrapper>
  )
}