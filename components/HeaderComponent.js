import AvatarComponent from "./AvatarComponent";

export default function HeaderComponent() {
  return (
    <div className="flex flex-row justify-center mt-14 mx-20">
      <div>
        <h1 className="text-6xl">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit.
          <br /> Integer id vulputate diam.
        </h1>
      </div>
      <AvatarComponent imgSrc="https://alfonskulturhus.se/wp-content/uploads/2019/07/hurlangt_9_Alfons_FRI_press-756x1024.png" />
    </div>
  );
}
