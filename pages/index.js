import HeaderComponent from "@/components/HeaderComponent";
import ProjectCardComponent from "@/components/ProjectCardComponent";

export default function Home() {
  return (
    <main className="px-10 justify-center flex flex-col ">
      <HeaderComponent />
      <h1 className="self-center text-5xl m-14">My Tech Stack</h1>
      <p className="self-center text-2xl mb-10 opacity-60">
        Technologies i've been working with recently
      </p>

      <h1 className="self-center text-5xl m-14">Projects</h1>
      <p className="self-center text-2xl mb-10 opacity-60">
        Things i've built so far
      </p>
      <div className="grid grid-cols-3 gap-5">
        <ProjectCardComponent
          title="Title"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper posuere justo eu consectetur. Suspendisse sodales pellentesque nisl in malesuada."
          imgLink="https://images.unsplash.com/photo-1707150158138-e346fa3914b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <ProjectCardComponent
          title="Title"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper posuere justo eu consectetur. Suspendisse sodales pellentesque nisl in malesuada."
          imgLink="https://images.unsplash.com/photo-1707150158138-e346fa3914b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <ProjectCardComponent
          title="Title"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper posuere justo eu consectetur. Suspendisse sodales pellentesque nisl in malesuada."
          imgLink="https://images.unsplash.com/photo-1707150158138-e346fa3914b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <ProjectCardComponent
          title="Title"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper posuere justo eu consectetur. Suspendisse sodales pellentesque nisl in malesuada."
          imgLink="https://images.unsplash.com/photo-1707150158138-e346fa3914b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <ProjectCardComponent
          title="Title"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper posuere justo eu consectetur. Suspendisse sodales pellentesque nisl in malesuada."
          imgLink="https://images.unsplash.com/photo-1707150158138-e346fa3914b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <ProjectCardComponent
          title="Title"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper posuere justo eu consectetur. Suspendisse sodales pellentesque nisl in malesuada."
          imgLink="https://images.unsplash.com/photo-1707150158138-e346fa3914b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </main>
  );
}
