import React from "react"
import { IoCall } from "react-icons/io5"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { IoMail } from "react-icons/io5"

const Footer2 = () => {
  const insta =
    "https://www.instagram.com/hobbysubcouncil_hbtu/?igsh=cmFodmdxdnJ4Ymx1"
  const handleInstaClick = () => {
    window.open(insta, "_blank")
  }

  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/yatendra-yadav-4b7b6a22b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      "_blank"
    )
  }

  const handlePhoneClick = () => {
    alert("Contact no. : +91 6386207230")
  }

  return (
    <div className="w-full h-[7vh] md:h-[10vh] flex items-center px-5 bg-[#246A73] border-t-4 border-[#ddbea8]">
      <h1 className="text-2xl md:text-1xl font-bold text-[#ddbea8]">
        Connect With Us-{" "}
      </h1>
      <div className="ml-auto flex gap-5">
        <IoCall
          onClick={handlePhoneClick}
          className="text-2xl md:text-3xl text-[#ddbea8] hover:scale-110 transition-all cursor-pointer"
        />
        <FaInstagram
          onClick={handleInstaClick}
          className="text-2xl md:text-3xl text-[#ddbea8] hover:scale-110 transition-all cursor-pointer"
        />
        <FaLinkedin
          onClick={handleLinkedInClick}
          className="text-2xl md:text-3xl text-[#ddbea8] hover:scale-110 transition-all cursor-pointer"
        />
      </div>
    </div>
  )
}

export default Footer2
