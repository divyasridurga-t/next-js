import "./smallList.css";

export default function smallList({ data }) {
  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="smallList_container">
            <div className="image_container">
              <img
                width={120}
                height={68}
                src={item.thumbnail_url}
              />
            </div>
            <div className="text">
              <h2>
                <a href={item.websiteurl}>{item.title}</a>
              </h2>
            </div>
          </div>
        );
      })}
    </>
  );
}
