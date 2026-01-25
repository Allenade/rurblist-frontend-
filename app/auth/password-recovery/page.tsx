import Image from "next/image"

export default function PasswordRecovered() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md text-center">
        <h1 className="text-[40px] font-serif Georgia text-[#05400D] mb-12">
          Password Recovery
        </h1>

        <div className="flex justify-center mb-12">
     <Image
      src="/email_open.png"
      alt="Keys"
      width={257}
      height={226}
      priority
      className="object-contain"
    />
        </div>

        <p className="text-[#555555] Poppins text-[24px]">
          A link has been sent to your email address
        </p>
      </div>
    </main>
  )
}
