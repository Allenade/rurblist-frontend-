"use client";

import { OrangeButton } from "../button/button";
import { IconImage } from "../icon-image/icon-image";


interface AgentContactInfoProps {
  phone: string;
  email: string;
}

export function AgentContactInfo({
  phone,
  email,
}: AgentContactInfoProps) {
  return (
    <div className="space-y-5">
      <h3 className="text-xl font-semibold  text-[#833700] font-[Georgia]">
        Contact Info
      </h3>

      <div className="space-y-4 text-gray-700">
        <div className="flex items-center gap-3">
          <IconImage src={"/icons/phone.svg"} alt={"Phone"} height={20} width={20}/>
          <p>{phone}</p>
        </div>

        <div className="flex items-center gap-3">
           <IconImage src={"/icons/mail (1).svg"} alt={"Email"} height={20} width={20}/>
          <p>{email}</p>
        </div>
      </div>

      <OrangeButton
        variant="white"
        iconSrc="/icons/edit-2.svg"
        iconAlt="edit"
        className="border border-[#A5A5A5] text-black font-medium font-[Nunito]"
      >
        Edit profile information
      </OrangeButton>
    </div>
  );
}