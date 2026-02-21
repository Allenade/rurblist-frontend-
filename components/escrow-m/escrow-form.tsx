'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import EscrowStepOne from './escrow-step-one'
import EscrowStepTwo from './price-plan/escrow-step-two'
import EscrowStepThree from './payment-summer/escrow-step-three'
import EscrowStepFour from './payment-confirmation/escrow-fout'
import { IconImage } from '../icon-image/icon-image'

export interface EscrowFormData {
  fullName: string
  email: string
  phone: string
  file: File | null
}

const TOTAL_STEPS = 4

export default function EscrowForm() {
  const router = useRouter()

  const [step, setStep] = useState<number>(1)

  const [formData, setFormData] = useState<EscrowFormData>({
    fullName: '',
    email: '',
    phone: '',
    file: null
  })

  const updateForm = (data: Partial<EscrowFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const nextStep = () => {
    // If we are currently on step 4 → navigate
    if (step === TOTAL_STEPS) {
      router.push('/escrow/success') // 👈 change to your route
      return
    }

    setStep((prev) => prev + 1)
  }

  const prevStep = () => {
    if (step === 1) {
      router.back()
    } else {
      setStep((prev) => prev - 1)
    }
  }

  return (
    <div className="min-h-screen w-full flex justify-center px-4 md:px-0 py-10 mt-5">
      <div className="w-full max-w-3xl">
        {/* HEADER */}
        <div className="relative flex items-center justify-center mb-10 h-10">
          <button
            onClick={prevStep}
            className="absolute left-0 flex items-center"
            type="button"
          >
            <IconImage
              src="/icons/chevron-left.svg"
              alt="back"
              width={20}
              height={20}
            />
          </button>

          <h1 className="text-lg md:text-xl font-semibold text-center">
            Escrow Initiation
          </h1>

          <div className="absolute right-0 text-sm font-medium">
            <span className="text-[#E87722]">
              {String(step).padStart(2, '0')}
            </span>{' '}
            of {String(TOTAL_STEPS).padStart(2, '0')}
          </div>
        </div>

        {/* STEPS */}
        {step === 1 && (
          <EscrowStepOne
            formData={formData}
            updateForm={updateForm}
            onNext={nextStep}
          />
        )}

        {step === 2 && (
          <EscrowStepTwo onNext={nextStep} />
        )}

        {step === 3 && (
          <EscrowStepThree onNext={nextStep} />
        )}

        {step === 4 && (
          <EscrowStepFour onConfirm={nextStep} />
        )}
      </div>
    </div>
  )
}