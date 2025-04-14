import { useState, useEffect } from "react";

function Form() {
  const [newImage, setNewImage] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMemeImages(data.data.memes))
  }, []);

  function getImage() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;

    setNewImage((prevState) => {
      return {
        ...prevState,
        topText: "",
        bottomText: "",
        randomImage: url,
      };
    });
  }

  function handleData(event) {
    const { name, value } = event.target;
    setNewImage((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  return (
    <>
      <section className="flex justify-center m-6">
        <div className="w-lg">
          <div className="flex gap-2 mb-4 justify-between">
            <div>
              <label className="block" htmlFor="topText">
                Top text
              </label>
              <input
                className="border-2 border-gray-300 rounded-sm py-1 w-60"
                type="text"
                id="topText"
                placeholder="Shut up"
                onChange={handleData}
                name="topText"
                value={newImage.topText}
              />
            </div>
            <div>
              <label className="block" htmlFor="bottomText">
                Bottom text
              </label>
              <input
                className="border-2 border-gray-300 rounded-sm py-1 w-60"
                type="text"
                id="bottomText"
                placeholder="And take my money"
                onChange={handleData}
                name="bottomText"
                value={newImage.bottomText}
              />
            </div>
          </div>
          <button
            onClick={getImage}
            className="w-full text-center text-white bg-linear-to-r from-dark-purple to-light-purple py-2 font-bold rounded-sm"
          >
            Get a new meme image
          </button>
        </div>
      </section>

      <section className="m-6 flex justify-center">
        <div className="relative">
          <p className="text top-2 text-white text-2xl font-bold">{newImage.topText}</p>
          <img className="w-lg" src={newImage.randomImage} alt="" />
          <p className="text bottom-2 text-white text-2xl font-bold">
            {newImage.bottomText}
          </p>
        </div>
      </section>
    </>
  );
}

export default Form;
