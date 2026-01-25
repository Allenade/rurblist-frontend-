import Link from "next/link"
import Image from "next/image"
import { OrangeButton } from "@/components/button/button"

export default function EmailSent() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md text-center">
        <h1 className="text-[40px] font-serif Georgia text-[#05400D] mb-3">
          Password Recovered!
        </h1>
        <p className="text-[#808080] mb-12">Password Reset Successful</p>

        <div className="flex justify-center mb-16">
  <Image
      src="/email_sent.png"
      alt="Keys"
      width={257}
      height={226}
      priority
      className="object-contain"
    />
        </div>

        <Link href="/auth/login">
          <OrangeButton fullWidth>Proceed to login</OrangeButton>
        </Link>
      </div>
    </main>
  )
}
