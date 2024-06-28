import ProjectList from "@/app/components/ProjectList";

export default function Landing() {
    return (
      <div className="mt-10 text-lg flex flex-col space-y-8">
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

        <ProjectList />
      </div>
    )
}
