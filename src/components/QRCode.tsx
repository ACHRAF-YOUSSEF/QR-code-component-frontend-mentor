import qrcode from "../assets/image-qr-code.png";

const QRCode = () => {
  return (
    <div
      className="
			 flex
			 flex-col
			 flex-wrap
			 items-center
			 justify-center
			 text-center
			 bg-White
			 px-2
			 mx-2
			 my-2
			 rounded-lg
			 sm:w-1/2
			 md:w-1/3
			 lg:w-1/4
			"
    >
      <div
        className="
					flex
					w-fit
					h-fit
					mx-4
					my-4
				"
      >
        <img
          className="rounded-lg"
          src={qrcode}
          alt="qr_code"
        />
      </div>
      <div
        className="
					flex
					flex-col
					flex-wrap
					items-center
					justify-center
					text-center
				"
      >
        <h2
          className="
						text-2xl
					text-Dark-blue
						font-bold
						px-4
						py-4
					"
        >
          Improve your front-end skills by building projects
        </h2>
        <p
          className="
						px-4
						py-4
						font-normal
						text-Grayish-blue
					"
        >
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default QRCode;