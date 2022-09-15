import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="SinglePostWrapper">
        <img
          src="https://www.pngfind.com/pngs/m/240-2405208_transparent-nature-background-png-png-download.png"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem Ipsum
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Tanvi</b>
          </span>
          <span className="singlePostDate">1 hr ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem
          integer vitae justo eget. Ut eu sem integer vitae justo eget magna
          fermentum iaculis. Viverra maecenas accumsan lacus vel facilisis
          volutpat. Ut faucibus pulvinar elementum integer. Faucibus vitae
          aliquet nec ullamcorper sit amet risus. Leo duis ut diam quam. Quam
          adipiscing vitae proin sagittis. Nascetur ridiculus mus mauris vitae.
          Diam quis enim lobortis scelerisque fermentum dui faucibus in. Eget
          nunc lobortis mattis aliquam. Tempor commodo ullamcorper a lacus
          vestibulum sed arcu non odio. Volutpat est velit egestas dui id.
          Fringilla urna porttitor rhoncus dolor purus. Ut placerat orci nulla
          pellentesque dignissim enim sit amet. Ut aliquam purus sit amet luctus
          venenatis lectus magna. Velit euismod in pellentesque massa placerat
          duis. Nibh ipsum consequat nisl vel pretium lectus. Sit amet luctus
          venenatis lectus magna fringilla urna porttitor. Lacus luctus accumsan
          tortor posuere ac ut consequat.
        </p>
      </div>
    </div>
  );
}
