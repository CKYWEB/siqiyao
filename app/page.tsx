import ProjectWrapper from "@/app/components/ProjectWrapper";

export default function Landing() {
    return (
      <div className="mt-10 mx-10 max-w-3xl text-lg flex flex-col space-y-14">
        <section>
          <p>
            I love building all kinds of software that can empower people to do different things,
            and help people finish various tasks in amazing ways.
          </p>
          <br/>
          <p>
            Below you’ll find a selection of my favourite projects and experiences.
          </p>
        </section>
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
        <ProjectWrapper
          title="Good Eats"
          desc="Share cooking recipes and stay connected."
          demo="/projects/goodeats.png"
        >
          <p>
            GoodEats is a community built by and for kitchen lovers, to share their experiences and stay
            connected. {`It's`} a full-stack web app deployed on{" "}
            <a className="decoration-blue-400 underline"
               href="https://goodeats-ui.vercel.app/home"
               target="_blank">Vercel
            </a>.
          </p>
          <br/>
          <p>
            <a className="decoration-blue-400 underline"
               href="https://github.com/CKYWEB/good-eats"
               target="_blank">Visit repo
            </a> to learn more.
          </p>
        </ProjectWrapper>
        <ProjectWrapper
          title="QuickQuiz"
          desc="Interactive design of game platform based on Tobii Eye Tracker."
          demo={
            <figure>
              <video className="video" width="480" muted controls>
                <source src="/projects/quickquiz_demo.MP4" type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </figure>
          }
        >
          <p>
            Based on Unity3D engine, Tobii Unity SDK,
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
          <p>
            <a className="decoration-blue-400 underline" href="https://github.com/CKYWEB/QuickQuiz"
               target="_blank">
              Visit the repo.
            </a>
          </p>
        </ProjectWrapper>
      </div>
    )
}
