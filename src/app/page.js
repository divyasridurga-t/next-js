import Image from "next/image";
import './home.css'

export default function Home() {
  return (
    <div className="home_container">
      <div>
        <h2 className="heading">
          Creative <br />
          Thoughts <br />
          Agency <br />
        </h2>
        <div>
          <button className="learn_more">Learn More</button>
          <button className="contact">Contact</button>
        </div>
        <div>
          <Image width={600} height={100} src={'/images/brands.png'} />
        </div>
      </div>
      <div>
        <Image width={400} height={400} src={'/images/hero.gif'} />
      </div>
    </div>
  );
}
