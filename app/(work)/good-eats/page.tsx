import ProjectWrapper from "@/app/components/ProjectWrapper";

export default function Page() {
  return (
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
  )
}