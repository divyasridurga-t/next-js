import Image from "next/image";
import "./about.css";

export default function AboutPage() {
  return (
    <>
      <div className="about_container">
        <div className="countainer_sub">
          <h1>About Agency</h1>
          <h2>
            We create digital ideas that are bigger, bolder, braver and better.
          </h2>
          <p>
            We create digital ideas that are bigger, bolder, braver and better.
            We create digital ideas that are bigger, bolder, braver and better.
            We create digital ideas that are bigger, bolder, braver and better.
            We create digital ideas that are bigger, bolder, braver and better.
          </p>
        </div>
        <div>
            {/* needt to configure the next.config.mjs file to add the image with external domain */}
          <Image width={400} height={400} src={"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2024/08/07/2644798-pm-vinesh.jpg?im=Resize=(450)"} />
        </div>
      </div>
    </>
  );
}
